"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white text-sm font-bold">
            CA
          </div>
          <span className="text-lg font-bold tracking-tight">CoolAir Pro</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+12125551234"
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-black"
          >
            <Phone className="h-4 w-4" />
            (212) 555-1234
          </a>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Book Now
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+12125551234"
              className="flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-800"
            >
              <Phone className="h-4 w-4" />
              (212) 555-1234
            </a>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors w-full"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
