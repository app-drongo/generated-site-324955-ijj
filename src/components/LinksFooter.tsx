// Enhanced by AI on 2025-08-11T00:47:46.751Z
// Section: footer
// Category: footer

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Team Workspaces", href: "/#features" },
        { name: "Integrations", href: "/#features" },
        { name: "Security", href: "/#features" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/" },
        { name: "Our Mission", href: "/" },
        { name: "Team", href: "/" },
        { name: "Careers", href: "/" },
        { name: "Contact", href: "/#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/" },
        { name: "Community", href: "/" },
        { name: "Tutorials", href: "/" },
        { name: "Case Studies", href: "/" },
        { name: "Support", href: "/" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/" },
        { name: "Terms of Service", href: "/" },
        { name: "Cookie Policy", href: "/" },
        { name: "GDPR", href: "/" },
        { name: "Security", href: "/" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">C</span>
                </div>
                <span className="font-bold text-xl">CollabSync</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering teams to collaborate seamlessly with intuitive workspaces and powerful tools.
                Join 50K+ teams who've transformed their workflow with CollabSync.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@collabsync.io</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">100 Collaboration Ave, San Francisco</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Get Collaboration Tips</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your work email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Weekly tips to boost team productivity. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 CollabSync. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built for teams with <Heart className="size-3 text-red-500 fill-current" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}