"use client"

import { Testimonials } from "@/components/unique-testimonial"

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from our happy customers.
          </p>
        </div>
        <Testimonials />
      </div>
    </section>
  )
}
