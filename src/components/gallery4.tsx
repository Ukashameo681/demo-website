"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "shadcn-ui",
    title: "shadcn/ui: Building a Modern Component Library",
    description:
      "Explore how shadcn/ui revolutionized React component libraries...",
    href: "https://ui.shadcn.com",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?q=80&w=1080&fm=webp",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS: The Utility-First Revolution",
    description:
      "Discover how Tailwind CSS transformed the way developers style...",
    href: "https://tailwindcss.com",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?q=80&w=1080&fm=webp",
  },
  {
    id: "astro",
    title: "Astro: The All-in-One Web Framework",
    description:
      "Learn how Astro's innovative 'Islands Architecture'...",
    href: "https://astro.build",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?q=80&w=1080&fm=webp",
  },
  {
    id: "react",
    title: "React: Pioneering Component-Based UI",
    description:
      "See how React continues to shape modern web development...",
    href: "https://react.dev",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?q=80&w=1080&fm=webp",
  },
  {
    id: "nextjs",
    title: "Next.js: The React Framework for Production",
    description:
      "Explore how Next.js has become the go-to framework...",
    href: "https://nextjs.org",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?q=80&w=1080&fm=webp",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "Discover how leading companies and developers are leveraging modern web technologies.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("reInit", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("reInit", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="mb-6 flex items-end justify-between md:mb-8">
          <div className="flex flex-col gap-3">
            {title && (
              <h2 className="text-3xl font-bold md:text-4xl text-black">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-lg text-gray-500 text-sm md:text-base">
                {description}
              </p>
            )}
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev || !carouselApi}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext || !carouselApi}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-4 md:ml-6">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[55%] sm:basis-[35%] md:basis-[28%] lg:basis-[22%] pl-4"
              >
                <a href={item.href} className="group block rounded-xl overflow-hidden">
                  <div className="relative w-full aspect-[5/7] overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-3 text-white md:p-4">
                      <div className="text-sm font-bold md:text-base mb-0.5 leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-white/80 line-clamp-2 mb-2 leading-relaxed">
                        {item.description}
                      </div>
                      <div className="flex items-center text-[11px] font-medium text-white/70 group-hover:text-white transition-colors">
                        View Profile{" "}
                        <ArrowRight className="ml-1.5 size-2.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-black w-6"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
