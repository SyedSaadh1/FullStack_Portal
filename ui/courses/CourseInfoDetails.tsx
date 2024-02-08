import React from 'react'
import Container from '../layout/container'
import Title3 from '@/components/ui/text/Title3'
import { Course } from '@/types/course.types'
import CourseDetailsCard from './CourseDetailsCard'

type Props = {
  course: Course
}

const CourseInfoDetails = ({ course }: Props) => {
  return (
    <Container className='py-8'>
      <p className='mb-8'>Time to complete: {course?.courseDuration}</p>
      <Title3 className='px-8'>Course Content</Title3>
      <CourseDetailsCard course={course}/>
    </Container>
  )
}

export default CourseInfoDetails