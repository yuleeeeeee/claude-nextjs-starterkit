import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "소개",
  description: "저를 소개합니다.",
}

const skills = {
  "프론트엔드": ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  "백엔드": ["Node.js", "Express", "PostgreSQL", "Prisma"],
  "도구 & 기타": ["Git", "GitHub", "Figma", "Vercel", "Docker"],
}

const timeline = [
  {
    type: "work" as const,
    title: "프론트엔드 개발자",
    organization: "OO 스타트업",
    period: "2024.03 — 현재",
    description: "Next.js 기반 웹 서비스 개발 및 유지보수. UI/UX 개선을 통해 사용자 이탈률 30% 감소.",
  },
  {
    type: "work" as const,
    title: "웹 개발 인턴",
    organization: "OO 기업",
    period: "2023.07 — 2024.02",
    description: "React 컴포넌트 개발, REST API 연동, 코드 리뷰 참여.",
  },
  {
    type: "education" as const,
    title: "컴퓨터공학과 학사",
    organization: "OO 대학교",
    period: "2019.03 — 2023.02",
    description: "컴퓨터공학 전공. 알고리즘, 자료구조, 데이터베이스 수강.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      {/* 프로필 섹션 */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          <span>대한민국, 서울</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">소개</h1>
        <p className="text-muted-foreground leading-relaxed">
          안녕하세요! 저는 사용자 경험을 중심으로 생각하는 풀스택 개발자입니다.
          새로운 기술을 배우고 복잡한 문제를 단순하게 해결하는 것을 좋아합니다.
          팀과 협력하여 가치 있는 제품을 만드는 데 열정을 가지고 있습니다.
        </p>
      </section>

      <Separator className="my-10" />

      {/* 기술 스택 섹션 */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">기술 스택</h2>
        <div className="flex flex-col gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* 경력 & 학력 타임라인 */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">경력 & 학력</h2>
        <div className="flex flex-col gap-4">
          {timeline.map((item, index) => (
            <Card key={index}>
              <CardContent className="pt-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      {item.type === "work" ? (
                        <Briefcase className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                      ) : (
                        <GraduationCap className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
