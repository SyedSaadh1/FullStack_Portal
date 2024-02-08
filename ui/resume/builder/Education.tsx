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

const Education = (props: Props) => {
  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader>
        
        <CardTitle>Education Details</CardTitle>
      </CardHeader>
      <Label htmlFor="name">SCC Details</Label>
      <Input id="name" placeholder="Write Your FullName." />
      <DatePicker />

      <Label htmlFor="name">Higher Secondary Certificate</Label>
      <Input id="name" placeholder="Write Your FullName." />
      <DatePicker />
      
      <Label htmlFor="name">Bachelor of Technology</Label>
      <Input id="name" placeholder="Write Your FullName." />
      <DatePicker />

      <Label htmlFor="name">Others</Label>
      <Input id="name" placeholder="Write Your FullName." />
      <DatePicker />
      
    </Container>
  )
}

export default Education