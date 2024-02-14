import React from 'react'
import Container from '../layout/container'
import Title4 from '@/components/ui/text/Title4'

type Props = {}

const Instructions = (props: Props) => {
	return (
		<Container className="p-5 bg-white row-span-2 min-h-80 border-4">
			<Title4>Return the Sum of Two Numbers</Title4>
			<p>Create a function that takes two numbers as arguments and returns their sum.</p>
		</Container>
	)
}

export default Instructions