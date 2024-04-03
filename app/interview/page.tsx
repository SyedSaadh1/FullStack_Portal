import { techStackIcons } from '@/lib/@techStack/techStack.icons';
import Welcome from './components/Welcome';
// import Title from '@/components/ui/text/Title';
// import { Mcqs } from '@/services/adapter/intro.adapter';
// import JSONViewer from '@/ui/common/JSONViewer';
// import MCQs from '@/ui/intro/mcqs';
// import { Intros } from '@/ui/intro/sampleintros';
import Container from '@/ui/layout/container';
import StackIcon from 'tech-stack-icons';

export default async function Page() {
	// const jobDescription =
	//   'Job Description We are looking for a great JavaScript developer who is proficient with React.js Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux) You will ensure that these components and the overall application are robust and easy to maintain You will coordinate with the rest of the team working on different layers of the infrastructure Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important Responsibilities Developing new user-facing features using React.js Building reusable components and front-end libraries for future use Translating designs and wireframes into high-quality code Optimizing components for maximum performance across a vast array of web-capable devices and browsers {{Add other relevant responsibilities here}} Skills Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model Thorough understanding of React.js and its core principles Experience with popular React.js workflows (such as Flux or Redux) Familiarity with newer specifications of EcmaScript Experience with data structure libraries (e.g., Immutable.js) Knowledge of isomorphic React is a plus Familiarity with RESTful APIs Knowledge of modern authorization mechanisms, such as JSON Web Token Familiarity with modern front-end build pipelines and tools Experience with common front-end development tools such as Babel, Webpack, NPM, etc Ability to understand business requirements and translate them into technical requirements A knack for benchmarking and optimization Familiarity with code versioning tools {{such as Git, SVN, and Mercurial}}';
	// const questions = await Mcqs(jobDescription);
	// const question: any = JSON.parse(questions || '[]');

	return (
		<div className="min-h-[50vh]">
			<section className="bg-gradient-to-br from-cyan-600 to-violet-600 shadow-inner relative z-10">
				<div className="mix-blend-multiply grid grid-cols-16 gap-8 p-4 absolute top-0 left-0 -z-10 w-full h-full overflow-hidden opacity-[0.1]">
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
              Master the frontend and backend interview process with
              InterviewPro. Our platform offers a comprehensive suite of tools
              and resources designed to help you succeed in technical
              interviews.
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
								<h3 className="font-semibold">
                  Comprehensive Interview Guides
								</h3>
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
			<Welcome />
			<Container className="py-6">
				{/* <Title>Interview Page</Title> */}
				{/* <p>Page content</p> */}
				{/* <Intros /> */}

				{/* <h1>MCQs</h1> */}
				{/* <JSONViewer value={questions}  /> */}
				{/* <MCQs questions={question} /> */}
			</Container>
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
