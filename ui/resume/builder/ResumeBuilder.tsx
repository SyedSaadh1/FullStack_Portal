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
import { LabelInput } from '@/components/form/LabelInput'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


type Props = {}

const fields = [
  { id: 'name', label: 'Name', placeholder: 'Write your fullname' },
  { id: 'phonenumber', label: 'Phone number', placeholder: 'Phone number' },
  { id: 'email', label: 'Email', placeholder: 'Write your email' },
]

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
      <div className='grid gap-8 md:grid-cols-3 grid-cols-1'>
        {fields.map(({ id, placeholder, label }) => <LabelInput
          inputProps={{
            id,
            placeholder,
            onChange: handleChange
          }}
          labelProps={{
            htmlFor: id,
            children: label
          }}
        />)}

        <div className='md:col-span-3 col-span-1 flex flex-col gap-2'>
          <Label htmlFor="summary">Information</Label>
          <Textarea
            id="summary"
            placeholder="Write Your Summary."
            onChange={handleChange}
          />
        </div>
      </div>

      <footer className='text-right mt-8'>
        <Link  href='/resume/experience'><Button>Next</Button></Link> 
      </footer>

    </Container>

  )
}

export default ResumeBuilder;
