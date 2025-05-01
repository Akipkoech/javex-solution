import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail, Twitter, Home, Code, Phone, ChevronRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-900 to to-black backdrop-blur-lg border-t border-blue-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold flex items-center gap-2">
              <span>Javex</span>
              <span className="text-white font-bold">Solutions</span>
            </Link>
            <p className="mt-4 text-white leading-relaxed">
              Innovative technology solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-shadow-gray-50 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white ">
              <Home className="h-5 w-5 text-gray-50" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-50 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Code className="h-5 w-5 text-white" />
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile App Development",
                "Custom Software",
                "Cloud Services",
                "Cybersecurity",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-50 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Phone className="h-5 w-5 text-green-500" />
              Contact Us
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-gray-50">info@javexsolutions.com</span>
              </li>
              <li className="text-gray-50 leading-relaxed">
                Old Mutual Towers,UpperHill
                <br />
                Nairobi, Kenya
              </li>
              <li className="text-gray-50">+(254)74 123-4567</li>
            </ul>
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm font-bold">© {currentYear} Javex Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "/sitemap", label: "Sitemap" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-gray-50 hover:text-blue-500 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}