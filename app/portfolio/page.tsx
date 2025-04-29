import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

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
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "HealthTrack Mobile App",
      description:
        "A health and fitness tracking application that allows users to monitor their activity, nutrition, and wellness goals with personalized insights.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mobile",
      technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"],
      link: "#",
    },
    {
      title: "FinanceFlow Dashboard",
      description:
        "An intuitive financial management dashboard for a fintech startup, providing real-time analytics, transaction monitoring, and reporting tools.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "SmartHome IoT Platform",
      description:
        "A comprehensive IoT platform for smart home device management, featuring real-time monitoring, automation rules, and voice control integration.",
      image: "/placeholder.svg?height=400&width=600",
      category: "software",
      technologies: ["Python", "MQTT", "AWS IoT", "React"],
      link: "#",
    },
    {
      title: "LogisticsPlus Supply Chain Solution",
      description:
        "An end-to-end supply chain management system for a global logistics company, optimizing inventory, shipping, and delivery processes.",
      image: "/placeholder.svg?height=400&width=600",
      category: "software",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      link: "#",
    },
    {
      title: "EduLearn Virtual Classroom",
      description:
        "A virtual learning platform for educational institutions, featuring live classes, course management, and student progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["Next.js", "WebRTC", "MongoDB", "Socket.io"],
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="bg-muted">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Explore our successful projects and see how we've helped businesses achieve their technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="container px-4 py-8 mx-auto">
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="software">Custom Software</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          {["web", "mobile", "software"].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Case Studies Section */}
      <section className="bg-muted py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into some of our most impactful projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((project, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                  <p className="text-muted-foreground">
                    The client needed a scalable solution to address their growing business needs while maintaining
                    performance and security.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Solution</h4>
                  <p className="text-muted-foreground">
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
                  <h4 className="text-lg font-semibold mb-2">Results</h4>
                  <p className="text-muted-foreground">
                    The solution resulted in a 40% increase in efficiency, 25% cost reduction, and significantly
                    improved user satisfaction.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Read Full Case Study
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Javex Solutions can help bring your vision to life.
          </p>
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-base">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <Badge key={i} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        <Button asChild variant="outline" className="w-full">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
