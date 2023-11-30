import UI from "@material-tailwind/react";
import { Course } from "types/course.types";

const {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} = UI

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="mt-6">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={course?.thumbnail?.url || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
          alt="card-image"
        />
      </CardHeader>
      <CardBody className="flex-1">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {course?.name}
        </Typography>
        <Typography>
          {course?.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 text-right">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}

