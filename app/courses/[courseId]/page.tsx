import React from 'react'
import courseController from "@/controllers/course.controller";
import { Course } from "@/types/course.types";
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import CourseDetailsCard from '@/ui/courses/CourseDetailsCard';
// import CourseDetailsCards from '@/ui/courses/CourseDetailsCards';

// import { CaretSortIcon } from "@radix-ui/react-icons"

export default async function CourseDetails({ params: { courseId } }: any) {

    const course: Course = JSON.parse(JSON.stringify(await courseController.getCourseDetailById(courseId)));

    return (
        <div className="p-8">
            {/* Course: {course?.name} */}
            <div className="flex ">
                <section className="flex-1">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-serif">
                        {course?.name}
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-slate-500">
                        Build a strong {course?.name} foundation and tackle any project
                    </p>
                </section>
                <section className="flex-1 flex justify-end">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={course.thumbnail?.url} alt="Shoes" /></figure>
                    </div>
                </section>
            </div>
            <div className="flex py-12">
                <div className="flex-1 bg-red-300">
                    Aside
                </div>
                <div className="flex-[2_2_0%] px-8 py-4">
                    <h3 className="text-3xl border-b-4 py-2 mb-2">Description</h3>
                    <p className="text-lg my-4">{course?.description}</p>
                    <p className="text-lg my-4">In this course, we'll guide you through this early stage. At the end of the
                        course you'll feel very comfortable with {course?.name} and your ability to go on and tackle
                        any topic or project.</p>

                    <h3 className="text-3xl border-b-4 py-2 mt-2 mb-12">Course Content</h3>
                
                    <CourseDetailsCard />

                    <h3 className="text-xl font-medium border-b-4 py-4 mt-4">INSTRUCTOR</h3>
                    <p className="text-lg my-4">Syed Zakeer Hussain founded Fullsatck Institute to help bring software development to everyone. Our objective is to help you make software like a professional.
                     Multiple members of the Fullstack Institute team worked together to develop this course. We hope you'll enjoy it!</p>
                </div>
            </div>
        </div>
    )
}
