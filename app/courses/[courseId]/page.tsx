'use client'

import { useParams } from "next/navigation"

export default function CourseDetails() {
    const { courseId } = useParams()
    return (
        <div>
            Course: {courseId}
        </div>
    )
}
