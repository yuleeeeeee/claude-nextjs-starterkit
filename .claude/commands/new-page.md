다음 인자를 파싱하라: $ARGUMENTS
- 첫 번째 단어: 페이지 슬러그 (예: `contact`, `blog`)
- 나머지: 헤더에 표시할 한국어 레이블 (예: `연락처`, `블로그`)
  - 레이블이 없으면 슬러그를 그대로 레이블로 사용

## 작업 1: 페이지 파일 생성

`app/<슬러그>/page.tsx`를 아래 패턴으로 생성하라.

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "<레이블>",
  description: "<레이블> 페이지입니다.",
}

export default function <파스칼케이스슬러그>Page() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight"><레이블></h1>
        <p className="text-muted-foreground leading-relaxed">
          내용을 여기에 작성하세요.
        </p>
      </section>
    </div>
  )
}
```

## 작업 2: 헤더 네비 링크 추가

`components/layout/Header.tsx`의 `navLinks` 배열 마지막에 아래 항목을 추가하라.

```ts
{ href: "/<슬러그>", label: "<레이블>" },
```

## 완료 후 보고

- 생성된 파일 경로
- Header.tsx에서 수정된 줄 번호
- 브라우저에서 확인할 URL: `http://localhost:3000/<슬러그>`
