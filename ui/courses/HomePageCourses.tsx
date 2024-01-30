import React from 'react'
import Container from '../layout/container'
import { Title1 } from '@fluentui/react-components'
import {CardExample} from './CoursesCard'

type Props = {}

const HomePageCourses = (props: Props) => {

  return (
    <section className='py-4'>
      <Container>
        <Title1>Courses</Title1>
        <CardExample />
      </Container>
    </section>
  )
}

export default HomePageCourses