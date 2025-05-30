import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Smartphone, Server } from "lucide-react"
import { JSX } from "react"

export const metadata = {
  title: "Portfolio | Javex Solutions",
  description: "Explore our portfolio of successful projects and technology solutions delivered by Javex Solutions.",
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "TechNova E-commerce Platform",
      description:
        "A comprehensive e-commerce solution for a leading technology retailer, featuring advanced product filtering, user accounts, and secure payment processing.",
      image: "/images/Tech-nova.jpg",
      category: "web",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "HealthTrack Mobile App",
      description:
        "A health and fitness tracking application that allows users to monitor their activity, nutrition, and wellness goals with personalized insights.",
      image: "/images/Fitness-app.jpg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"],
      link: "#",
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "FinanceFlow Dashboard",
      description:
        "An intuitive financial management dashboard for a fintech startup, providing real-time analytics, transaction monitoring, and reporting tools.",
      image: "/images/Finance-flow.jpg",
      category: "web",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "SmartHome IoT Platform",
      description:
        "A comprehensive IoT platform for smart home device management, featuring real-time monitoring, automation rules, and voice control integration.",
      image: "/images/IoT.jpg",
      category: "software",
      technologies: ["Python", "MQTT", "AWS IoT", "React"],
      link: "#",
      icon: <Server className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "LogisticsPlus Supply Chain Solution",
      description:
        "An end-to-end supply chain management system for a global logistics company, optimizing inventory, shipping, and delivery processes.",
      image: "/images/Supply-chain.jpg",
      category: "software",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      link: "#",
      icon: <Server className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "EduLearn Virtual Classroom",
      description:
        "A virtual learning platform for educational institutions, featuring live classes, course management, and student progress tracking.",
      image: "/images/Edu-app.jpg",
      category: "web",
      technologies: ["Next.js", "WebRTC", "MongoDB", "Socket.io"],
      link: "#",
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
  ]

  return (
    <div className="flex flex-col gap-20 bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg">
        <div className="container px-4 py-16 md:py-24 mx-auto min-h-[100px]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Code className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Portfolio</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our successful projects and see how we've helped businesses achieve their technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
              <Server className="h-8 w-8 text-blue-500" />
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Dive deeper into some of our most impactful projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((project, index) => (
              <Card
                key={index}
                className="bg-white/90 p-8 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-black">{project.title}</h3>
                <div className="mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-black">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The client needed a scalable solution to address their growing business needs while maintaining
                    performance and security.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-black">Solution</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We developed a custom{" "}
                    {project.category === "web"
                      ? "web application"
                      : project.category === "mobile"
                        ? "mobile app"
                        : "software solution"}{" "}
                    using {project.technologies.join(", ")} to meet their specific requirements.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-black">Results</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The solution resulted in a 40% increase in efficiency, 25% cost reduction, and significantly
                    improved user satisfaction.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-full transition-transform hover:scale-105"
                >
                  Read Full Case Study
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to Build Your Next Project?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Let's discuss how Javex Solutions can help bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

type Project = {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link: string
  icon: JSX.Element
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-white/90 border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {project.icon}
          <CardTitle className="text-xl text-black line-clamp-2">{project.title}</CardTitle>
        </div>
        <CardDescription className="text-base text-gray-600 line-clamp-3 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 text-xs sm:text-sm"
          >
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        <Button
          asChild
          variant="outline"
          className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-full transition-transform hover:scale-105 text-sm sm:text-base"
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}