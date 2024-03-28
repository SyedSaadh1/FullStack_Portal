'use client';
import Container from '@/ui/layout/container';
import React from 'react';
import Link from 'next/link';
import { Button, Textarea } from '@nextui-org/react';

type Props = {};

const Skills = (_: Props) => {
	return (
		<Container>
			<div className="grid grid-cols-2 gap-16 pb-8">
				<div className="flex flex-col gap-2">
					<label>Advance Skills </label>
					<Textarea />
				</div>
				<div className="flex flex-col gap-2">
					<label>Professional Skills</label>
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
