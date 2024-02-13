import React from 'react'
import PersonInfo, { PersonInfoProps } from './PersonInfo'
import PersonalSkill from './Personalskills'
import Personalroles from './Personalroles'
import Professionalexperience from './Professionalexperience'
import { Projector } from 'lucide-react'
import { NEXT_PROJECT_ROOT_DIST } from 'next/dist/build/webpack-config'
import Projects from './Projects'


type Props = {
	info: PersonInfoProps
}

const CVPreview = (props: Props) => {
	const { info } = props;
	const { name, title, email, contact, address } = info
	return (

		<div className="">
			<PersonInfo
				name={name}
				title={title}
				email={email}
				contact={contact}
				address={address}
			/>
			<hr className="border-b border-solid border-gray-100" />
			<p className="mt-5 font-bold underline underline-offset-1 m-2">
				Objective
			</p>
			

			<PersonalSkill skill='Frontent' description='Html Css' />
			<Personalroles />
			<Professionalexperience />
			<Projects />
			{/* <Object /> */}
		</div>)
}

export default CVPreview