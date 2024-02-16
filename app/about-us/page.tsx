import React from 'react'
import Container from '@/ui/layout/container'
import Title from '@/components/ui/text/Title'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <div className="bg-white py-32">
            <Container>
                <Title className='uppercase'>About Us</Title>
            </Container>
        </div>
    )
}

export default AboutUs