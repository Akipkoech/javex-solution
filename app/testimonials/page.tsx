import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Quote } from "lucide-react"

export const metadata = {
  title: "Testimonials | Javex Solutions",
  description: "Read what our clients have to say about their experience working with Javex Solutions.",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with Javex Solutions transformed our business. Their team delivered a custom software solution that streamlined our operations and increased efficiency by 40%. Their expertise and professionalism exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CTO, GrowthWave",
      company: "GrowthWave",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Javex Solutions built our e-commerce platform from the ground up. The attention to detail and focus on user experience resulted in a 25% increase in conversion rates within the first month. I highly recommend their services.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, Innovate Labs",
      company: "Innovate Labs",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The website Javex Solutions created for us perfectly captures our brand identity and has significantly improved our online presence. Their team was responsive, creative, and delivered on time and within budget.",
      rating: 5,
    },
    {
      name: "David Thompson",
      position: "Founder, HealthTech Solutions",
      company: "HealthTech Solutions",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Javex Solutions developed a mobile app for our healthcare service that has revolutionized how we interact with patients. Their understanding of our industry and technical expertise made them the perfect partner for this project.",
      rating: 4,
    },
    {
      name: "Lisa Patel",
      position: "Operations Manager, Global Logistics",
      company: "Global Logistics",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The custom logistics software developed by Javex Solutions has streamlined our operations and reduced errors by 60%. Their team took the time to understand our complex requirements and delivered a solution that exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      position: "CEO, RetailPlus",
      company: "RetailPlus",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Javex Solutions helped us transition to a modern e-commerce platform, migrating years of data without any issues. Their technical expertise and project management skills made what could have been a stressful process smooth and efficient.",
      rating: 5,
    },
  ]

  const videoTestimonials = [
    {
      name: "John Martinez",
      position: "CIO, Enterprise Solutions",
      company: "Enterprise Solutions",
      image: "/placeholder.svg?height=300&width=500",
      quote:
        "Javex Solutions delivered a comprehensive digital transformation for our company that has fundamentally changed how we operate. Their strategic approach and technical expertise were invaluable.",
    },
    {
      name: "Amanda Lewis",
      position: "Director of Digital, Creative Agency",
      company: "Creative Agency",
      image: "/placeholder.svg?height=300&width=500",
      quote:
        "The web application Javex Solutions built for our agency has become central to our client management process. Their team was collaborative, responsive, and delivered exactly what we needed.",
    },
  ]

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="bg-muted">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-lg text-muted-foreground">
              Hear what our clients have to say about their experience working with Javex Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="container px-4 py-8 mx-auto">
        <div className="bg-primary/5 p-8 md:p-12 rounded-lg max-w-4xl mx-auto relative">
          <Quote className="h-16 w-16 text-primary/20 absolute top-6 left-6" />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl italic mb-8 text-center">
              "Partnering with Javex Solutions was one of the best decisions we made for our business. Their team's
              technical expertise, creativity, and commitment to our success resulted in a digital solution that has
              transformed our operations and delighted our customers."
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="James Wilson"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">James Wilson</h3>
              <p className="text-primary">CEO, InnovateX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Grid */}
      <section className="container px-4 py-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud of the relationships we've built and the results we've delivered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardContent className="pt-6 flex-grow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="italic mb-6">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-4 border-t">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-muted py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our clients about their experience working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {videoTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="relative aspect-video mb-6 overflow-hidden rounded-md">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} Video Testimonial`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="italic mb-4">{testimonial.quote}</p>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto bg-muted p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Success Story: TechNova</h2>
              <p className="mb-4">
                TechNova approached us with the challenge of modernizing their legacy systems while maintaining business
                continuity. Our team developed a phased migration strategy and custom software solution that resulted
                in:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>50% reduction in processing time</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>35% decrease in operational costs</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Improved data security and compliance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Seamless integration with new technologies</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link href="/portfolio">Read Full Case Study</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="TechNova Case Study"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
              <div className="mt-4 p-4 bg-background rounded-md">
                <p className="italic">
                  "Javex Solutions understood our complex requirements and delivered a solution that not only met our
                  immediate needs but positioned us for future growth."
                </p>
                <div className="mt-2">
                  <p className="font-bold">Thomas Reynolds</p>
                  <p className="text-sm text-muted-foreground">CTO, TechNova</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Javex Solutions can help your business achieve its technology goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-medium">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
