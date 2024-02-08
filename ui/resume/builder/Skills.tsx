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

const Skills = (props: Props) => {
  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader>
        
        <CardTitle>Your Skills According to your work</CardTitle>
      </CardHeader>
      <Label htmlFor="name">
        professional Skills
      </Label>
      <Input id="name" placeholder="Details" />

      <Label htmlFor="name">
        Advanced Skills
      </Label>
      <Input id="name" placeholder="Details" />

      
    </Container>
  )
}

export default Skills