import type { Metadata } from "next"
import { Code2 } from "lucide-react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/projects/ProjectCard"

export const metadata: Metadata = {
  title: "프로젝트",
  description: "제가 만든 프로젝트들을 소개합니다.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <section className="flex flex-col gap-3 mb-12">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Code2 className="size-4" />
          <span className="text-sm font-medium">{projects.length}개의 프로젝트</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">프로젝트</h1>
        <p className="text-muted-foreground">
          직접 만든 프로젝트들입니다. 각 프로젝트의 GitHub 저장소와 라이브 데모를 확인해보세요.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
