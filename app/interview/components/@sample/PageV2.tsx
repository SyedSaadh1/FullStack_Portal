/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YCHiSA6BPVN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from '@nextui-org/react';

export default function Component() {
	return (
		<>
			<div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
				<div className="container flex flex-col items-center justify-center py-10 space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold">
              Supercharge Your Interview Prep
						</h2>
						<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              The complete platform for mastering the technical interview.
              Trusted by top developers at leading companies.
						</p>
					</div>
					<Button size="lg">Sign up for free</Button>
				</div>
				<div className="aspect-[1.3] w-full">
					<img
						alt="Hero image"
						className="object-cover"
						height="400"
						src="/placeholder.svg"
						style={{
							aspectRatio: '500/400',
							objectFit: 'cover'
						}}
						width="500"
					/>
				</div>
				<div className="absolute inset-0 z-[-1]">
					<div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-100/00 dark:from-gray-800 dark:to-gray-800/00" />
					<div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-100/10 dark:from-gray-800 dark:to-gray-800/10" />
				</div>
			</div>
			<div className="container grid gap-10 px-4 py-10 lg:grid-cols-2 lg:gap-20 lg:px-10 xl:gap-32">
				<div className="space-y-4">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold">
              Master the Interview with Confidence
						</h2>
						<p className="max-w-2xl text-gray-500 md:text-xl dark:text-gray-400">
              TechInterviewPro is designed to help you level up your interview
              skills. Our platform offers a comprehensive suite of features to
              ensure you are well-prepared to tackle technical interviews with
              confidence.
						</p>
					</div>
					<div className="grid gap-4">
						<div className="flex items-center gap-4">
							<CheckIcon className="h-6 w-6 text-blue-600" />
							<div className="space-y-1">
								<h3 className="font-semibold">Tailored Practice</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
                  Get practice questions tailored to your skill level and the
                  companies you are targeting.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<CheckIcon className="h-6 w-6 text-blue-600" />
							<div className="space-y-1">
								<h3 className="font-semibold">Interactive Learning</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
                  Access a library of interactive modules to learn by doing,
                  including coding challenges and system design problems.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<CheckIcon className="h-6 w-6 text-blue-600" />
							<div className="space-y-1">
								<h3 className="font-semibold">Personalized Feedback</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive AI-powered feedback on your performance and understand
                  your strengths and areas for improvement.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<CheckIcon className="h-6 w-6 text-blue-600" />
							<div className="space-y-1">
								<h3 className="font-semibold">Community Support</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with peers and experts in our community to share
                  insights, ask questions, and receive mentorship.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="grid items-center justify-center gap-4">
					<div className="space-y-2">
						<h3 className="text-2xl font-bold tracking-tight">
              Tailored Practice – Sharpen Your Skills with Realistic Questions
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
              No more guessing games. Our platform provides you with tailored
              practice questions that simulate real interview scenarios. Whether
              it is coding challenges, system design problems, or algorithmic
              puzzles, you will be ready to tackle any challenge that comes your
              way.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-2xl font-bold tracking-tight">
              Interactive Learning – Learn by Doing, Not Just Reading
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
              TechInterviewPro goes beyond theory. Our interactive learning
              modules allow you to apply your knowledge in a hands-on manner.
              Build real projects, solve coding exercises, and gain practical
              experience that will set you apart from other candidates.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-2xl font-bold tracking-tight">
              Personalized Feedback – Understand Your Strengths and Weaknesses
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
              Do not just practice blindly. Our AI-powered feedback system
              analyzes your performance and provides personalized insights into
              your strengths and weaknesses. You will know exactly where to
              focus your efforts for continuous improvement.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="text-2xl font-bold tracking-tight">
              Community Support – Connect with Peers and Experts
						</h3>
						<p className="text-gray-500 dark:text-gray-400">
              Join a vibrant community of aspiring and experienced developers.
              Engage in discussions, ask questions, and learn from others who
              are on the same journey as you. Our community of experts is also
              available to provide guidance and mentorship along the way.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-gray-100 dark:bg-gray-800">
				<div className="container grid gap-10 p-4 py-10 text-center md:grid-cols-3 md:gap-8 md:p-10">
					<div className="flex flex-col items-center space-y-2 md:space-y-4">
						<div className="text-4xl font-semibold">250+</div>
						<div className="text-xl font-semibold">Companies</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by top companies
						</div>
					</div>
					<div className="flex flex-col items-center space-y-2 md:space-y-4">
						<div className="text-4xl font-semibold">10,000+</div>
						<div className="text-xl font-semibold">Users</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
              Joining the community
						</div>
					</div>
					<div className="flex flex-col items-center space-y-2 md:space-y-4">
						<div className="text-4xl font-semibold">98%</div>
						<div className="text-xl font-semibold">Success Rate</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
              For interview prep
						</div>
					</div>
				</div>
			</div>
			<div className="container grid gap-10 p-4 py-10 text-center md:grid-cols-3 md:gap-8 md:p-10">
				<div className="flex flex-col items-center space-y-2 md:space-y-4">
					<div className="text-4xl font-semibold">250+</div>
					<div className="text-xl font-semibold">Companies</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
            Trusted by top companies
					</div>
				</div>
				<div className="flex flex-col items-center space-y-2 md:space-y-4">
					<div className="text-4xl font-semibold">10,000+</div>
					<div className="text-xl font-semibold">Users</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
            Joining the community
					</div>
				</div>
				<div className="flex flex-col items-center space-y-2 md:space-y-4">
					<div className="text-4xl font-semibold">98%</div>
					<div className="text-xl font-semibold">Success Rate</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
            For interview prep
					</div>
				</div>
			</div>
			<div className="container grid gap-10 p-4 py-10 text-center md:grid-cols-3 md:gap-8 md:p-10">
				<div className="flex flex-col items-center space-y-2 md:space-y-4">
					<div className="text-4xl font-semibold">250+</div>
					<div className="text-xl font-semibold">Companies</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
            Trusted by top companies
					</div>
				</div>
				<div className="flex flex-col items-center space-y-2 md:space-y-4">
					<div className="text-4xl font-semibold">10,000+</div>
					<div className="text-xl font-semibold">Users</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
            Joining the community
					</div>
				</div>
				<div className="flex flex-col items-center space-y-2 md:space-y-4">
					<div className="text-4xl font-semibold">98%</div>
					<div className="text-xl font-semibold">Success Rate</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
            For interview prep
					</div>
				</div>
			</div>
		</>
	);
}

function CheckIcon(props: any) {
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
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
}
