import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Layers, LineChart, Shield } from "lucide-react"

export const metadata = {
  title: "Services | Javex Solutions",
  description: "Explore the comprehensive range of technology services offered by Javex Solutions.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      details: [
        "Responsive website design",
        "Progressive web applications",
        "E-commerce solutions",
        "Content management systems",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      icon: <Layers className="h-10 w-10 text-primary" />,
      details: [
        "iOS and Android development",
        "Cross-platform solutions",
        "App maintenance and updates",
        "UI/UX design for mobile",
      ],
    },
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business challenges and requirements.",
      icon: <Code className="h-10 w-10 text-primary" />,
      details: [
        "Enterprise applications",
        "Workflow automation",
        "Legacy system modernization",
        "Integration services",
      ],
    },
    {
      title: "Cloud Services",
      description:
        "Comprehensive cloud solutions to enhance scalability, security, and efficiency of your IT infrastructure.",
      icon: <Database className="h-10 w-10 text-primary" />,
      details: [
        "Cloud migration",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Cloud optimization",
      ],
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights to drive informed business decisions and strategy.",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      details: ["Business intelligence", "Data visualization", "Predictive analytics", "Big data solutions"],
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions designed to safeguard your digital assets.",
      icon: <Shield className="h-10 w-10 text-primary" />,
      details: ["Security assessments", "Threat detection and response", "Compliance solutions", "Security training"],
    },
  ]

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="bg-muted">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business, goals, and requirements.",
              },
              {
                step: "02",
                title: "Planning",
                description: "We develop a detailed project plan with timelines and deliverables.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution using the latest technologies and best practices.",
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "We deploy your solution and provide ongoing support and maintenance.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss how Javex Solutions can help with your technology needs.
          </p>
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
