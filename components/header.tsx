"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const downloadCV = () => {
    // Create a downloadable CV content
    const cvContent = `
HAMZA KHALID - Développeur FullStack
Email: hamzakhalidovic@gmail.com
Téléphone: 0689941513
LinkedIn: hamzakhalid14
Portfolio: https://troopl.com/hamzakhalid
Localisation: Casablanca, Maroc

FORMATION
• 12/2023 – 02/2024: Formation Développement Web Full-Stack - Lewagon
• 2019 – 2023: Licence en Génie informatique - FST SETTAT
• 2019: Baccalauréat sciences expérimentales - LYCÉE OMAR EL KHAYAM

EXPÉRIENCE PROFESSIONNELLE
• 05/2025 – 09/2025: Peaqock - Stage
  Mission: Conception et Développement back-end du module CRM et réalisation du front-end du module SRM (Orders) d'un ERP
  Outils: React, Spring Boot, REST API, Git, Agile

• 06/2024 – 09/2024: Care&Grow Consulting – Freelance
  Mission: Développement d'une application web avec Odoo en ligne pour la gestion des ventes et des commandes
  Outils: Odoo Online, XML, Python, PostgreSQL

• 02/2024 – 05/2024: Simon Express – Stage
  Mission: Développement d'un site e-commerce (gestion produits, utilisateurs, commandes, livraison)
  Outils: Laravel, React.js, HTML, CSS, Bootstrap

COMPÉTENCES
• Back-End: Java, Spring Boot, PHP, Laravel, Node.js, Express.js, RubyOnRails
• Base de données: MySQL, PostgreSQL, Oracle, MongoDb
• Front-End: React, HTML, CSS, JavaScript, Bootstrap, Vanilla Js
• Méthodologies: Agile (SCRUM), Git, Docker
• Modélisation: UML, MERISE

PROJETS PERSONNELS
• Application Web de e-commerce (Angular & Spring Boot)
• Application de chat en temps réel avec authentification (Ruby on Rails, Stimulus.js, Bootstrap)

CERTIFICATS
• Certification Professionnelle Oracle: Développeur Java SE 17 (en cours)
• Développement Web Full Stack: Ruby on Rails & JavaScript – Le Wagon
    `

    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Hamza_KHALID_CV.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const navItems = [
    { name: "Accueil", id: "hero" },
    { name: "À propos", id: "about" },
    { name: "Expérience", id: "experience" },
    { name: "Compétences", id: "skills" },
    { name: "Projets", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">HK</span>
            </div>
            <span className="font-bold text-xl">Hamza KHALID</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button onClick={downloadCV} className="animate-pulse-glow">
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-lg animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 py-2">
              <Button onClick={downloadCV} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Télécharger CV
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
