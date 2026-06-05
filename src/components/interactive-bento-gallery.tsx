"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react';

interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        }, options);
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let mounted = true;
        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return;
            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play();
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve;
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };
        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
    );
};

interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Dark overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-40"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        {/* Close button - always visible top-right */}
                        <motion.button
                            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg"
                            onClick={onClose}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Close gallery"
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <div className="flex flex-col items-center w-full max-w-4xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedItem.id}
                                    className="relative w-full aspect-[16/9] max-h-[75vh] rounded-xl overflow-hidden shadow-2xl"
                                    initial={{ y: 30, scale: 0.95 }}
                                    animate={{ y: 0, scale: 1 }}
                                    exit={{ y: 30, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                >
                                    <MediaItem item={selectedItem} className="w-full h-full object-contain bg-gray-900" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                        <h3 className="text-white text-lg md:text-xl font-semibold">
                                            {selectedItem.title}
                                        </h3>
                                        <p className="text-white/80 text-sm mt-1">
                                            {selectedItem.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Thumbnail dock */}
                            <motion.div
                                drag
                                dragMomentum={false}
                                dragElastic={0.1}
                                initial={false}
                                animate={{ x: dockPosition.x, y: dockPosition.y }}
                                onDragEnd={(_, info) => {
                                    setDockPosition(prev => ({
                                        x: prev.x + info.offset.x,
                                        y: prev.y + info.offset.y
                                    }));
                                }}
                                className="mt-4 touch-none"
                            >
                                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10">
                                    {mediaItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedItem(item);
                                            }}
                                            style={{
                                                zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                                            }}
                                            className={`
                                                relative group w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer
                                                ${selectedItem.id === item.id ? 'ring-2 ring-white shadow-lg' : 'ring-1 ring-white/20 hover:ring-white/40'}
                                            `}
                                            whileHover={{ scale: 1.15, y: -4 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {title && (
                <div className="mb-8 text-center">
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h1>
                    {description && (
                        <motion.p
                            className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            )}
            <AnimatePresence mode="wait">
                {selectedItem ? (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={true}
                        onClose={() => setSelectedItem(null)}
                        setSelectedItem={setSelectedItem}
                        mediaItems={items}
                    />
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[100px]"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
                        }}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layoutId={`media-${item.id}`}
                                className={`relative overflow-hidden rounded-xl cursor-pointer ${item.span}`}
                                onClick={() => !isDragging && setSelectedItem(item)}
                                variants={{
                                    hidden: { y: 50, scale: 0.9, opacity: 0 },
                                    visible: {
                                        y: 0, scale: 1, opacity: 1,
                                        transition: { type: "spring", stiffness: 350, damping: 25, delay: index * 0.05 }
                                    }
                                }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <MediaItem item={item} className="absolute inset-0 w-full h-full" onClick={() => !isDragging && setSelectedItem(item)} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                    <h3 className="text-white text-xs sm:text-sm md:text-base font-medium line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-[10px] sm:text-xs md:text-sm mt-0.5 line-clamp-2">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InteractiveBentoGallery
