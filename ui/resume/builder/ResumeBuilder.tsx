import Container from '@/ui/layout/container'
import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {}

const ResumeBuilder = (props: Props) => {
  return (
    <Container className=''>
      <CardHeader>
        <CardTitle>Profile Name</CardTitle>
        <CardDescription>This is how everyone see your name.</CardDescription>
      </CardHeader>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Write Your FullName." />
      
      <Label htmlFor="name">Phone Number</Label>
      <Input id="name" placeholder="Write Your FullName." />

      <Label htmlFor="name">Email</Label>
      <Input type="email" placeholder="Your Email" />
      
    </Container>
  )
}

export default ResumeBuilder