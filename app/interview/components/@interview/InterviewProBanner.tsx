import { techStackIcons } from '@/lib/@techStack/techStack.icons';
import Container from '@/ui/layout/container';
import React from 'react';
import StackIcon from 'tech-stack-icons';

type Props = {};

function InterviewPropBanner(_: Props) {
	return (
		<section className="bg-gradient-to-br from-cyan-600 to-violet-600 shadow-inner relative z-10">
			<div className="mix-blend-multiply grid grid-cols-8 md:grid-cols-16 gap-2 md:gap-8 p-2 md:p-4 absolute top-0 left-0 -z-10 w-full h-full overflow-hidden opacity-[0.1]">
				{techStackIcons.map(tech => (
					<StackIcon key={tech} name={tech} grayscale />
				))}
			</div>
			<Container className="py-6 text-center max-w-screen-xl relative z-10 text-shadow-sm shadow-gray-900">
				<h3 className="text-5xl font-bold text-center text-white py-8 p-4 border-b-2 border-dashed border-gray-300">
          InterviewPro
				</h3>

				<div className="py-10 border-b-2 border-dashed border-gray-300">
					<p className="max-w-4xl mx-auto text-xl text-white">
            Master the frontend and backend interview process with InterviewPro.
            Our platform offers a comprehensive suite of tools and resources
            designed to help you succeed in technical interviews.
					</p>
				</div>

				<div className="grid grid-cols-3 text-white">
					<div className="flex flex-col items-center space-y-4 py-10 px-5">
						<CheckCircleIcon className="w-6 h-6" />
						<div>
							<h3 className="font-semibold">
                Mock Interviews with AI Feedback
							</h3>
							<p className="text-sm leading-none md:text-base">
                Sharpen Your Interview Skills
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center space-y-4 py-10 px-5 border-x-2 border-dashed border-gray-300">
						<CheckCircleIcon className="w-6 h-6" />
						<div>
							<h3 className="font-semibold">Comprehensive Interview Guides</h3>
							<p className="text-sm leading-none md:text-base">
                Be Prepared for Anything
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center space-y-4 py-10 px-5">
						<CheckCircleIcon className="w-6 h-6" />
						<div>
							<h3 className="font-semibold">Interactive Coding Challenges</h3>
							<p className="text-sm leading-none md:text-base">
                Level Up Your Problem-Solving Skills
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

function CheckCircleIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
			<polyline points="22 4 12 14.01 9 11.01" />
		</svg>
	);
}

export default InterviewPropBanner;
