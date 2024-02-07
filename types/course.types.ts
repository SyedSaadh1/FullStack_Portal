export interface CourseImage {
  url?: string
}

export interface Course {
  id: string
  name: string
  description?: string
  is_public?: boolean,
  thumbnail?: CourseImage | null
  banner?: CourseImage | null
  courseDuration?: string
  modules: Module[]
  url?: string | null
}

export interface Module {
  title: string
  sessions: Session[]
}

export interface Session {
  title: string
  sessionNumber: number
}