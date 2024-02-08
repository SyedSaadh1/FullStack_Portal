import React from 'react'
import Container from '../layout/container'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Title3 from '@/components/ui/text/Title3'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Course } from '@/types/course.types'

type Props = {
  course: Course
}

const CourseInfoDetails = ({ course }: Props) => {
  return (
    <Container className='py-8'>
      <p className='mb-8'>Time to complete: {course?.courseDuration}</p>
      <Card>
        <CardHeader>
          <Title3>Course Content</Title3>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            {course?.modules?.map((module) => <AccordionItem key={module?.title} value={module?.title}>
              <AccordionTrigger>{module?.title}</AccordionTrigger>
              <AccordionContent>
                <ul className='flex flex-col gap-2 pl-4'>
                  {module?.sessions?.map((session, idx) => <li key={session?.sessionNumber}>
                    <span>{idx + 1}. {session?.title}</span>

                    <ol>
                      {session?.topics?.map((topic) => <li key={topic}>--- {topic}</li>)}
                    </ol>
                  </li>)}
                  
                </ul>
              </AccordionContent>
            </AccordionItem>)}
          </Accordion>
        </CardContent>
      </Card>
    </Container>
  )
}

export default CourseInfoDetails