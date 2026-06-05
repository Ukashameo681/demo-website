import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Services } from "@/components/sections/Services"
import { Gallery } from "@/components/sections/Gallery"
import { TestimonialSection } from "@/components/sections/Testimonials"
import { Clients } from "@/components/sections/Clients"
import { Team } from "@/components/sections/Team"
import { Contact } from "@/components/sections/Contact"
import { FooterSection } from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Gallery />
        <TestimonialSection />
        <Clients />
        <Team />
        <Contact />
      </main>
      <FooterSection />
    </>
  )
}
