import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Globe, Layers, LineChart, Shield, Search, ClipboardList, Hammer, Rocket } from "lucide-react"

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
      icon: <Globe className="h-10 w-10 text-blue-500" />,
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
      icon: <Layers className="h-10 w-10 text-blue-500" />,
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
      icon: <Code className="h-10 w-10 text-blue-500" />,
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
      icon: <Database className="h-10 w-10 text-blue-500" />,
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
      icon: <LineChart className="h-10 w-10 text-blue-500" />,
      details: ["Business intelligence", "Data visualization", "Predictive analytics", "Big data solutions"],
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions designed to safeguard your digital assets.",
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      details: ["Security assessments", "Threat detection and response", "Compliance solutions", "Security training"],
    },
  ]

  return (
    <div className="flex flex-col gap-20 bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Code className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Services</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col h-full bg-white/90 border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl text-black">{service.title}</CardTitle>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-full transition-transform hover:scale-105"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
              <Layers className="h-8 w-8 text-blue-500" />
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We follow a structured approach to ensure successful project delivery.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business, goals, and requirements.",
                icon: <Search className="h-6 w-6 text-blue-500" />,
              },
              {
                step: "02",
                title: "Planning",
                description: "We develop a detailed project plan with timelines and deliverables.",
                icon: <ClipboardList className="h-6 w-6 text-blue-500" />,
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution using the latest technologies and best practices.",
                icon: <Hammer className="h-6 w-6 text-blue-500" />,
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "We deploy your solution and provide ongoing support and maintenance.",
                icon: <Rocket className="h-6 w-6 text-blue-500" />,
              },
            ].map((item, index) => (
              <div key={index} className="relative z-10">
                <Card
                  className="bg-white/90 p-6 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-extrabold text-blue-500/20">{item.step}</div>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
                {/* Connector Line (visible on md+ screens, except for the last card) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-[-2rem] w-8 h-1 bg-blue-500/30 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 mx-auto text-center bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg text-gray-50 mb-8 leading-relaxed">
            Contact us today to discuss how Javex Solutions can help with your technology needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
          >
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