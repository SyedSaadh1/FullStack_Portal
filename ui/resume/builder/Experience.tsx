
"use client";
import Container from '@/ui/layout/container';
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from '../dateui/DatePicker';
import { TextareaDemo } from '../dateui/input';
import { LabelInput } from '@/components/form/LabelInput';
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {};

const Experience = (props: Props) => {

  const fields = [
    { id: 'companyname', label: 'Name of Company', placeholder: 'Company Name' },
    { id: 'Position', label: 'Position', placeholder: 'Details' },
    {id: 'location', label: 'Location Type', placeholder: ''},
  ]
  

  const [company1, setCompany1] = useState('');
  const [company1Date, setCompany1Date] = useState('');
  const [position, setPosition] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    const storedCompany1 = ''; //localStorage.getItem('company1');
    const storedCompany1Date = ''; //localStorage.getItem('company1Date');
    const storedposition = ''; //localStorage.getItem('position')
    const storedresponse = ''; //localStorage.getItem('response')

    if (storedCompany1) {
      setCompany1(storedCompany1)
    };
    if (storedCompany1Date) {
      setCompany1Date(storedCompany1Date)
    };
     if (storedposition) {
      setPosition(storedposition)
     }
     if (storedresponse) {
      setResponse(storedresponse)
     }
  }, []);

  const handleCompany1Change = (e: any) => {
    const value = e.target.value;
    setCompany1(value);
    // localStorage.setItem('company1', value);
  };

  const handleCompany1DateChange = (date: any) => {
    setCompany1Date(date);
    // localStorage.setItem('company1Date', date);
  };

  const handlePosition = (e: any) => {
    const v = e.target.value
    setPosition(v);
    // localStorage.setItem('position', v)
  }

  const handleResponse = (e: any) => {
    const v = e.target.value
    setResponse(v);
    // localStorage.setItem('response', v)
  }

  
  return (
    <Container>
<div className='grid gap-8 md:grid-cols-3 grid-cols-1 pb-8'>
{fields.map(({ id, placeholder, label }) => <LabelInput
          inputProps={{
            id,
            placeholder,
            onChange: handleCompany1Change
          }}
          labelProps={{
            htmlFor: id,
            children: label
          }}
        />)}
        </div>

        <div className='md:col-span-3 col-span-1 flex flex-col gap-2 pb-8'>
        
        <Label >Role And Responsibilities </Label>
        <TextareaDemo  
           //value={position}
           //onChange={handlePosition}
          
         />
        </div>
         <div className='flex gap-2 pb-8'>
         <Label className=' '>Last Date :- 
        <DatePicker
          //value={new Date(company1Date)}
          //onChange={handleCompany1DateChange}
        />
      </Label>

        <Label className=' '>End Date :- 
        <DatePicker
          //value={new Date(company1Date)}
          //onChange={handleCompany1DateChange}
        />
        </Label>
         </div>
       
        <footer className='flex justify-between'>
        <Link  href='/resume/experience'><Button >preview</Button></Link> 
        <Link  href='/resume/education'><Button >Next</Button></Link>
      </footer>
     
        
      </Container>
  );
}

export default Experience;


