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

const Summary = (props: Props) => {
  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader>
        
        <CardTitle> Summary</CardTitle>
      </CardHeader>
      <Label htmlFor="name">Information</Label>
      <Input id="name" placeholder="Write Your Summery." />

      
    </Container>
  )
}

export default Summary