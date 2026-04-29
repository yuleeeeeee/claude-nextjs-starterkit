import Link from "next/link"
import { GitBranch, Mail, Briefcase } from "lucide-react"

const socialLinks = [
  {
    href: "https://github.com",
    icon: GitBranch,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    icon: Briefcase,
    label: "LinkedIn",
  },
  {
    href: "mailto:your@email.com",
    icon: Mail,
    label: "이메일",
  },
]

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={label}
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
