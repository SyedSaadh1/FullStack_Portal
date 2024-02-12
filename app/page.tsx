import challengesServices from '@/services/platform/challenges/challenges.services';
import ChallengeCard from '@/ui/platform/ChallengeCard';
import ExploreTabs from '@/ui/explore/ExploreTabs';
import { useSearchParams } from 'next/navigation';
import HomePagePrograms from '@/ui/programs/HomePagePrograms';
import HomePageCourses from '@/ui/courses/HomePageCourses';
import HomePageTopics from '@/ui/topics/HomePageTopics';
import { getServerSession } from 'next-auth';
import JSONViewer from '@/ui/common/JSONViewer';


const TAB_VIEW: any = {
	'programs': <HomePagePrograms />,
	'courses': <HomePageCourses />,
	'topics': <HomePageTopics />,
}

export default async function Home() {
	const data = await getServerSession()
	return (
		<div>
			<JSONViewer value={data} />
			<ExploreTabs tabs={TAB_VIEW} />
		</div>
	);
}