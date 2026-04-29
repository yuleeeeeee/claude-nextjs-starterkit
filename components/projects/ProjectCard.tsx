import Link from "next/link"
import { GitBranch, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"

export function ProjectCard({ title, description, tags, githubUrl, liveUrl }: Project) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(githubUrl || liveUrl) && (
        <CardFooter className="flex gap-2 pt-0">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              render={<Link href={githubUrl} target="_blank" rel="noopener noreferrer" />}
            >
              <GitBranch className="size-3.5" />
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              render={<Link href={liveUrl} target="_blank" rel="noopener noreferrer" />}
            >
              <ExternalLink className="size-3.5" />
              라이브 데모
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
