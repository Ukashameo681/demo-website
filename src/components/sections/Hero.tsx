"use client"

import { Typewriter } from "@/components/ui/typewriter-text"
import { Phone, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1920&h=1080&fm=webp')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          24/7 Emergency Service Available
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Expert AC Repair & HVAC Services in{" "}
          <span className="text-white">NYC Metro</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          <Typewriter
            text={["Licensed Technicians", "Rapid Response", "Financing Available", "100% Satisfaction Guaranteed"]}
            speed={70}
            deleteSpeed={40}
            loop
            delay={2000}
            className="font-semibold text-white"
          />
          <span className="block mt-2 text-gray-300">
            Trusted by thousands since 1992
          </span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-black hover:bg-gray-100 transition-colors h-12"
          >
            Schedule Service
          </a>
          <a
            href="tel:+12125551234"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base text-white hover:bg-white/10 transition-colors h-12"
          >
            <Phone className="h-4 w-4 mr-2" />
            (212) 555-1234
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "30+", label: "Years Experience" },
            { value: "15K+", label: "Happy Customers" },
            { value: "4.9", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
