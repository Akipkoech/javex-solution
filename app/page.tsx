import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight, Users, Rocket, Target, Mail } from "lucide-react"
import NewsletterSignup from "@/components/newsletter-signup"
import WhatsAppButton from "@/components/whatsapp-button"
import FeaturedServices from "@/components/FeaturedServices"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center min-h-[700px] flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/hero-section.jpg')" }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container relative z-10 px-4 py-24 md:py-32 mx-auto h-full flex items-center">
          <div className="max-w-xl flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white">
              Innovative Tech Solutions for Your Business
            </h1>
            <p className="text-lg font-serif font-semibold text-gray-200">
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
                className="border-white text-white hover:bg-white/20 font-medium rounded-full transition-transform hover:scale-105"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team of skilled professionals brings years of experience and expertise to every project.",
                icon: <Users className="h-10 w-10 text-blue-400 mb-4" />,
              },
              {
                title: "Cutting-Edge Technology",
                description: "We stay at the forefront of technological advancements to deliver innovative solutions.",
                icon: <Rocket className="h-10 w-10 text-blue-400 mb-4" />,
              },
              {
                title: "Client-Focused Approach",
                description:
                  "We prioritize your needs and goals, ensuring solutions that align with your business objectives.",
                icon: <Target className="h-10 w-10 text-blue-400 mb-4" />,
              },
              {
                title: "Proven Results",
                description:
                  "Our track record speaks for itself, with numerous satisfied clients and successful projects.",
                icon: <CheckCircle className="h-10 w-10 text-blue-400 mb-4" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 p-8 rounded-xl border border-blue-500/20 backdrop-blur-md shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-black text-white py-16">
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
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-lg border border-blue-500/20 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            <Mail className="h-12 w-12 text-blue-400" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">Stay Updated with Javex Solutions</h2>
            <p className="text-gray-600 max-w-md">
              Subscribe to our newsletter for the latest tech insights, updates, and exclusive offers.
            </p>
            <NewsletterSignup />
            <p className="text-sm text-gray-500">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
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