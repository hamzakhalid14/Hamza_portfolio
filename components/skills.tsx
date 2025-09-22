"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Settings, Award } from "lucide-react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedProgress, setAnimatedProgress] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          setTimeout(() => {
            const progressValues: { [key: string]: number } = {}
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                progressValues[skill.name] = skill.level
              })
            })
            setAnimatedProgress(progressValues)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Back-End",
      icon: Code,
      skills: [
        { name: "Java & Spring Boot", level: 90 },
        { name: "PHP & Laravel", level: 85 },
        { name: "Node.js & Express.js", level: 80 },
        { name: "Ruby on Rails", level: 75 },
      ],
    },
    {
      title: "Front-End",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 90 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Base de Données",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Oracle", level: 70 },
      ],
    },
    {
      title: "Outils & Méthodologies",
      icon: Settings,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Agile (SCRUM)", level: 85 },
        { name: "REST API", level: 90 },
      ],
    },
  ]

  const certifications = [
    {
      name: "Certification Oracle Java SE 17",
      status: "En cours",
      issuer: "Oracle",
    },
    {
      name: "Développement Web Full Stack",
      status: "Obtenu",
      issuer: "Le Wagon",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Compétences Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une expertise technique diversifiée acquise à travers des projets concrets et une formation continue dans
            les technologies modernes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`group hover:shadow-lg transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{animatedProgress[skill.name] || 0}%</span>
                    </div>
                    <div className="skill-bar">
                      <Progress value={animatedProgress[skill.name] || 0} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-playfair)] flex items-center justify-center">
            <Award className="w-6 h-6 mr-2 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                    {cert.name}
                  </h4>
                  <p className="text-muted-foreground mb-3">{cert.issuer}</p>
                  <Badge variant={cert.status === "Obtenu" ? "default" : "secondary"}>{cert.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
