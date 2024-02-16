import React from 'react'
import Title from '@/components/ui/text/Title'
import Container from '@/ui/layout/container'

type Props = {}

const OurTeam = (props: Props) => {
    return (
        <div className="bg-white py-32">
            <Container>
                <Title className='uppercase'>Our Team</Title>
            </Container>
        </div>
    )
}

export default OurTeam