"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
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

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "MongoDB",
    "Git",
    "Agile",
    "Full-Stack Development",
    "Software Design",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and data visualization.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      link: "#",
    },
    {
      title: "Inventory Management",
      description: "Business inventory tracking system with reporting and analytics capabilities.",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      link: "#",
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and insights.",
      technologies: ["JavaScript", "D3.js", "Node.js", "MySQL"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">San Ni Ni</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "education", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  {section === "projects" ? "Projects" : section}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {["home", "about", "skills", "education", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary font-medium" : "text-foreground"
                  }`}
                >
                  {section === "projects" ? "Projects" : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section-padding pt-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                Hi, I'm <span className="text-primary">San Ni Ni</span>
              </h1>
              <p className="text-xl sm:text-2xl text-secondary mb-8 animate-fade-in-up animate-delay-100">
                Developer
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
                Software engineering student passionate about creating innovative solutions with AI, data, and
                full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-300">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-fade-in-up animate-delay-200">
                <img src="/professional-headshot-of-a-young-software-engineer.png" alt="San Ni Ni" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  I am San Ni Ni, a software engineering student at Lithan Academy completing my Higher Diploma in
                  Software Engineering. I have skills in programming, databases, software design, Agile project
                  management, and full-stack development. I am passionate about using software, AI, and data to improve
                  efficiency and create solutions with business and social impact. I believe in lifelong learning,
                  teamwork, and sharing knowledge to make technology more accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-background border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Higher Diploma in Software Engineering
                    </h3>
                    <p className="text-primary font-medium mb-2">Lithan Academy, Yangon, Myanmar</p>
                    <p className="text-muted-foreground">
                      Comprehensive program covering advanced software development, system design, and project
                      management.
                    </p>
                  </div>
                  <div className="text-sm text-secondary font-medium bg-accent/10 px-3 py-1 rounded-full">
                    Pending, 2024–2025
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Level 3 Foundation Diploma in Information Technology
                    </h3>
                    <p className="text-primary font-medium mb-2">Lithan Academy, Yangon, Myanmar</p>
                    <p className="text-muted-foreground">
                      Foundation program covering programming fundamentals, database concepts, and IT principles.
                    </p>
                  </div>
                  <div className="text-sm text-secondary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    2023–2024
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Projects & Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Contact Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd
                      like to discuss projects, internships, or just connect!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="text-foreground">sannini@email.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="text-foreground">+95 123 456 789</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-foreground">Yangon, Myanmar</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
                    <div className="space-y-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        <Linkedin className="mr-3 h-5 w-5" />
                        LinkedIn Profile
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        <Github className="mr-3 h-5 w-5" />
                        GitHub Profile
                      </Button>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Download className="mr-3 h-5 w-5" />
                        Download CV (PDF)
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 San Ni Ni. All rights reserved.</p>
          <p className="mt-2 text-primary-foreground/80">Built with passion and dedication</p>
        </div>
      </footer>
    </div>
  )
}
