"use client"
import Container from '@/ui/layout/container';
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardHeader, CardTitle } from "@/components/ui/card";

type Props = {};

const Skills = (props: Props) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storename = localStorage.getItem('name');

    if (storename) {
      setName(storename);
    }
  }, [])

   const handleChange = (e: any) => {
    const {id, value} = e.target;
    localStorage.setItem(id, value);
    if (id === 'name') {
      setName(value)
    }
   }

  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader>
        <CardTitle>Your Skills According to your work</CardTitle>
      </CardHeader>
      <Label htmlFor="professionalSkills">
        Professional Skills
      </Label>
      <Input
        id="professionalSkills"
        placeholder="Details"
        value={name}
        onChange={handleChange}
      />

      <Label htmlFor="advancedSkills">
        Advanced Skills
      </Label>
      <Input
        id="advancedSkills"
        placeholder="Details"
        value={name}
        onChange={handleChange}
      />
    </Container>
  );
}

export default Skills;
