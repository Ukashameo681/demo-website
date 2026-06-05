"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Request a Quote
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 30 minutes.
            For emergencies, call us now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Thank You!</h3>
                <p className="mt-2 text-gray-500">
                  We&apos;ve received your request and will reach out shortly.
                </p>
                <Button
                  className="mt-6 bg-black text-white hover:bg-gray-800 rounded-full"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/20 focus:border-gray-400 transition"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/20 focus:border-gray-400 transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/20 focus:border-gray-400 transition"
                    placeholder="(212) 555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message / Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/20 focus:border-gray-400 transition resize-none"
                    placeholder="Tell us about your HVAC needs..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-12 text-base"
                >
                  Submit Request
                </Button>
                <p className="text-xs text-gray-400 text-center">
                  This is a demo — no real data is stored.
                </p>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+12125551234"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      (212) 555-1234
                    </a>
                    <p className="text-xs text-gray-400">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:info@coolairpro.com"
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      info@coolairpro.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">
                      123 Broadway, Suite 400
                      <br />
                      New York, NY 10006
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Business Hours</p>
                    <p className="text-sm text-gray-600">
                      Mon–Sat: 7:00 AM – 9:00 PM
                      <br />
                      Sun: 8:00 AM – 6:00 PM
                      <br />
                      <span className="text-green-600 font-medium">24/7 Emergency Service</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Need Immediate Help?
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Our emergency team is standing by 24/7 for urgent AC repairs.
              </p>
              <a
                href="tel:+12125551234"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 transition-colors h-12 w-full"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now — (212) 555-1234
              </a>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Service Areas
              </h3>
              <p className="text-sm text-gray-500">
                Proudly serving all five boroughs of New York City, plus Northern
                New Jersey and Westchester County.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
