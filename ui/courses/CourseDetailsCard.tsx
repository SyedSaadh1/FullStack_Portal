'use client';

import * as React from 'react';
import { Button, Card } from '@nextui-org/react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion';
import Container from '../layout/container';
import { Course } from '@/types/course.types';

type Props = {
  course: Course;
};

export default function CourseDetailsCard({ course }: Props) {
	return (
		<Container>
			{course?.modules?.map((module, idx) => (
				<Card className="mt-4" key={idx}>
					<Accordion type="single" collapsible className="w-full  py-2 px-8">
						<AccordionItem className="border-none" value="item-1">
							<AccordionTrigger className="text-xl hover:no-underline">
								{module?.title}
							</AccordionTrigger>
							<AccordionContent className="border-none">
								<p className="py-4">{course?.description}</p>
								<Button>Submission</Button>
								{module?.sessions?.map((session, idx) => (
									<Card key={idx} className="bg-slate-100 my-4">
										<Accordion type="single" collapsible className="px-8">
											<AccordionItem className="border-none" value="item-1">
												<AccordionTrigger className="hover:no-underline">
													<div className="w-full flex justify-between">
														<h2>{session?.title}</h2>
														<span className="mr-8">
															{session?.topics?.length || 0} Topics
														</span>
													</div>
												</AccordionTrigger>
												<AccordionContent className="border-none">
													<div className="flex flex-col gap-4 px-6">
														{session?.topics?.map(topic => (
															<a key={topic} href="">
																{topic}
															</a>
														))}
													</div>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</Card>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</Card>
			))}
		</Container>
	);
}
