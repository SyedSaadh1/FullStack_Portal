'use client';
import Container from '@/ui/layout/container';
import React from 'react';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Textarea } from '@/components/ui/textarea';

type Props = {};

const Skills = (_: Props) => {
	return (
		<Container>
			<div className="grid grid-cols-2 gap-16 pb-8">
				<div className="flex flex-col gap-2">
					<Label>Advance Skills </Label>
					<Textarea />
				</div>
				<div className="flex flex-col gap-2">
					<Label>Professional Skills</Label>
					<Textarea />
				</div>
			</div>

			<footer className="flex justify-between">
				<Link href="/resume/education">
					<Button>previous</Button>
				</Link>
				<Link href="/resume">
					<Button>Next</Button>
				</Link>
			</footer>
		</Container>
	);
};

export default Skills;
