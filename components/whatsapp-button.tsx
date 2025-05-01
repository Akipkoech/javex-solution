"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+254745340588", "_blank")
  }

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 shadow-lg bg-green-500 hover:bg-green-600 text-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  )
}
