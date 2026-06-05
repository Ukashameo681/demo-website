"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Wrench, Clock, ShieldCheck, ThumbsUp } from "lucide-react"

const features = [
  {
    id: 1,
    icon: Wrench,
    title: "Licensed & Certified Technicians",
    description:
      "Our team consists of NATE-certified professionals with ongoing training in the latest HVAC technologies. Every technician undergoes rigorous background checks and skill assessments. We stay current with all manufacturer certifications to ensure your system is serviced by true experts.",
  },
  {
    id: 2,
    icon: Clock,
    title: "Same-Day Service & 24/7 Emergency",
    description:
      "When your AC breaks down in the middle of a heatwave, we're here. We offer same-day service for all repairs and round-the-clock emergency response. Our dispatch team ensures a technician arrives at your doorstep within 2 hours — guaranteed.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    description:
      "We don't consider the job done until you're completely satisfied. If there's an issue, we'll make it right at no extra cost. Every service comes with a full warranty on parts and labor, giving you total peace of mind.",
  },
  {
    id: 4,
    icon: ThumbsUp,
    title: "Upfront Pricing & Financing Options",
    description:
      "No hidden fees, no surprises. You'll receive a detailed quote before any work begins. We also offer flexible financing options with approved credit, making it easier to manage unexpected repairs or planned installations.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Why CoolAir Pro
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            With over three decades of service across NYC Metro, we've built a reputation
            for quality, reliability, and customer-first service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&h=600&fm=webp"
              alt="Our HVAC technician team"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          <div>
            <Accordion type="single" collapsible defaultValue="item-1">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <AccordionItem key={feature.id} value={`item-${feature.id}`}>
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-base font-semibold text-gray-900">
                          {feature.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 leading-relaxed pl-13">
                        {feature.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
