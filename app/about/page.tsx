import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Users, Rocket, Target, Briefcase } from "lucide-react"

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
    <div className="flex flex-col gap-20 bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">About Javex Solutions</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're a team of passionate technologists dedicated to helping businesses thrive through innovative tech
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container px-4 py-16 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-black">
              <Rocket className="h-8 w-8 text-blue-500" />
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded in 2015, Javex Solutions began with a simple mission: to make cutting-edge technology accessible
              to businesses of all sizes.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              What started as a small team of passionate developers has grown into a comprehensive technology partner
              serving clients across industries and around the globe.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
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
              className="rounded-xl shadow-lg border border-blue-500/20 transition-transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-200/50 backdrop-blur-lg py-16">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="mission" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-white/90 border border-blue-500/20 rounded-full">
              <TabsTrigger
                value="mission"
                className="rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Mission
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                className="rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Vision
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="mission"
              className="mt-6 p-8 bg-white/90 rounded-xl shadow-lg border border-blue-500/20 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                <Target className="h-6 w-6 text-blue-500" />
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Javex Solutions, our mission is to empower businesses through technology, delivering innovative,
                reliable, and scalable solutions that drive growth and efficiency. We are committed to understanding our
                clients' unique challenges and providing tailored services that exceed expectations.
              </p>
            </TabsContent>
            <TabsContent
              value="vision"
              className="mt-6 p-8 bg-white/90 rounded-xl shadow-lg border border-blue-500/20 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-black">
                <Rocket className="h-6 w-6 text-blue-500" />
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
            <Users className="h-8 w-8 text-blue-500" />
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The talented professionals behind Javex Solutions' success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/90 border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black">{member.name}</h3>
                <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}