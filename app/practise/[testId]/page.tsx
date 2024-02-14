"use client"
import Title4 from '@/components/ui/text/Title4'
import Container from '@/ui/layout/container'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { Label } from '@radix-ui/react-label'
import { Star, ThumbsDown, ThumbsUp } from 'lucide-react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Instructions from '@/ui/practise/Instructions'
import Resources from '@/ui/practise/Resources'
import Submissions from '@/ui/practise/Submissions'

type Props = {}

const Page = (props: Props) => {
	return (
		<Container className="flex gap-4 justify-center">
			<div className="flex flex-col flex-1">
				<Tabs defaultValue="Interaction" className="mb-5">
					<TabsList className="">
						<TabsTrigger value="Interaction">Interaction</TabsTrigger>
						<TabsTrigger value="Resources">Resources</TabsTrigger>
						<TabsTrigger value="Submissions">Submissions</TabsTrigger>
					</TabsList>
					<TabsContent value="Interaction">
						<Instructions />
					</TabsContent>
					<TabsContent value="Resources">
						<Resources />
					</TabsContent>
					<TabsContent value="Submissions">
						<Submissions />
					</TabsContent>
				</Tabs>
				<div className="flex gap-3 p-3">
					<a href="#"><ThumbsUp className="mr-2 h-4 w-4" /></a>
					<a href="#"><ThumbsDown className="mr-2 h-4 w-4" /></a>
					<a href="#" ><Star className="mr-2 h-4 w-4" /></a>
					<a href="#" ><QuestionMarkCircleIcon className="mr-2 h-4 w-4" /></a>
				</div>
				<div className="flex">
					<div className="grid w-full">
						<Label htmlFor="message">Comments</Label>
						<Textarea placeholder="Type your message here." id="message" />
					</div>
					<Button className="align-right m-3 w-20 mt-20">Send</Button>
				</div>
			</div>
			<div className='flex-1 flex flex-col gap-2'>
				<div className='flex justify-end gap-3'>
					<Button className='w-[120px]'>Run</Button>
					<Button className='w-[120px]' variant="destructive">Submit</Button>
				</div>
				<Container className="bg-white min-h-80 border-4">
					<Title4>CODE AREA</Title4>
				</Container>
			</div>
		</Container>
	)
}

export default Page