import challengesServices from '@/services/platform/challenges/challenges.services';
import ChallengeCard from '@/ui/platform/ChallengeCard';
import ExploreTabs from '@/ui/explore/ExploreTabs';
import { useSearchParams } from 'next/navigation';
import HomePagePrograms from '@/ui/programs/HomePagePrograms';
import HomePageCourses from '@/ui/courses/HomePageCourses';
import HomePageTopics from '@/ui/topics/HomePageTopics';
import { getServerSession } from 'next-auth';
import JSONViewer from '@/ui/common/JSONViewer';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import Balancer from 'react-wrap-balancer';
import Title from '@/components/ui/text/Title';
import Container from '@/ui/layout/container';
import coursesServices from '@/services/courses.services';


const TAB_VIEW: any = {
	'programs': <HomePagePrograms />,
	'courses': <HomePageCourses />,
	'topics': <HomePageTopics />,
}

export default async function Home() {
	const data = await getServerSession()
	return (
		<div>
			<section className='' >
				<PageHeader className='grid md:grid-cols-2 grid-cols-1 gap-4'>
					<div className=''>

						<PageHeaderHeading className='text-left'>
							<Balancer>
								Elevate Your Full Stack Development Journey
							</Balancer>
						</PageHeaderHeading>

						<PageHeaderDescription className='mt-4 text-left'>Master Programming Excellence with a Blend of Learning, Practice, and Expert Guidance</PageHeaderDescription>
					</div>
					<div className='mix-blend-multiply'>
						<img src={'/images/Elevate-Your-FullStack.svg'} />
					</div>
				</PageHeader>
			</section>

			<section className='text-center bg-white z-10 relative pt-24  border-white border-t-2'>
				<Container>
					<Title>
						<Balancer>
							Dive into Web Programming Languages and Achieve Fluency
						</Balancer>
					</Title>

					<HomePageCourses />
				</Container>

				<div className='opacity-40 absolute bg-cover bg-center top-0 left-0 -z-10 w-full h-full mix-blend-multiply' style={{ backgroundImage: `url(/images/dive-into-web-programming-languages.svg)` }} />
			</section>
			{/* <JSONViewer value={data} /> */}
			{/* <ExploreTabs tabs={TAB_VIEW} /> */}
		</div>
	);
}