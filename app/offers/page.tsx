import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Check, Clock, Star } from "lucide-react"

export default function OffersPage() {
  const currentDate = new Date()
  const expiryDate = new Date(currentDate)
  expiryDate.setDate(expiryDate.getDate() + 30)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const offers = [
    {
      title: "Website Development Package",
      description: "Get a professional, responsive website for your business at a special discounted rate.",
      regularPrice: 38987,
      offerPrice: 25987,
      features: [
        "Custom design",
        "Mobile responsive",
        "5 pages",
        "SEO optimization",
        "Contact form",
        "3 months of support",
      ],
      popular: true,
    },
    {
      title: "E-commerce Starter",
      description: "Launch your online store with our comprehensive e-commerce solution.",
      regularPrice: 64987,
      offerPrice: 45487,
      features: [
        "Custom e-commerce website",
        "Product catalog (up to 100 products)",
        "Secure payment processing",
        "Inventory management",
        "Order tracking",
        "6 months of support",
      ],
      popular: false,
    },
    {
      title: "Digital Transformation Package",
      description: "Modernize your business operations with our digital transformation services.",
      regularPrice: 103987,
      offerPrice: 77987,
      features: [
        "Business process analysis",
        "Custom software development",
        "Cloud migration",
        "Staff training",
        "Integration with existing systems",
        "12 months of support",
      ],
      popular: false,
    },
  ]

  const limitedTimeOffers = [
    {
      title: "Mobile App Development",
      description: "Get a native mobile app for your business at a special limited-time price.",
      discount: "30% OFF",
      expiryDate: formatDate(expiryDate),
    },
    {
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing package.",
      discount: "25% OFF",
      expiryDate: formatDate(expiryDate),
    },
  ]

  const faqs = [
    {
      question: "How do I claim an offer?",
      answer: "Simply contact us through the 'Get Started' or 'Claim Offer' buttons, and our team will guide you through the process.",
    },
    {
      question: "Are these offers available for existing clients?",
      answer: "Yes, both new and existing clients can take advantage of these promotions, subject to availability.",
    },
    {
      question: "Can I combine multiple offers?",
      answer: "Some offers can be combined, such as the bundle deals. Contact us to discuss your specific needs.",
    },
    {
      question: "What happens after the offer period ends?",
      answer: "After the offer period, standard pricing will apply, but you'll continue to receive the same high-quality service and support.",
    },
  ]

  return (
    <div className="flex flex-col gap-20 bg-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-200/50 backdrop-blur-lg">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Star className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Special Offers</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Take advantage of our limited-time promotions and special packages to elevate your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
            <Check className="h-8 w-8 text-blue-500" />
            Featured Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our most popular service packages at unbeatable rates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full bg-white/90 border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 ${
                offer.popular ? "relative" : ""
              }`}
            >
              {offer.popular && (
                <Badge className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600">Most Popular</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-black">{offer.title}</CardTitle>
                <CardDescription className="text-base text-gray-600">{offer.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-gray-500 line-through">KSH {offer.regularPrice.toLocaleString()}</p>
                  <p className="text-3xl font-bold text-blue-500">KSH {offer.offerPrice.toLocaleString()}</p>
                </div>
                <ul className="space-y-3">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  asChild
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="bg-slate-200/50 backdrop-blur-lg py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
              <Clock className="h-8 w-8 text-blue-500" />
              Limited Time Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Special promotions available for a limited time only. Act fast!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {limitedTimeOffers.map((offer, index) => (
              <Card
                key={index}
                className="bg-white/90 p-8 rounded-xl shadow-lg border border-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">{offer.title}</h3>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    {offer.discount}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{offer.description}</p>
                <div className="flex items-center text-gray-600 mb-6">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Offer expires on {offer.expiryDate}</span>
                </div>
                <Button
                  asChild
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
                >
                  <Link href="/contact">Claim Offer</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
            <Star className="h-8 w-8 text-blue-500" />
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our special offers.
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg text-black hover:text-blue-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Bundle Deals */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-black">
            <Star className="h-8 w-8 text-blue-500" />
            Bundle Deals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Save more when you combine our services with these special bundles.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto bg-white/90 p-8 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4 text-black">Complete Digital Presence Bundle</h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Get everything you need to establish a strong online presence for your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-100 p-4 rounded-md">
              <h4 className="font-semibold mb-2 text-black">Included Services:</h4>
              <ul className="space-y-3">
                {[
                  "Professional Website",
                  "SEO Optimization",
                  "Social Media Setup",
                  "Google Business Profile",
                ].map((service, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 p-4 rounded-md">
              <h4 className="font-semibold mb-2 text-black">Bundle Benefits:</h4>
              <ul className="space-y-3">
                {[
                  "Save 35% compared to individual services",
                  "Coordinated branding across platforms",
                  "Streamlined project management",
                  "Priority support for 12 months",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg mb-2">
              <span className="line-through text-gray-500">KSH 79,999</span>{" "}
              <span className="font-bold text-blue-500 text-2xl">KSH 59,999</span>
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
            >
              <Link href="/contact">Get This Bundle</Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions About Our Offers?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our team is ready to help you choose the right package for your business needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-500 hover:bg-gray-100 rounded-full transition-transform hover:scale-105"
          >
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}