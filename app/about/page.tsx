import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "About Us | Javex Solutions",
  description: "Learn about Javex Solutions, our mission, vision, and the team behind our innovative tech services.",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in the tech industry, Alex founded Javex Solutions with a vision to deliver innovative technology solutions to businesses worldwide.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Sarah leads our technical team with her extensive knowledge in software architecture and emerging technologies, ensuring we deliver cutting-edge solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Client Services",
      bio: "Michael ensures our clients receive exceptional service and that our solutions align perfectly with their business objectives and technical requirements.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Patel",
      role: "Lead Developer",
      bio: "Emily brings creativity and technical expertise to every project, specializing in creating robust, scalable applications for our clients.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="bg-muted">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Javex Solutions</h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate technologists dedicated to helping businesses thrive through innovative tech
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container px-4 py-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2015, Javex Solutions began with a simple mission: to make cutting-edge technology accessible
              to businesses of all sizes.
            </p>
            <p className="text-lg mb-4">
              What started as a small team of passionate developers has grown into a comprehensive technology partner
              serving clients across industries and around the globe.
            </p>
            <p className="text-lg">
              Throughout our journey, we've remained committed to our core values of innovation, excellence, and client
              satisfaction, driving us to continuously evolve and improve our services.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Javex Solutions Office"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-16">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="mission" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="vision">Our Vision</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-6 p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                At Javex Solutions, our mission is to empower businesses through technology, delivering innovative,
                reliable, and scalable solutions that drive growth and efficiency. We are committed to understanding our
                clients' unique challenges and providing tailored services that exceed expectations.
              </p>
            </TabsContent>
            <TabsContent value="vision" className="mt-6 p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                We envision a future where businesses of all sizes can harness the full potential of technology to
                achieve their goals. Javex Solutions aims to be at the forefront of this transformation, recognized
                globally as a trusted technology partner that consistently delivers excellence and drives innovation.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented professionals behind Javex Solutions' success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
