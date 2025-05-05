"use client"
import { useState, useEffect } from "react"

const services = [
  {
    title: "Cloud Integration",
    description: "Seamlessly connect your business with scalable cloud solutions tailored to your needs.",
    icon: "☁️",
  },
  {
    title: "AI Automation",
    description: "Leverage artificial intelligence to streamline operations and boost efficiency.",
    icon: "🤖",
  },
  {
    title: "Cybersecurity",
    description: "Protect your data with advanced security protocols and proactive monitoring.",
    icon: "🔒",
  },
  {
    title: "Web Development",
    description: "Build modern, responsive websites that drive engagement and conversions.",
    icon: "🌐",
  },
  {
    title: "Data Analytics",
    description: "Unlock insights from your data with powerful analytics and visualization tools.",
    icon: "📊",
  },
  {
    title: "Mobile App Development",
    description: "Create user-friendly mobile applications that enhance customer experience.",
    icon: "📱",
  },
  {
    title: "IT Consulting",
    description: "Get expert advice on technology strategies to align with your business goals.",
    icon: "💼",
  },
  {
    title: "E-commerce Solutions",
    description: "Transform your online store with robust e-commerce platforms and payment gateways.",
    icon: "🛒",
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with targeted marketing strategies and SEO optimization.",
    icon: "📈",
  },
  {
    title: "Blockchain Development",
    description: "Implement secure and transparent blockchain solutions for your business.",
    icon: "🔗",
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive user interfaces and experiences that captivate users.",
    icon: "🎨",
  },
  {
    title: "DevOps Services",
    description: "Enhance collaboration between development and operations for faster delivery.",
    icon: "⚙️",
  },
]

export default function FeaturedServices() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }


  // Automatic sliding every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 px-4"
          >
            <div className="bg-white/80 p-10 rounded-2xl border border-blue-500/30 backdrop-blur-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 h-full">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}