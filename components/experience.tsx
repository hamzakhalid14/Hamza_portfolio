"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const Experience = () => {
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

    const element = document.getElementById("experience")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Stage - Développeur Full-Stack",
      company: "Peaqock",
      period: "05/2025 – 09/2025",
      location: "Casablanca, Maroc",
      description:
        "Conception et Développement back-end du module CRM et réalisation du front-end du module SRM (Orders) d'un ERP",
      technologies: ["React", "Spring Boot", "REST API", "Git", "Agile"],
      type: "Stage",
    },
    {
      title: "Développeur Web - Freelance",
      company: "Care&Grow Consulting",
      period: "06/2024 – 09/2024",
      location: "Remote",
      description:
        "Développement d'une application web avec Odoo en ligne pour la gestion des ventes et des commandes.",
      technologies: ["Odoo Online", "XML", "Python", "PostgreSQL"],
      type: "Freelance",
    },
    {
      title: "Stage - Développeur Web",
      company: "Simon Express",
      period: "02/2024 – 05/2024",
      location: "Casablanca, Maroc",
      description:
        "Développement d'un site e-commerce complet avec gestion des produits, utilisateurs, commandes et livraison.",
      technologies: ["Laravel", "React.js", "HTML", "CSS", "Bootstrap"],
      type: "Stage",
    },
  ]

  const education = [
    {
      title: "Formation Développement Web Full-Stack",
      institution: "Le Wagon",
      period: "12/2023 – 02/2024",
      description: "Formation intensive en développement web moderne avec Ruby on Rails et JavaScript",
    },
    {
      title: "Licence en Génie Informatique",
      institution: "FST SETTAT",
      period: "2019 – 2023",
      description: "Formation complète en informatique avec spécialisation en développement logiciel",
    },
    {
      title: "Baccalauréat Sciences Expérimentales",
      institution: "Lycée Omar El Khayam",
      period: "2019",
      description: "Diplôme avec mention, spécialisation sciences physiques et mathématiques",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Expérience & Formation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un parcours riche en expériences pratiques et en formation continue pour maîtriser les technologies modernes
            du développement web.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)] flex items-center">
              <Building className="w-6 h-6 mr-2 text-primary" />
              Expérience Professionnelle
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                        {exp.title}
                      </CardTitle>
                      <Badge variant={exp.type === "Freelance" ? "secondary" : "outline"}>{exp.type}</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)] flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-primary" />
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                      {edu.title}
                    </CardTitle>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
