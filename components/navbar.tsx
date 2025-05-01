"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Offers", href: "/offers" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-7xl transition-all duration-300 rounded-full ${
        isScrolled
          ? "bg-gradient-to-r from-blue-900 to-black backdrop-blur-lg shadow-lg border border-blue-500/30"
          : "bg-gradient-to-r from-blue-900/80 to-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              Javex <span className="text-white">Solutions</span>
            </Link>
          </div>

          {isMobile ? (
            <div className="flex items-center gap-4">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-blue-500/20 rounded-full">
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[400px] bg-gradient-to-r from-blue-900 to-black backdrop-blur-lg border-l border-blue-500/30">
                  <div className="flex flex-col gap-6 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`relative text-lg font-medium transition-colors duration-200 ${
                          pathname === item.href ? "text-blue-400" : "text-white hover:text-blue-300"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {pathname === item.href && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                        )}
                      </Link>
                    ))}
                    <Button
                      asChild
                      className="mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-all duration-200 group ${
                      pathname === item.href ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full ${
                        pathname === item.href ? "w-full" : ""
                      }`}
                    />
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <Button
                  asChild
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}