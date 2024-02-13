
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
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LabelInput } from '@/components/form/LabelInput';
import { TextareaDemo } from '../dateui/input';

type Props = {};

const Education = (props: Props) => {

  const fields = [
    { id: 'school', label: 'Schooling', placeholder: 'Details' },
    { id: 'degree', label: 'Degree', placeholder: 'Details' },
    
  ]


  const [scc, setScc] = useState(() => '');
  const [higherSecondary, setHigherSecondary] = useState(() => '');
  const [bachelor, setBachelor] = useState(() => '');
  const [others, setOthers] = useState(() => '');

  useEffect(() => {
    // localStorage.setItem('scc', scc);
  }, [scc]);

  useEffect(() => {
    // localStorage.setItem('higherSecondary', higherSecondary);
  }, [higherSecondary]);

  useEffect(() => {
    // localStorage.setItem('bachelor', bachelor);
  }, [bachelor]);

  useEffect(() => {
    // localStorage.setItem('others', others);
  }, [others]);

  return (
    <Container>
      <div className='grid gap-8 md:grid-cols-2 grid-cols-1 pb-5'>
         {fields.map(({ id, placeholder, label }) => <LabelInput
          inputProps={{
            id,
            placeholder,
            //onChange: handleChange
          }}
          labelProps={{
            htmlFor: id,
            children: label
          }}
        />)}
  </div>
  <div className='pb-10'>
  <Label className=' '>Last Date</Label>
  <DatePicker/>
 <Label className=' '>End Date</Label>
 <DatePicker/>
  </div>
  <div className='md:col-span-3 col-span-1 flex flex-col gap-2 pb-8'>
        
        <Label >Description</Label>
        <TextareaDemo  
           //value={position}
           //onChange={handlePosition}
         />
        </div>


      <footer className='flex justify-between'>
        <Link  href='/resume/experience'><Button >preview</Button></Link> 
        <Link  href='/resume/skills'><Button >Next</Button></Link>
      </footer>
    </Container>
  );
}

export default Education;

