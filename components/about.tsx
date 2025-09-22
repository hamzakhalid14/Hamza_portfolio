"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code,
      title: "Développement Full-Stack",
      description: "Expertise en React, Spring Boot, Laravel et Node.js pour créer des applications complètes.",
    },
    {
      icon: Database,
      title: "Gestion de Données",
      description: "Maîtrise des bases de données MySQL, PostgreSQL, Oracle et MongoDB.",
    },
    {
      icon: Globe,
      title: "Applications Web",
      description: "Création d'applications web modernes, responsives et performantes.",
    },
    {
      icon: Smartphone,
      title: "Solutions E-commerce",
      description: "Développement de plateformes e-commerce avec gestion complète des commandes.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            À Propos de Moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Diplômé en Génie Informatique avec une formation spécialisée en développement web full-stack, je combine
            créativité technique et rigueur méthodologique pour livrer des solutions innovantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`bg-card rounded-2xl p-8 shadow-lg ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Mon Parcours</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Après avoir obtenu ma licence en Génie Informatique à FST SETTAT, j'ai approfondi mes compétences avec
                une formation intensive en développement web full-stack chez Le Wagon. Cette combinaison d'études
                académiques et de formation pratique m'a permis de développer une approche complète du développement
                logiciel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mon expérience couvre le développement d'applications e-commerce, de systèmes CRM/ERP, et d'applications
                web complexes. Je suis passionné par l'apprentissage continu et l'adoption des dernières technologies
                pour créer des solutions efficaces et évolutives.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <span className="text-lg">3+ années d'expérience</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-lg">10+ projets réalisés</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-secondary rounded-full"></div>
                <span className="text-lg">Méthodologie Agile</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-chart-3 rounded-full"></div>
                <span className="text-lg">Formation continue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
