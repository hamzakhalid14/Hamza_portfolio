"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                Hamza KHALID
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-light">Développeur FullStack</p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionné par le développement web moderne, je crée des applications robustes avec React, Spring Boot et
                Laravel. Spécialisé dans l'architecture full-stack et les solutions e-commerce innovantes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="group">
                <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Me Contacter
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/hamzakhalid14" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/hamzakhalid14" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/Hamza Khalid.jpeg"
                  alt="Hamza KHALID - Photo de profil"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-primary-foreground font-bold text-lg">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

export default Hero
