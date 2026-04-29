import Link from "next/link"
import { GitBranch, Briefcase, Mail, ArrowRight, Code2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Git", "Figma",
]

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

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {/* 히어로 섹션 */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Code2 className="size-4" />
          <span className="text-sm font-medium">풀스택 개발자</span>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            안녕하세요,
            <br />
            <span className="text-muted-foreground">저는 OOO입니다.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            사용자 경험을 중심으로 생각하는 개발자입니다. 깔끔한 코드와
            직관적인 인터페이스를 만드는 것을 좋아합니다.
          </p>
        </div>

        {/* CTA 버튼 */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            프로젝트 보기
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            소개 보기
          </Link>
        </div>

        {/* 소셜 링크 */}
        <div className="flex items-center gap-3 pt-2">
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
      </section>

      <Separator className="my-12" />

      {/* 기술 스택 섹션 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">기술 스택</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  )
}
