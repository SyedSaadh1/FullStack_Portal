import React from 'react'
import Title from '@/components/ui/text/Title'
import Container from '@/ui/layout/container'

type Props = {}

const PrivacyPolicy = (props: Props) => {
    return (
        <div className="bg-white py-32">
            <Container>
                <Title className='uppercase'>Privasy policy</Title>
            </Container>
        </div>
    )
}

export default PrivacyPolicy