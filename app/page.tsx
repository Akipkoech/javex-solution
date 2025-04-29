import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import FeaturedServices from "@/components/featured-services"
import NewsletterSignup from "@/components/newsletter-signup"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0" />
        <div className="container relative z-10 px-4 py-24 md:py-32 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Innovative Tech Solutions for Your Business
            </h1>
            <p className="text-lg text-muted-foreground">
              Javex Solutions delivers cutting-edge technology services to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="font-medium">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
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
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of technology services to meet your business needs.
          </p>
        </div>
        <FeaturedServices />
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="font-medium">
            <Link href="/services">
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Javex Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Javex Solutions can help you achieve your technology goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-medium">
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