import { Input } from "@/components/ui/input";
import Container from "../layout/container";
import PractiseExerciseTabs from "./PractiseExerciseTabs";
import PractiseExerciseTypes from "./PractiseExerciseTypes";
import exercises from "@/curriculum/practise-tasks/techiedelight.json";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PractiseContainerProps {
}

export default function PractiseContainer({ }: PractiseContainerProps) {
	return (
		<div className="bg-white py-8">
			<Container className="flex justify-between">
				<PractiseExerciseTabs />
				<div className="flex gap-4">
					<Input placeholder="Search by title" className="max-w-[400px] shadow" />
					<PractiseExerciseTypes />
				</div>
			</Container>

			<Container className="mt-5">
				<div className="grid md:grid-cols-3 grid-cols-2 gap-4">
					{exercises.map(topic => <Card key={topic.link}>
						<CardHeader className="">
							<CardTitle className="flex justify-between">
								<span>{topic.title}</span>
								<Badge variant="secondary">{topic.type}</Badge>
							</CardTitle>

						</CardHeader>
					</Card>)}
				</div>

			</Container>
		</div>
	);
}
