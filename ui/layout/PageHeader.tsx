import React from 'react'
import FullstackInstituteLogo from './FullstackInstituteLogo'
import Container from './container'
import PageNavigationMenu from './PageNavigationMenu'
import { Course } from '@/types/course.types'
import courseController from '@/controllers/course.controller'
import Login from '../auth/Login'
import AuthUser from '../auth/AuthUser'

type Props = {}

async function PageHeader({ }: Props) {
  const courses: Course[] = JSON.parse(JSON.stringify(await courseController.getAllCourses()));
  return (
    <div className=''>
      <Container className='flex gap-4 items-center'>
        <FullstackInstituteLogo />
        <PageNavigationMenu courses={courses} />
        <AuthUser />
      </Container>
    </div>
  )
}

export default PageHeader