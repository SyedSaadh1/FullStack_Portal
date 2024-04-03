export interface CourseImage {
  url?: string;
}

export interface Course {
  id: string;
  name: string;
  shortDescription?: string;
  description?: string;
  isPublic?: boolean;
  thumbnail?: CourseImage | null;
  banner?: CourseImage | null;
  courseDuration?: string;
  lessons: Lesson[];
  lessonsCount?: number;
  url?: string | null;
}

export interface Lesson {
  id: string;
  isPublic?: boolean;
  isEnabled?: boolean;
  sequence?: number;
  topicsCount?: number;
  topics: Topic[];
  name: string;
  shortDescription: string;
}

export interface Topic {
  id: string;
  title: string;
  sequence?: number;
  contentsCount?: number;
  contents?: string[];
}

export interface Content {
  id: string;
  title: string;
  sequence?: number;
  contentsCount?: number;
  contents?: string[];
}
