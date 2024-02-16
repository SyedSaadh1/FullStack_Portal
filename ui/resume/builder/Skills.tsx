"use client"
import Container from '@/ui/layout/container';
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { TextareaDemo } from '../dateui/input';
import { LabelInput } from '@/components/form/LabelInput';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '../dateui/DatePicker';


type Props = {};

const Skills = (props: Props) => {

  const [skills1, setSkills1] = useState('');
  const [skills2, setSkills2] = useState('');

  useEffect(() => {
    const storeskills1 = ''; //localStorage.getItem('skills1');
    const storeskills2 = ''; //localStorage.getItem('skills2')

    if (storeskills1) {
      setSkills1(storeskills1);
    }
    if (storeskills2) {
      setSkills2(storeskills2)
    }
  }, [])

  
   const handleChange1 = (e: any) => {
    const skills = e.target.value;
    setSkills1(skills);
    // localStorage.setItem('skills1', skills)
   }

 
   const handleChange2 = (e: any) => {
    const skills = e.target.value;
    setSkills2(skills);
    // localStorage.setItem('skills2', skills)
   }
  
  return (
    <Container>
  
<div className='grid grid-cols-2 gap-16 pb-8'>
  <div className='flex flex-col gap-2'>
            <Label>Advance Skills </Label>
            <Textarea />
          </div>
          <div className='flex flex-col gap-2'>
            <Label>Professional Skills</Label>
            <Textarea />
          </div>
     </div> 


<footer className='flex justify-between'>
        <Link  href='/resume/education'><Button >previous</Button></Link> 
        <Link  href='/resume'><Button >Next</Button></Link>
      </footer>
     

    </Container>
  );
}

export default Skills;
