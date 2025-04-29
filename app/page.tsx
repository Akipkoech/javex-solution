import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import FeaturedServices from "@/components/featured-services"
import NewsletterSignup from "@/components/newsletter-signup"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-900/5 backdrop-blur-sm z-0" />
        <div className="container relative z-10 px-4 py-24 md:py-32 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              Innovative Tech Solutions for Your Business
            </h1>
            <p className="text-lg text-gray-600">
              Javex Solutions delivers cutting-edge technology services to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-transform hover:scale-105"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 font-medium rounded-full transition-transform hover:scale-105"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Javex Solutions Technology"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl border border-blue-500/30 hover:shadow-blue-500/30 transition-shadow duration-300"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of technology services to meet your business needs.
          </p>
        </div>
        <FeaturedServices />
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 font-medium rounded-full transition-transform hover:scale-105"
          >
            <Link href="/services">
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-200/50 backdrop-blur-lg">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Why Choose Javex Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional value and results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team of skilled professionals brings years of experience and expertise to every project.",
              },
              {
                title: "Cutting-Edge Technology",
                description: "We stay at the forefront of technological advancements to deliver innovative solutions.",
              },
              {
                title: "Client-Focused Approach",
                description:
                  "We prioritize your needs and goals, ensuring solutions that align with your business objectives.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 p-6 rounded-xl border border-blue-500/30 backdrop-blur-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
              >
                <CheckCircle className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-black text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Javex Solutions can help you achieve your technology goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-500 hover:bg-gray-100 font-medium rounded-full transition-transform hover:scale-105"
          >
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container px-4 py-16 mx-auto">
        <NewsletterSignup />
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export const metadata = {
  title: "Javex Solutions - Innovative Tech Solutions",
  description: "Delivering cutting-edge technology services to help your business thrive in the digital age.",
}