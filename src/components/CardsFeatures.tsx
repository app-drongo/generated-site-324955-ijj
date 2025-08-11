// Enhanced by AI on 2025-08-11T00:46:10.681Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Team Workspaces",
      description: "Dedicated spaces for your teams to collaborate, share files, and track progress together.",
      badge: "Collaboration"
    },
    {
      icon: Zap,
      title: "Real-time Editing",
      description: "Collaborate on documents, spreadsheets, and presentations with instant updates for all team members.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption to keep your team's work and communications safe.",
      badge: "Security"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Connect your team from anywhere in the world with reliable, low-latency collaboration tools.",
      badge: "Accessibility"
    },
    {
      icon: BarChart3,
      title: "Team Analytics",
      description: "Track productivity, collaboration patterns, and project progress with detailed insights.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Customizable Workflows",
      description: "Tailor your workspace to match your team's unique processes and collaboration style.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Powerful Integrations",
      description: "Connect with your favorite tools through our extensive API and pre-built integrations.",
      badge: "Integration"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Our team of collaboration experts is available 24/7 to help your team succeed.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy Controls",
      description: "Granular permission settings and privacy controls to manage access to sensitive information.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Team Needs to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Collaborate Effectively
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful collaboration tools designed to bring your team together, streamline communication, 
            and boost productivity across all projects.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform how your team works together?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Team Trial
            </button>
            <Link href="/features" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore All Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}