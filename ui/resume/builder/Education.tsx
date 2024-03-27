'use client';
import Container from '@/ui/layout/container';
import React from 'react';
import { Label } from '@/components/ui/label';
import { DatePicker } from '../dateui/DatePicker';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { LabelInput } from '@/components/form/LabelInput';
import { Textarea } from '@/components/ui/textarea';

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
						<Label>Start Date</Label>
						<DatePicker />
					</div>
					<div className="flex flex-col gap-2">
						<Label>End Date</Label>
						<DatePicker />
					</div>
				</div>

				<div className="col-span-1">
					<Label>Description</Label>
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
