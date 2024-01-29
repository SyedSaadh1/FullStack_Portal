'use client';

// Import necessary dependencies from '@fluentui/react-components'
import {
	Card,
	makeStyles,
	shorthands,
	Text,
	Title1,
	tokens,
} from '@fluentui/react-components';
import CodeViewer from './components/editor/CodeViewer';
import { TiptapEditor } from './components/editor/TiptapEditor';
import challengesServices from '@/services/platform/challenges/challenges.services';
import ChallengeCard from '@/ui/platform/ChallengeCard';
import ExploreTabs from '@/ui/explore/ExploreTabs';
import { useSearchParams } from 'next/navigation';

// Create a custom 'useStyles' hook to define the styling for the Home component.
const useStyles = makeStyles({
	container: {
		...shorthands.padding(tokens.spacingHorizontalXXL),
		...shorthands.gap(tokens.spacingVerticalM),
	},
});

/**
 * Home component.
 *
 * This component renders a simple 'Hello World!' message and
 * some text styled with Fluent UI components and utilities.
 *
 * @returns {React.Element} The Home component with the 'Hello World!' message and some text.
 */
export default function Home() {
	// Retrieve the styles object from the 'useStyles' hook.
	const styles = useStyles();
	const searchParams = useSearchParams();
	const exploreParam = searchParams.get('explore');


	// Render the Home component with a Title1 and Text component from Fluent UI.
	return (
		<>
			<main className={styles.container}>
				{/* {challengesServices.courseList.map((course) => <ChallengeCard key={course.title} {...course} />)} */}
			</main>
			<ExploreTabs />
		</>
	);
}