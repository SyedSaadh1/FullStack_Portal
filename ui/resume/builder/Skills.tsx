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


type Props = {};

const Skills = (props: Props) => {

  const fields = [
    { id: 'professionalSkills', label: 'Professional Skills', placeholder: 'Details' },
    { id: 'advancedSkills', label: 'Advanced Skills', placeholder: 'Details' },
    
  ]

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
       <div className='grid gap-8 md:grid-cols-2 grid-cols-1 pb-5'>
         {fields.map(({ id, placeholder, label }) => <LabelInput
          inputProps={{
            id,
            placeholder,
            //onChange: handleChange1
          }}
          labelProps={{
            htmlFor: id,
            children: label
          }}
        />)}
  </div>


    {/*  
      <Label htmlFor="professionalSkills">
        Professional Skills
      </Label>
      <TextareaDemo
        id="professionalSkills"
        value={skills1}
        onChange={handleChange1}
      />

      <Label htmlFor="advancedSkills">
        Advanced Skills
      </Label>
      <TextareaDemo
        id="advancedSkills"
        value={skills2}
        onChange={handleChange2}
      />
        */}

<footer className='flex justify-between'>
        <Link  href='/resume/education'><Button >preview</Button></Link> 
        <Link  href='/resume'><Button >Next</Button></Link>
      </footer>
     

    </Container>
  );
}

export default Skills;
