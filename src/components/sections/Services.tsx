"use client"

import { Wrench, Snowflake, Thermometer, Fan, Wind, Droplets } from "lucide-react"

const services = [
  {
    title: "AC Repair",
    summary: "Fast, reliable repairs for all makes and models. Same-day service available with upfront pricing.",
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=600&h=400&fm=webp",
  },
  {
    title: "AC Installation",
    summary: "Expert installation of central AC, ductless mini-splits, and window units from top brands.",
    icon: Thermometer,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&h=400&fm=webp",
  },
  {
    title: "Heating Repair",
    summary: "Furnace, heat pump, and boiler repairs to keep your home warm all winter long.",
    icon: Fan,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&h=400&fm=webp",
  },
  {
    title: "HVAC Maintenance",
    summary: "Seasonal tune-ups to extend your system's life, improve efficiency, and prevent breakdowns.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&h=400&fm=webp",
  },
  {
    title: "Duct Cleaning",
    summary: "Professional duct sanitization and cleaning to improve air quality and system performance.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=600&h=400&fm=webp",
  },
  {
    title: "Indoor Air Quality",
    summary: "Air purifiers, humidifiers, and ventilation solutions for healthier indoor air.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=600&h=400&fm=webp",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Complete HVAC Solutions
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            From emergency repairs to full installations, we handle every aspect
            of your heating and cooling needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                      <Icon className="h-4 w-4 text-gray-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.summary}
                  </p>
                  <a
                    href="#contact"
                    className="mt-3 inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors h-12"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
