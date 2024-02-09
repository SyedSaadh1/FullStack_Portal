"use client"
import Container from '@/ui/layout/container';
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardHeader, CardTitle } from "@/components/ui/card";

type Props = {};

const Skills = (props: Props) => {
  const [skills, setSkills] = useState({
    professionalSkills: '',
    advancedSkills: '',
  });

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem('skills') || '{}');
    setSkills(storedSkills);
  }, []);

  const handleChange = (event:any,field:any) => {
    const { value } = event.target;

    if (field === 'professionalSkills') {
      setSkills((prevSkills) => ({
        ...prevSkills,
        professionalSkills: value,
      }));
    } else if (field === 'advancedSkills') {
      setSkills((prevSkills) => ({
        ...prevSkills,
        advancedSkills: value,
      }));
    } 
  };

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

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
        value={skills.professionalSkills}
        onChange={(event) => handleChange('professionalSkills', event)}
      />

      <Label htmlFor="advancedSkills">
        Advanced Skills
      </Label>
      <Input
        id="advancedSkills"
        placeholder="Details"
        value={skills.advancedSkills}
        onChange={(event) => handleChange('advancedSkills', event)}
      />
    </Container>
  );
}

export default Skills;
