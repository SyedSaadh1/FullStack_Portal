import React from 'react'
import { Challenge } from '@/types/challenge.types'

type Props = {
	challenge: Challenge
}

const Instructions = ({ challenge }: Props) => {
	return (
		<div className="p-5 bg-white row-span-2 min-h-80 overflow-hidden overflow-x-auto">
			<pre>{challenge?.problem}</pre>
		</div>
	)
}

export default Instructions