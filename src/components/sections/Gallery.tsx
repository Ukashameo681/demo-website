"use client"

import InteractiveBentoGallery from "@/components/interactive-bento-gallery"

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Central AC Installation",
    desc: "New 5-ton Carrier system installed in Brooklyn high-rise",
    url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&h=900&fm=webp",
    span: "col-span-2 row-span-3",
  },
  {
    id: 2,
    type: "image",
    title: "Emergency AC Repair",
    desc: "Compressor replacement completed in under 3 hours",
    url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&h=800&fm=webp",
    span: "col-span-1 row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Ductless Mini-Split",
    desc: "Multi-zone Mitsubishi system for a Manhattan brownstone",
    url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&h=600&fm=webp",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    type: "image",
    title: "Commercial HVAC",
    desc: "Rooftop unit replacement for a Queens office building",
    url: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=800&h=600&fm=webp",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    type: "image",
    title: "Duct Cleaning",
    desc: "Complete duct sanitation for a 4-bedroom home in Staten Island",
    url: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&h=600&fm=webp",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    type: "image",
    title: "AC Tune-Up",
    desc: "Seasonal maintenance keeps systems running at peak efficiency",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&h=500&fm=webp",
    span: "col-span-2 row-span-1",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Our Work
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Project Gallery
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            See the quality of our work. Every project is backed by skilled
            craftsmanship and attention to detail.
          </p>
        </div>
      </div>
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title=""
        description=""
      />
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Click any image to view full details
        </p>
      </div>
    </section>
  )
}
