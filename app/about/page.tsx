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
      name: "Jacob Muema",
      role: "CEO & Founder",
      bio: "With over 4 years of experience in the tech industry, Jacob founded Javex Solutions with a vision to deliver innovative technology solutions to businesses worldwide.",
      image: "/images/founder.jpg",
    },
    {
      name: "Nicholas Mulinge",
      role: "CTO",
      bio: "Nicholas leads our technical team with his extensive knowledge in software architecture and emerging technologies, ensuring we deliver cutting-edge solutions.",
      image: "/images/cto.jpg",
    },
    {
      name: "Evans Ndilinge",
      role: "Lead Developer",
      bio: "Evans brings creativity and technical expertise to every project, specializing in creating robust, scalable applications for our clients.",
      image: "/images/lead-developer.jpg",
    },
    {
      name: "Meshack Mumo",
      role: "UX/UI Designer",
      bio: "Meshack designs user-friendly interfaces that enhance the user experience, making our applications not only functional but also visually appealing.",
      image: "/images/ui-designer.jpg",
    },
    {
      name: "Alex Koech",
      role: "Cyber-security Specialist",
      bio: "Alex ensures the security of our applications and systems, implementing best practices to protect our clients' data and privacy.",
      image: "/images/cyber-security.jpg",
    },
    {
      name: "Meshack Mue",
      role: "Electronics Engineer",
      bio: "Meshack specializes in hardware integration and IoT solutions, bridging the gap between software and hardware for innovative tech solutions.",
      image: "/images/electronics-engineer.jpg",
    }
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
              Founded in 2024 by a group of close friends fresh out of university, Javex Solutions started with a bold idea: to turn our passion for tech into something that could make a real impact.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              What began as late-night coding sessions and big dreams has grown into a thriving tech company helping businesses of all sizes build smarter, faster, and better.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We’ve stayed true to our roots—fueling every project with creativity, collaboration, and the drive to keep learning and pushing boundaries. The journey is just getting started, and we’re excited for what’s ahead.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey is just beginning, and we can't wait to see where it takes us next.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/Javex-group.jpg"
              alt="Javex Solutions Group Photo"
              width={600}
              height={700}
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            The talented professionals behind Javex Solutions' success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white border border-blue-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center"
            >
              <div className="relative w-full pt-8 pb-4 flex justify-center">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
                <div className="relative z-10 w-40 h-40 rounded-full border-4 border-white shadow-md overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <CardContent className="p-6 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-blue-500 font-medium mb-4 pb-2 border-b border-gray-100">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}