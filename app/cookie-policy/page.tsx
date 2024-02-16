import React from 'react'
import Container from '@/ui/layout/container'
import Title from '@/components/ui/text/Title'

type Props = {}

const CookiePolicy = (props: Props) => {
    return (
        <div className="bg-white py-32">
            <Container>
                <Title className='uppercase'>Cookie policiy</Title>
            </Container>
        </div>
    )
}

export default CookiePolicy