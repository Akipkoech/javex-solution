import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Clock } from "lucide-react"

export const metadata = {
  title: "Special Offers | Javex Solutions",
  description: "Explore our current promotions and special offers on technology services and solutions.",
}

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
      regularPrice: 2999,
      offerPrice: 1999,
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
      regularPrice: 4999,
      offerPrice: 3499,
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
      regularPrice: 7999,
      offerPrice: 5999,
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

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="bg-muted">
        <div className="container px-4 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Special Offers</h1>
            <p className="text-lg text-muted-foreground">
              Take advantage of our limited-time promotions and special packages.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="container px-4 py-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most popular service packages at special rates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full ${offer.popular ? "border-primary shadow-lg relative" : ""}`}
            >
              {offer.popular && <Badge className="absolute top-4 right-4">Most Popular</Badge>}
              <CardHeader>
                <CardTitle className="text-2xl">{offer.title}</CardTitle>
                <CardDescription className="text-base">{offer.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <p className="text-muted-foreground line-through">${offer.regularPrice}</p>
                  <p className="text-3xl font-bold text-primary">${offer.offerPrice}</p>
                </div>
                <ul className="space-y-2">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="bg-muted py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Limited Time Offers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Special promotions available for a limited time only. Act fast!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {limitedTimeOffers.map((offer, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-sm border border-primary/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{offer.title}</h3>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    {offer.discount}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">{offer.description}</p>
                <div className="flex items-center text-muted-foreground mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Offer expires on {offer.expiryDate}</span>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact">Claim Offer</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Deals */}
      <section className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bundle Deals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save more when you combine our services with these special bundles.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Complete Digital Presence Bundle</h3>
          <p className="text-lg mb-6">
            Get everything you need to establish a strong online presence for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-background p-4 rounded-md">
              <h4 className="font-semibold mb-2">Included Services:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Professional Website</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>SEO Optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Social Media Setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Google Business Profile</span>
                </li>
              </ul>
            </div>
            <div className="bg-background p-4 rounded-md">
              <h4 className="font-semibold mb-2">Bundle Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Save 35% compared to individual services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Coordinated branding across platforms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Streamlined project management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>Priority support for 12 months</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-2">
              <span className="line-through text-muted-foreground">$5,999</span>{" "}
              <span className="font-bold text-primary text-2xl">$3,899</span>
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Get This Bundle</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions About Our Offers?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our team is ready to help you choose the right package for your business needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-medium">
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
