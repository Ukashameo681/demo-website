"use client"

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const serviceLinks = [
  { name: "AC Repair", href: "#services" },
  { name: "AC Installation", href: "#services" },
  { name: "Heating Repair", href: "#services" },
  { name: "HVAC Maintenance", href: "#services" },
  { name: "Duct Cleaning", href: "#services" },
  { name: "Emergency Service", href: "#contact" },
]

export function FooterSection() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black text-sm font-bold">
                CA
              </div>
              <span className="text-lg font-bold text-white">CoolAir Pro</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              NYC Metro&apos;s trusted HVAC service provider since 1992.
              Licensed, insured, and dedicated to your comfort.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+12125551234" className="hover:text-white transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@coolairpro.com" className="hover:text-white transition-colors">
                  info@coolairpro.com
                </a>
              </li>
              <li>
                123 Broadway, Suite 400
                <br />
                New York, NY 10006
              </li>
              <li className="text-green-400 font-medium">
                24/7 Emergency Service
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} CoolAir Pro HVAC Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
