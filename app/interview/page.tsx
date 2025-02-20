// import Welcome from './components/Welcome';
// import Title from '@/components/ui/text/Title';
// import { Mcqs } from '@/services/adapter/intro.adapter';
// import JSONViewer from '@/ui/common/JSONViewer';
// import MCQs from '@/ui/intro/mcqs';
// import { Intros } from '@/ui/intro/sampleintros';
import Container from '@/ui/layout/container';
import InterviewProBanner from './components/@interview/InterviewProBanner';
import SelectTechStack from './components/@interview/SelectTechStack';
import TechnologyController from '@/modules/internal/interview/technologies/TechnologyController';
import Welcome from './components/Welcome';

export default async function Page() {
	// const jobDescription =
	//   'Job Description We are looking for a great JavaScript developer who is proficient with React.js Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux) You will ensure that these components and the overall application are robust and easy to maintain You will coordinate with the rest of the team working on different layers of the infrastructure Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important Responsibilities Developing new user-facing features using React.js Building reusable components and front-end libraries for future use Translating designs and wireframes into high-quality code Optimizing components for maximum performance across a vast array of web-capable devices and browsers {{Add other relevant responsibilities here}} Skills Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model Thorough understanding of React.js and its core principles Experience with popular React.js workflows (such as Flux or Redux) Familiarity with newer specifications of EcmaScript Experience with data structure libraries (e.g., Immutable.js) Knowledge of isomorphic React is a plus Familiarity with RESTful APIs Knowledge of modern authorization mechanisms, such as JSON Web Token Familiarity with modern front-end build pipelines and tools Experience with common front-end development tools such as Babel, Webpack, NPM, etc Ability to understand business requirements and translate them into technical requirements A knack for benchmarking and optimization Familiarity with code versioning tools {{such as Git, SVN, and Mercurial}}';
	// const questions = await Mcqs(jobDescription);
	// const question: any = JSON.parse(questions || '[]');

	const stacks = await TechnologyController.getAllStackTypes();

	return (
		<div className="min-h-[50vh]">
			<InterviewProBanner />
			<SelectTechStack stacks={stacks} />
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
