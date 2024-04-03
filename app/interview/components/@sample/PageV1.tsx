/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zRUOXeTWONU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function PageV1() {
	return (
		<div className="relative bg-gray-50 dark:bg-gray-900">
			<div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:gap-10">
				<div className="flex flex-col justify-center p-6 space-y-6 lg:p-10">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              InterviewPro
						</h2>
						<p className="max-w-[600px] text-gray-500 dark:text-gray-400">
              Master the frontend and backend interview process with
              InterviewPro. Our platform offers a comprehensive suite of tools
              and resources designed to help you succeed in technical
              interviews.
						</p>
					</div>
					<div className="grid gap-4 md:gap-8">
						<div className="flex items-center space-x-4">
							<CheckCircleIcon className="w-6 h-6" />
							<div>
								<h3 className="font-semibold">Interactive Coding Challenges</h3>
								<p className="text-sm leading-none md:text-base">
                  Level Up Your Problem-Solving Skills
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<CheckCircleIcon className="w-6 h-6" />
							<div>
								<h3 className="font-semibold">
                  Comprehensive Interview Guides
								</h3>
								<p className="text-sm leading-none md:text-base">
                  Be Prepared for Anything
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-4">
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
						<div className="flex items-center space-x-4">
							<CheckCircleIcon className="w-6 h-6" />
							<div>
								<h3 className="font-semibold">Career Resources</h3>
								<p className="text-sm leading-none md:text-base">
                  Get the Edge You Need
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="p-6 lg:p-10">
					<img
						alt="InterviewPro"
						className="rounded-xl object-cover"
						height="500"
						src="/placeholder.svg"
						style={{
							aspectRatio: '700/500',
							objectFit: 'cover'
						}}
						width="700"
					/>
				</div>
			</div>
			<div className="mx-auto max-w-4xl p-6 lg:p-10">
				<div className="prose prose-lg">
					<h2>Interactive Coding Challenges</h2>
					<p>
            Put your coding skills to the test with our interactive coding
            challenges. Practice solving real-world problems and gain confidence
            in your abilities.
					</p>
					<h2>Comprehensive Interview Guides</h2>
					<p>
            Do not get caught off guard during your interview. Our comprehensive
            interview guides cover a wide range of topics, from data structures
            and algorithms to system design and project management.
					</p>
					<h2>Mock Interviews with AI Feedback</h2>
					<p>
            Simulate real interview scenarios with our AI-powered mock
            interviews. Receive personalized feedback on your performance and
            improve your interview skills.
					</p>
					<h2>Career Resources</h2>
					<p>
            Access our collection of career resources, including resume
            templates, interview tips, and job search strategies. Take advantage
            of our expert advice to boost your chances of landing your dream
            job.
					</p>
				</div>
			</div>
		</div>
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
