'use client'

import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";

import Container from '@/ui/layout/container'
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

import React from 'react'
import { Challenge } from '@/types/challenge.types'
import JSEditor from "./editor/JSEditor";

type Props = {
  challenge: Challenge
}

const ChallengeContainer = ({ challenge }: Props) => {
  return (
    <>
      <Container>
        <PanelGroup direction="horizontal" className="bg-white rounded shadow overflow-hidden">
          <Panel defaultSizePercentage={50} minSizePercentage={20}>
            <Tabs defaultValue="Interaction">
              <TabsList className="bg-slate-300 w-full rounded-none justify-start px-2 py-2 h-10">
                <TabsTrigger className="text-slate-900 text-sm" value="Interaction">Interaction</TabsTrigger>
                <TabsTrigger className="text-slate-900 text-sm" value="Resources">Resources</TabsTrigger>
                <TabsTrigger className="text-slate-900 text-sm" value="Submissions">Submissions</TabsTrigger>
              </TabsList>
              <TabsContent value="Interaction">
                <Instructions challenge={challenge} />
              </TabsContent>
              <TabsContent value="Resources">
                <Resources />
              </TabsContent>
              <TabsContent value="Submissions">
                <Submissions />
              </TabsContent>
            </Tabs>
            <div className="flex items-center gap-2 border-t border-b w-full px-4 h-14">
              <a href="#"><ThumbsUp className="mr-2 h-4 w-4" /></a>
              <a href="#"><ThumbsDown className="mr-2 h-4 w-4" /></a>
              {/* <a href="#" ><Star className="mr-2 h-4 w-4" /></a> */}
              {/* <a href="#" ><QuestionMarkCircleIcon className="mr-2 h-4 w-4" /></a> */}
            </div>
            {/* <div className="flex">
              <div className="grid w-full">
                <Label htmlFor="message">Comments</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
              <Button className="align-right m-3 w-20 mt-20">Send</Button>
            </div> */}
          </Panel>
          <PanelResizeHandle className="border-r-2 bg-slate-200" />
          <Panel defaultSizePercentage={50} minSizePercentage={20} className="flex flex-col">
            {/* <div className='flex bg-slate-500 w-full rounded-none justify-start px-4 items-center h-14'>
              <Title3>Code Area</Title3>
            </div> */}
            <div className="bg-white flex-1 flex flex-col w-full">
              <JSEditor />
            </div>
            <div className='flex justify-end items-center gap-2 border-t border-b w-full px-4 h-14'>
              <Button className='w-[120px]'>Run Tests</Button>
              <Button className='w-[120px]' variant="destructive">Submit</Button>
            </div>
          </Panel>
        </PanelGroup>
      </Container>
    </>
  )
}

export default ChallengeContainer