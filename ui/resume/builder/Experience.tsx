
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

type Props = {};

const Experience = (props: Props) => {
  const [company1, setCompany1] = useState('');
  const [company1Date, setCompany1Date] = useState('');
  const [position, setPosition] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    const storedCompany1 = localStorage.getItem('company1');
    const storedCompany1Date = localStorage.getItem('company1Date');
    const storedposition = localStorage.getItem('position')
    const storedresponse = localStorage.getItem('response')

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
    localStorage.setItem('company1', value);
  };

  const handleCompany1DateChange = (date: any) => {
    setCompany1Date(date);
    localStorage.setItem('company1Date', date);
  };

  const handlePosition = (e: any) => {
    const v = e.target.value
    setPosition(v)
    localStorage.setItem('position', v)
  }

  const handleResponse = (e: any) => {
    const v = e.target.value
    setResponse(v)
    localStorage.setItem('response', v)
  }

  
  return (
    <Container className='bg-slate-200 p-16'>
        <CardHeader>
          <CardTitle>Your Experience Details</CardTitle>
        </CardHeader>
        <Label htmlFor="company1" className=''>Name of Company</Label>
        <Input
          id="company1"
          value={company1}
          onChange={handleCompany1Change}
          placeholder="Details."
          className=''
        />
         <Label >Your Position In Last Company </Label>
        <TextareaDemo  
           id='position'
           value={position}
           onChange={handlePosition}
        />
        <Label className='flex '>Last Date :- </Label>
        <DatePicker
          value={new Date(company1Date)}
          onChange={handleCompany1DateChange}
        />
        <Label className='flex '>End Date :- </Label>
        <DatePicker
          value={new Date(company1Date)}
          onChange={handleCompany1DateChange}
        />

     <Label className='flex'>Roles And Response </Label>
     <TextareaDemo
          id='rolesAndResponse'
          value={response}
          onChange={handleResponse}
     />
          
        
      </Container>
  );
}

export default Experience;


