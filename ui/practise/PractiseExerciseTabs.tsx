import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PractiseExerciseTabsProps {
}

const tabs = [
	{ id: 'all-exercises', title: 'All Exercises' },
	{ id: 'in-progress', title: 'In Progress' },
	{ id: 'completed', title: 'Completed' },
	{ id: 'not-started', title: 'Not Started' },
]

export default function PractiseExerciseTabs({ }: PractiseExerciseTabsProps) {
	return (
		<Tabs defaultValue={tabs[0].id} className="">
			<TabsList>
				{tabs?.map(tab => <TabsTrigger key={tab.id} value={tab.id}>{tab.title}</TabsTrigger>)}
			</TabsList>
		</Tabs>
	);
}
