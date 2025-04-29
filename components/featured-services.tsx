import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Layers, LineChart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedServices() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      link: "/services",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Layers className="h-10 w-10 text-primary" />,
      link: "/services",
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions designed to address your specific business challenges.",
      icon: <Code className="h-10 w-10 text-primary" />,
      link: "/services",
    },
    {
      title: "Cloud Services",
      description: "Comprehensive cloud solutions to enhance scalability and efficiency.",
      icon: <Database className="h-10 w-10 text-primary" />,
      link: "/services",
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights to drive informed decisions.",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      link: "/services",
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      link: "/services",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="flex flex-col h-full">
          <CardHeader>
            <div className="mb-4">{service.icon}</div>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto pt-4">
            <Button asChild variant="outline" className="w-full">
              <Link href={service.link}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
