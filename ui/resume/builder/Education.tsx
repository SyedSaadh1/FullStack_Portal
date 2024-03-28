'use client';
import Container from '@/ui/layout/container';
import React from 'react';
import { DatePicker } from '../dateui/DatePicker';
import Link from 'next/link';
import { Button, Textarea } from '@nextui-org/react';
import { LabelInput } from '@/components/form/LabelInput';

type Props = {};

const Education = (_: Props) => {
	const fields = [
		{ id: 'school', label: 'Schooling', placeholder: 'Details' },
		{ id: 'degree', label: 'Degree', placeholder: 'Details' }
	];

	return (
		<Container>
			<div className="grid grid-cols-2 gap-4 pb-8">
				<div className="col-span-1 flex flex-col gap-4">
					{fields.map(({ id, placeholder, label }) => (
						<LabelInput
							key={id}
							inputProps={{
								id,
								placeholder
								//onChange: handleChange
							}}
							labelProps={{
								htmlFor: id,
								children: label
							}}
						/>
					))}
					<div className="flex flex-col gap-2">
						<label>Start Date</label>
						<DatePicker />
					</div>
					<div className="flex flex-col gap-2">
						<label>End Date</label>
						<DatePicker />
					</div>
				</div>

				<div className="col-span-1">
					<label>Description</label>
					<Textarea />
				</div>
			</div>

			<footer className="flex justify-between">
				<Link href="/resume/experience">
					<Button>previous</Button>
				</Link>
				<Link href="/resume/skills">
					<Button>Next</Button>
				</Link>
			</footer>
		</Container>
	);
};

export default Education;
