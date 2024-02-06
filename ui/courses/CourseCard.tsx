import React from "react";

import Link from "next/link";
import { Course } from "@/types/course.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const CourseCard = ({ course }: { course: Course }) => {

	return (
		<Card className="rounded-3xl shadow overflow-hidden relative hover:shadow-lg">
			<CardContent className="p-2">
				<img
					className="w-full h-48 object-cover rounded-2xl"
					src={course.thumbnail?.url}
					alt={course.name}
				/>

				<CardHeader>
					<CardTitle>{course.name}</CardTitle>
					<CardDescription className="line-clamp-2">{course.description}</CardDescription>
				</CardHeader>
			</CardContent>
			<Link className="absolute w-full h-full top-0 left-0" href={`/courses/${course.url}`} />
		</Card>
	);
};

export default CourseCard;
