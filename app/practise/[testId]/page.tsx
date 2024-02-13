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
import { Star, ThumbsDown, ThumbsDownIcon, ThumbsUp, ThumbsUpIcon } from 'lucide-react'
import { ChartBarIcon, ChatBubbleBottomCenterIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

type Props = {}

const Page = (props: Props) => {
    return (
        <div className="flex m-10 gap-10 justify-center">
            <div className="flex flex-col w-1/3">
                <Tabs defaultValue="Interaction" className="mb-5">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="Interaction">Interaction</TabsTrigger>
                        <TabsTrigger value="Resources">Resources</TabsTrigger>
                        <TabsTrigger value="Submissions">Submissions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Interaction">
                        <Container className="p-5 bg-slate-200 row-span-2 min-h-80 border-4">
                            <Title4>Return the Sum of Two Numbers</Title4>
                            <p>Create a function that takes two numbers as arguments and returns their sum.</p>
                        </Container>
                    </TabsContent>
                    <TabsContent value="Resources">
                        <Container className="p-5 bg-slate-200 row-span-2 min-h-80 border-4">
                            <Title4>Resources</Title4>
                        </Container>
                    </TabsContent>
                    <TabsContent value="Submissions">
                        <Container className="p-5 bg-slate-200 row-span-2 min-h-80 border-4">
                            <Title4>Submissions</Title4>
                        </Container>
                    </TabsContent>
                </Tabs>
                <div className="flex gap-3 p-3">
                    <a href="#"><ThumbsUp className="mr-2 h-4 w-4" /></a>
                    <a href="#"><ThumbsDown className="mr-2 h-4 w-4" /></a>
                    <a href="#" ><ChatBubbleBottomCenterIcon className="mr-2 h-4 w-4" /></a>
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
            <div className='flex flex-col w-1/2 gap-2'>
                <Tabs defaultValue="Run" className="flex gap-5 justify-end">
                    <TabsList className="grid grid-cols-2">
                        <TabsTrigger value="Run">Run</TabsTrigger>
                        <TabsTrigger value="Submit">Submit</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Run">
                        <div></div>
                    </TabsContent>
                    <TabsContent value="Resources">
                        <div></div>
                    </TabsContent>
                </Tabs>
                <Container className="bg-slate-200 min-h-80 border-4">
                    <Title4>CODE AREA</Title4>
                </Container>
            </div>
        </div >
    )
}

export default Page