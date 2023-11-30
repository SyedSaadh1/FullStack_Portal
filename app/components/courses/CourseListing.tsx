import UI from "@material-tailwind/react";
import { Course } from "types/course.types";
import CourseCard from "./CourseCard";

const {
  Typography,
} = UI

interface CourseCardProps {
  courses: Course[]
}

export default function CourseListing({ courses }: CourseCardProps) {
  return (
    <div>
      <Typography variant="h4">Courses</Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        {courses?.map(course => <CourseCard course={course} key={course?.id} />)}
      </div>
    </div>
  );
}

