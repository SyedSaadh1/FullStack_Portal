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
  url?: string | null
}