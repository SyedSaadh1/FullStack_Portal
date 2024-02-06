"use client"

import * as React from "react"

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
	Card,
	CardContent,
} from "@/components/ui/card"

export default function CourseDetailsCard() {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<Card className="p-4 hover:shadow-xl">
			<CardContent className="p-0"    >
				<Collapsible
					open={isOpen}
					onOpenChange={setIsOpen}
				>
					<CollapsibleTrigger className="w-full">
						<div className="w-full flex flex-row justify-between items-center">
							<section className="flex gap-2">
								<img src="" alt="#" />
								<h3 className="text-xl">HTML Basics</h3>
							</section>
							<p className="text-xl">4 Lessons</p>
						</div>
					</CollapsibleTrigger>
					<CollapsibleContent className="">
						<h3 className="text-2xl">Html Tags</h3>
					</CollapsibleContent>
				</Collapsible>
			</CardContent>
		</Card>
	)
}
