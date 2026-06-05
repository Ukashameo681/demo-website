"use client"

import { Sparkles } from "@/components/ui/sparkles"

const clients = [
  {
    name: "Marriott International",
    type: "Hotel",
    logo: "https://pbs.twimg.com/profile_images/779174597572825089/rqFEczhf_400x400.jpg",
  },
  {
    name: "Hilton Hotels",
    type: "Hotel",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZoo2hapPT1XbYyagzxj2SQBqtKn-TjQojw&s",
  },
  {
    name: "McDonald's",
    type: "Restaurant",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHutQ-GEKZlgbk4wwnLbEVkbTlrVOWugesg&s",
  },
  {
    name: "Starbucks",
    type: "Restaurant",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIbY_LReR-trJ8zEzP_AhNrIlf-5PUAR00g&s",
  },
  {
    name: "Hyatt Hotels",
    type: "Hotel",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpojj9lzU9dWk-F2IMr6yIflmM64XuILPtJg&s",
  },
  {
    name: "Yum! Brands",
    type: "Restaurant",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iNnYqV0v0_S07v9-agaELON1Tu8B2FHdKg&s",
  },
  {
    name: "Darden",
    type: "Restaurant",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4yg1UrRSNVRUdwiGM-L3vtuU5YUGCMJppw&s",
  },
  {
    name: "Wyndham",
    type: "Hotel",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtlRPBWwMbHJ6-HxVZ1t5mVNV8bk4_XYcBA&s",
  },
]

export function Clients() {
  return (
    <section className="relative py-20 md:py-28 bg-gray-50 overflow-hidden">
      <Sparkles
        density={200}
        speed={0.5}
        color="#1a1a1a"
        size={1.2}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Clients We Serve
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Trusted by Leading Hotels & Restaurants
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            From luxury hotels to quick-service restaurants, we keep premier
            hospitality venues across the USA comfortable year-round.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-full h-16 px-4">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {client.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
