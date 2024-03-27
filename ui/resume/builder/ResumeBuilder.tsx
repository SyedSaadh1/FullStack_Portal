'use client';
import Container from '@/ui/layout/container';
import { Label } from '@/components/ui/label';
import { LabelInput } from '@/components/form/LabelInput';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

type Props = {};

const fields = [
	{ id: 'name', label: 'Name', placeholder: 'Write your fullname' },
	{ id: 'phonenumber', label: 'Phone number', placeholder: 'Phone number' },
	{ id: 'email', label: 'Email', placeholder: 'Write your email' }
];

const ResumeBuilder = (_: Props) => {
	return (
		<Container className="">
			<div className="grid gap-8 md:grid-cols-3 grid-cols-1">
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

				<div className="md:col-span-3 col-span-1 flex flex-col gap-2">
					<Label htmlFor="summary">Information</Label>
					<Textarea id="summary" placeholder="Write Your Summary." />
				</div>
			</div>

			<footer className="text-right mt-8">
				<Link href="/resume/experience">
					<Button>Next</Button>
				</Link>
			</footer>
		</Container>
	);
};

export default ResumeBuilder;
