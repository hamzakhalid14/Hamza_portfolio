"use client"

import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">HK</span>
              </div>
              <span className="font-bold text-lg">Hamza KHALID</span>
            </div>
            <p className="text-muted-foreground">
              Développeur FullStack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              Fait avec <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              et beaucoup de café ☕
            </p>
            <p className="text-sm text-muted-foreground mt-2">© 2025 Hamza KHALID. Tous droits réservés.</p>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
