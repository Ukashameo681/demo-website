"use client"

import { Gallery4 } from "@/components/gallery4"

const teamMembers = [
  {
    id: "mike-rossi",
    title: "Mike Rossi",
    description: "Lead Technician — 20+ years experience, NATE Certified",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "sarah-kim",
    title: "Sarah Kim",
    description: "Senior HVAC Specialist — Expert in ductless systems & IAQ",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "james-carter",
    title: "James Carter",
    description: "Installation Manager — 15 years, Carrier Master Certified",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "emma-davis",
    title: "Emma Davis",
    description: "Customer Service Director — Your first point of contact",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "david-park",
    title: "David Park",
    description: "Commercial HVAC Lead — Specializing in large-scale systems",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
]

export function Team() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Our Team
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Meet the Experts
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl">
            Our certified technicians bring decades of combined experience to
            every job. Get to know the people behind the service.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Gallery4
          title=""
          description=""
          items={teamMembers}
        />
      </div>
    </section>
  )
}
