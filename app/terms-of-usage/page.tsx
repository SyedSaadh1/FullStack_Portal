import React from 'react'
import Container from '@/ui/layout/container'
import Title from '@/components/ui/text/Title'

type Props = {}

const TermsOfUsage = (props: Props) => {
	return (
		<div className="bg-white py-32">
			<Container>
				<Title className='uppercase'>Terms Of Usage</Title>
			</Container>
		</div>
	)
}

export default TermsOfUsage