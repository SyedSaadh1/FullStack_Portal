
import Container from '@/ui/layout/container'
import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DatePicker } from '../dateui/DatePicker'

type Props = {}

const Experience = (props: Props) => {
  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader className=''>
        <CardTitle>Your Experience Details</CardTitle>
      </CardHeader>
      <Label htmlFor="name">Name of Company-1</Label>
      <Input id="name" placeholder="Details." />
      <Label>Your Previous company experience date </Label>
      <DatePicker className='p-2'/>
      <Label htmlFor="name">Name of Company-2</Label>
      <Input id="name" placeholder="Details." />
      <Label>Your Previous company experience date </Label>
      <DatePicker className='p-2'/>
    </Container>
  )
}

export default Experience