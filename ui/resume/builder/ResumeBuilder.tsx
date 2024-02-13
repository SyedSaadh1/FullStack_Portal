"use client"
import Container from '@/ui/layout/container'
import { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {}

const ResumeBuilder = (props: Props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const storename = ''; //localStorage.getItem('name');
    const storenumber = ''; //localStorage.getItem('phonenumber');
    const storeemail = ''; //localStorage.getItem('email');

    if (storename) {
      setName(storename);
    }
    if (storenumber) {
      setPhoneNumber(storenumber);
    }
    if (storeemail) {
      setEmail(storeemail);
    }
  }, [])

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    // localStorage.setItem(id, value);
    if (id === 'name') {
      setName(value);
    } else if (id === 'phoneNumber') {
      setPhoneNumber(value);
    } else if (id === 'email') {
      setEmail(value);
    }
  }

  return (
    <Container className=''>
      <CardHeader>
        <CardTitle>Profile Name</CardTitle>
        <CardDescription>This is how everyone sees your name.</CardDescription>
      </CardHeader>
      
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        value={name}
        placeholder="Write Your FullName."
        onChange={handleChange}
      />
      
      <Label htmlFor="phoneNumber">Phone Number</Label>
      <Input
        id="phoneNumber"
        value={phoneNumber}
        placeholder="Write Your Phone Number."
        onChange={handleChange}
      />

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        value={email}
        placeholder="Your Email"
        onChange={handleChange}
      />
    </Container>
  )
}

export default ResumeBuilder;
