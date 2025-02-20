'use client';
import Container from '@/ui/layout/container';
import React from 'react';
import { DatePicker } from '../dateui/DatePicker';
import { LabelInput } from '@/components/form/LabelInput';
import Link from 'next/link';
import { Button, Textarea } from '@nextui-org/react';

type Props = {};

const Experience = (_: Props) => {
	const fields = [
		{
			id: 'companyname',
			label: 'Name of Company',
			placeholder: 'Company Name'
		},
		{ id: 'Position', label: 'Position', placeholder: 'Details' },
		{ id: 'location', label: 'Location Type', placeholder: 'Ex:-Working Type' }
	];

	return (
		<Container>
			<div className="grid gap-8 md:grid-cols-3 grid-cols-1 pb-8">
				{fields.map(({ id, placeholder, label }) => (
					<LabelInput
						key={id}
						inputProps={{
							id,
							placeholder
						}}
						labelProps={{
							htmlFor: id,
							children: label
						}}
					/>
				))}

				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<label>Start Date</label>
						<DatePicker />
					</div>
					<div className="flex flex-col gap-2">
						<label>End Date</label>
						<DatePicker />
					</div>
				</div>

				<div className="md:col-span-2 col-span-1 flex flex-col gap-2">
					<label>Role And Responsibilities </label>
					<Textarea />
				</div>
			</div>

			<footer className="flex justify-between">
				<Link href="/resume/experience">
					<Button>previous</Button>
				</Link>
				<Link href="/resume/education">
					<Button>Next</Button>
				</Link>
			</footer>
		</Container>
	);
};

export default Experience;
