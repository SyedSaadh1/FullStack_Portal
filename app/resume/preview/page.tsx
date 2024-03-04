import CVPreview from '@/ui/resume/cv/CVPreview';
import { PersonInfoProps } from '@/ui/resume/cv/PersonInfo';
import React from 'react';

export default function Page() {
	const info: PersonInfoProps = {
		name: 'Shaik Tazeem',
		email: 'shaiktazeem@gmail.com',
		contact: '9638527410',
		address: 'Ongole, AP',
		title: 'Frontend Developer'
	};

	return <CVPreview info={info} />;
}
