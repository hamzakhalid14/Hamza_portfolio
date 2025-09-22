"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ShoppingCart, MessageCircle, Users } from "lucide-react"
import Image from "next/image"

const Projects = () => {
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

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Application E-commerce",
      description:
        "Application web complète de e-commerce avec gestion des produits, utilisateurs, commandes et système de paiement intégré.",
      image: "/modern-ecommerce-website-interface-with-shopping-c.jpg",
      technologies: ["Angular", "Spring Boot", "MySQL", "REST API"],
      icon: ShoppingCart,
      features: [
        "Gestion complète des produits",
        "Système d'authentification",
        "Panier et commandes",
        "Interface d'administration",
      ],
      github: "https://github.com/hamzakhalid14",
      demo: "#",
    },
    {
      title: "Application de Chat Temps Réel",
      description:
        "Application de messagerie instantanée avec authentification utilisateur, salles de discussion et notifications en temps réel.",
      image: "/modern-chat-application-interface-with-messages-an.jpg",
      technologies: ["Ruby on Rails", "Stimulus.js", "Bootstrap", "WebSocket"],
      icon: MessageCircle,
      features: [
        "Messagerie en temps réel",
        "Salles de discussion",
        "Authentification sécurisée",
        "Interface responsive",
      ],
      github: "https://github.com/hamzakhalid14",
      demo: "#",
    },
    {
      title: "Système CRM/ERP",
      description:
        "Module CRM back-end et interface SRM front-end pour la gestion des relations clients et des commandes dans un environnement d'entreprise.",
      image: "/professional-crm-dashboard-with-charts-and-custome.jpg",
      technologies: ["React", "Spring Boot", "PostgreSQL", "REST API"],
      icon: Users,
      features: ["Gestion des clients", "Suivi des commandes", "Tableaux de bord", "Rapports analytiques"],
      github: "https://github.com/hamzakhalid14",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Projets Réalisés
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une sélection de projets qui démontrent mes compétences en développement full-stack et ma capacité à créer
            des solutions complètes et innovantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center text-xl group-hover:text-primary transition-colors duration-200">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="w-4 h-4 text-primary" />
                  </div>
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Fonctionnalités clés :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-muted-foreground mb-4">
            Intéressé par mes projets ? Consultez mon profil GitHub pour plus de détails.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/hamzakhalid14" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Voir tous mes projets
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
