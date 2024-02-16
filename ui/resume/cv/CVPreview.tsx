import React from 'react'
import PersonInfo, { PersonInfoProps } from './PersonInfo'
import PersonalSkill from './Personalskills'
import Personalroles from './Personalroles'
import Professionalexperience from './Professionalexperience'
import Summary from './summary'
import { Projector } from 'lucide-react'
import { NEXT_PROJECT_ROOT_DIST } from 'next/dist/build/webpack-config'



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
	

			<PersonalSkill skill='Frontent' description='Html Css' />
			<Personalroles />
			<Professionalexperience />
			<summary />
		</div>)
}

export default CVPreview