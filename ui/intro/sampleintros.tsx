import { prisma } from '@/prisma';
import {
	Sample_intros,
	compareSelfIntro
} from '@/services/adapter/intro.adapter';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { getServerSession } from 'next-auth';

export async function Intros() {
	const resume_query =
    'Syed Saadh AI/ML Engineer, Hyderabad, India saadhsyed1@gmail.com | +91 9000788056 Objective Dynamic AI/ML professional with over 2 years of experience, skilled in machine learning, deep learning, Python, NLP, and front-end technologies Adept at developing comprehensive technology solutions with a focus on AI integration Seeking to contribute my diverse skill set to drive innovative AI applications and web-based solutions Skills ● AI/ML Technologies: Proficient in ML, Deep Learning, TensorFlow, Python, and NLP ● Programming: Strong skills in Python, JavaScript, HTML, CSS, and React ● Web Development: Experienced in building user-friendly interfaces ● API Development: Hands-on experience with ChatGPT, related APIs, and RESTful services ● Database Technologies: Knowledge in MySql, NoSQL, RDBMS design, and optimizations ● Design Principles: Familiar with object-oriented and functional design, and best-practice patterns Roles & Responsibilities ● AI/ML Development: Developed and optimized machine learning models using TensorFlow and Python, focusing on enhancing application functionalities and user experiences ● AI Strategy Implementation: Played a key role in the planning and execution of AI strategies, aligning them with business objectives and client needs ● Cross-Functional Collaboration: Worked closely with cross-functional teams to identify areas where AI solutions could significantly benefit business operations ● Documentation and Reporting: Documented development tasks, architectural solutions, and lessons learned to facilitate knowledge sharing and continuous improvement ● Front-End Development: Utilized JavaScript, React, HTML, and CSS to develop and enhance user interfaces, ensuring seamless integration with AI functionalities API Development and Integration: Developed and integrated APIs, including ChatGPT and other related services, to enhance application capabilities ● Database Design and Management: Proficient in REST API development, NoSQL database design, and RDBMS optimization to support robust back-end operations ● Continuous Learning and Innovation: Kept abreast of the latest advancements in AI, ML, and web technologies, continuously experimenting with new algorithms and techniques Professional Experience Software Engineer – TRANGLA Guntur, August 2022 – Present ● Developed and managed AI-driven coding tasks for application/product developments ● Collaborated with cross-functional teams to identify and implement AI solutions ● Designed and tested AI and ML coding solutions, upholding high ethical standards ● Participated in functional and process design, prototyping, and training sessions ● Documented and shared development tasks, solutions architecture, and key learnings ● Oversaw AI market and competitor assessments by the development team ● Utilized JavaScript, React, HTML, and CSS for front-end development in AI projects Data Analyst Intern – PHOENIXGLOBAL Hyderabad, April 2022 – July 2022 ● Spearheaded the development and management of ML-driven coding tasks, driving advancements in application and product development ● Utilized Python programming language and regression methodologies to forecast house prices, leveraging libraries such as Pandas and Numpy ● Designed and rigorously tested AI and ML coding solutions, consistently upholding high ethical standards in every aspect of the development process ● Actively engaged in functional and process design, prototyping, and training sessions, contributing specialized insights and expertise to the overall success of projects within the dynamic landscape of Data Science and Machine Learning ● Documented and shared development tasks, solutions architecture, and key learnings, ensuring effective knowledge dissemination within the team ● Demonstrated expertise in utilizing Python, Jupyter Notebook, and Google Colab ● Assumed a leadership position in guiding the project, overseeing the computation of house prices, and implementing strategic measures to improve prediction accuracy Projects AI/ML Project: Resume Parser and Skill Extraction Project Overview: Developed an advanced Resume Parser and Skill Extraction system using AI and ML technologies This tool streamlined the evaluation of candidate profiles by efficiently parsing resumes and extracting key skills Role & Responsibilities: ● Implemented machine learning models using Python and TensorFlow for resume analysis and skill extraction ● Utilized NLP techniques for accurate identification and categorization of skills, educational backgrounds, and professional experiences ● Collaborated with a team to enhance algorithm accuracy and processing efficiency ● Conducted thorough testing and validation to ensure system reliability ● Integrated the parsing system with existing HR platforms for automated candidate screening Technologies Used: Python, TensorFlow, NLP, ML Algorithms Web Development Project: Online Resume Upload Interface Project Overview: Created a responsive web interface for resume uploads, integrating with the AI-based Resume Parser for real-time parsing and skill extraction Role & Responsibilities: ● Designed the front-end using React, JavaScript, HTML, and CSS, focusing on user experience and interface responsiveness ● Implemented back-end functionalities for secure resume uploading and management ● Integrated the web interface with the AI Resume Parser for immediate processing ● Ensured compatibility across various browsers and mobile devices Technologies Used: JavaScript, React, HTML, CSS, RESTful APIs';
	const selfIntro =
    'Absolutely! I recently completed my Bachelor\'s in Computer Science and Engineering with a specialization in Machine Learning from Gitam University in Hyderabad Throughout my academic journey, I\'ve been deeply involved in a variety of projects, including predicting house pricing using Machine Learning and forecasting plant growth using advanced techniques This hands-on experience has solidified my technical skills in Python, Java, R, and various Machine Learning libraries Beyond my academic pursuits, I\'ve furthered my knowledge through certifications from renowned platforms like Coursera, particularly in areas of Data Science, Big Data with Spark and Hadoop, and Data Engineering While my core strength lies in Machine Learning and Data Analysis, I\'m also proficient in web technologies like JavaScript, HTML, and CSS In my free time, I enjoy cooking and listening to Naaths I\'m passionate about continuous learning and am always on the lookout for the next challenge or opportunity to grow in the AI field';

	const session = await getServerSession();
	const { user: loggedInUser } = session || {};
	const { email = '' } = loggedInUser || {};

	if (!email) {
		return [];
	}

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});

	const userId = user?.id || '';
	console.log(':: UserId :: ', user?.id);
	const intros = await Sample_intros(resume_query);

	const user_intros = intros.map((intro: any) => ({ userId, intro }));
	console.log(user_intros);

	/*
			prsima.selfIntro.createMany({
				data: user_intros
			})
	*/

	const selfIntroSimilarities = await compareSelfIntro(selfIntro, intros);

	return (
		<div className="flex flex-col gap-4">
			<Card>
				<p>{selfIntro}</p>
			</Card>

			<div className="grid grid-cols-3 gap-2">
				{intros.map((intro: any, idx: any) => (
					<Card key={idx}>
						<CardHeader>
							{intro?.name} - {selfIntroSimilarities?.[idx]?.score}
						</CardHeader>
						<CardBody>
							<p>{intro?.content}</p>
							<div className="border-b border-gray-300 my-4" />
							<p>{selfIntroSimilarities?.[idx]?.details}</p>
						</CardBody>
					</Card>
				))}
			</div>
			<h1>Comparing Percentages</h1>
		</div>
	);
}
