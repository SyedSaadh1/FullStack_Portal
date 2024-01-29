import React from 'react'
import Container from '../layout/container'
import { Title1 } from '@fluentui/react-components'

type Props = {}

function HomePageTopics({}: Props) {
  return (
    <section className='py-4'>
      <Container>
        <Title1>Topics</Title1>
      </Container>
    </section>
  )
}

export default HomePageTopics