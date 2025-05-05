"use client"

import { useState, useEffect } from "react"

// Extend the Window interface to include the emailjs property
declare global {
  interface Window {
    emailjs: {
      init: (userID: string) => void;
      send: (
        serviceID: string,
        templateID: string,
        templateParams: {
          name: string;
          email: string;
          subject: string;
          message: string;
        }
      ) => Promise<void>;
    };
  }
}
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import WhatsAppButton from "@/components/whatsapp-button"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isEmailJSReady, setIsEmailJSReady] = useState(false)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    script.async = true
    script.onload = () => {
      try {
        if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
          throw new Error('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is not defined')
        }
        window.emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) 
        setIsEmailJSReady(true)
        console.log("EmailJS initialized successfully")
      } catch (initError) {
        console.error("EmailJS Initialization Error:", initError)
      }
    }
    script.onerror = () => {
      console.error("Failed to load EmailJS script from CDN")
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!isEmailJSReady) {
      console.error("EmailJS is not ready. Check initialization.")
      toast({
        title: "Error",
        description: "EmailJS is not loaded. Please refresh the page and try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      await window.emailjs.send(
        "service_zfpoh5g",
        "template_otfp8pc",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )

      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Submission Error:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Check the console for details or try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-20 bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Mail className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Contact Us</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have a question or ready to start a project? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white/90 border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-black">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-blue-500/20 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="border-blue-500/20 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="border-blue-500/20 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="border-blue-500/20 focus:border-blue-500 focus:ring-blue-500 rounded-lg transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <p className="text-gray-600">info@javexsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-black">Phone</h3>
                    <p className="text-gray-600">+(254)745 340-588</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-black">Office Location</h3>
                    <p className="text-gray-600">
                      Old Mutual Towers, Upperhill
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Business Hours</h2>
              <div className="space-y-2 bg-white/90 p-4 rounded-xl border border-blue-500/20 shadow-lg transition-all duration-300">
                <div className="flex justify-between text-gray-600">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Connect With Us</h2>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="h-10 w-10 bg-slate-200/50 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 bg-slate-200/50 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 bg-slate-200/50 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 bg-slate-200/50 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="bg-slate-200/50 rounded-xl overflow-hidden h-96 border border-blue-500/20 shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.962659840819!2d36.816283974080804!3d-1.2991324356384324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e400e852b7%3A0xae4857eea7d6651!2sOld%20Mutual%20Tower!5e1!3m2!1sen!2ske!4v1746132536170!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
              <Mail className="h-8 w-8 text-blue-500" />
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find quick answers to common questions about our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What types of businesses do you work with?",
                answer:
                  "We work with businesses of all sizes across various industries, from startups to established enterprises. Our solutions are tailored to meet the specific needs of each client.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex custom software solution could take several months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team is available for updates, troubleshooting, and enhancements.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements during the initial consultation.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/90 p-6 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 backdrop-blur-md"
              >
                <h3 className="text-xl font-bold mb-2 text-black">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}