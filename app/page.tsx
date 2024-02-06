import CodeViewer from './components/editor/CodeViewer';
import { TiptapEditor } from './components/editor/TiptapEditor';
import challengesServices from '@/services/platform/challenges/challenges.services';
import ChallengeCard from '@/ui/platform/ChallengeCard';
import ExploreTabs from '@/ui/explore/ExploreTabs';
import { useSearchParams } from 'next/navigation';
import HomePagePrograms from '@/ui/programs/HomePagePrograms';
import HomePageCourses from '@/ui/courses/HomePageCourses';
import HomePageTopics from '@/ui/topics/HomePageTopics';


const TAB_VIEW: any = {
	'programs': <HomePagePrograms />,
	'courses': <HomePageCourses />,
	'topics': <HomePageTopics />,
}

export default async function Home() {

	return (
		<div>
			<ExploreTabs tabs={TAB_VIEW} />
		</div>
	);
}