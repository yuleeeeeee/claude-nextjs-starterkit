export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "Next.js 포트폴리오 스타터킷",
    description:
      "Next.js 16, Tailwind CSS v4, shadcn/ui로 만든 포트폴리오 스타터킷. 다크모드, 반응형 디자인, lucide-react 아이콘을 포함합니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "날씨 대시보드 앱",
    description:
      "OpenWeather API를 활용한 실시간 날씨 조회 앱. 도시 검색, 5일 예보, 체감 온도 등을 제공합니다.",
    tags: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
  {
    title: "TODO 리스트 앱",
    description:
      "로컬 스토리지를 활용한 할일 관리 앱. 카테고리 분류, 마감일 설정, 우선순위 기능을 제공합니다.",
    tags: ["React", "TypeScript", "LocalStorage"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "마크다운 에디터",
    description:
      "실시간 미리보기를 지원하는 마크다운 에디터. 코드 하이라이팅, 이미지 업로드, 내보내기 기능을 포함합니다.",
    tags: ["React", "Markdown", "TypeScript"],
    githubUrl: "https://github.com",
  },
]
