import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Course } from '@/types/course.types'
import CourseCard from './CourseCard'


type Props = {
  courses: Course[]
}

function CourseCardCarousel({ courses }: Props) {
  return (
    <Carousel plugins={[

    ]}>
      <CarouselContent className='my-8'>
        {courses?.map(course => <CarouselItem key={course.id} className="h-full basis-1/3">
          <CourseCard course={course} />
        </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CourseCardCarousel