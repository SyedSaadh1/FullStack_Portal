import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PractiseExerciseTypesProps {
}

const tabs = [
	{ id: 'all', title: 'All' },
	{ id: 'easy', title: 'Easy' },
	{ id: 'medium', title: 'Medium' },
	{ id: 'hard', title: 'Hard' },
]

export default function PractiseExerciseTypes({ }: PractiseExerciseTypesProps) {
	return (
		<Tabs defaultValue={tabs[0].id} className="">
			<TabsList>
				{tabs?.map(tab => <TabsTrigger key={tab.id} value={tab.id}>{tab.title}</TabsTrigger>)}
			</TabsList>
		</Tabs>
	);
}
