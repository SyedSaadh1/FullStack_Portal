import React from 'react'
import Container from '../layout/container'
import Title4 from '@/components/ui/text/Title4'

type Props = {}

const Resources = (props: Props) => {
	return (
		<Container className="p-5 bg-white row-span-2 min-h-80 border-4">
			<Title4>Resources</Title4>
		</Container>
	)
}

export default Resources