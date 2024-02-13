import React from 'react'

export type PersonInfoProps = {
	name: string;
	title: string;
	address: string;
	email: string;
	contact: string;
}

const PersonInfo = (props: PersonInfoProps) => {
	const { name, title, email, contact, address } = props
	return (
		<header>
			<h1 className="text-4xl text-center">{name}</h1>
			<h3 className="text-2xl text-center">{title}, {address}</h3>
			<h4 className="text-lg text-center">{email} | {contact}</h4>
		</header>
	)
}

export default PersonInfo