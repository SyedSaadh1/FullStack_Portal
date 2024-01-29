import React from 'react'
import FullstackInstituteLogo from './FullstackInstituteLogo'
import Container from './container'
import PageNavigationMenu from './PageNavigationMenu'

type Props = {}

function PageHeader({ }: Props) {
  return (
    <div className=''>
      <Container className='flex gap-4 items-center'>
        <FullstackInstituteLogo />
        <PageNavigationMenu />
      </Container>
    </div>
  )
}

export default PageHeader