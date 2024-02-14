
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
import { Textarea } from '@/components/ui/textarea';

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
      <div className='grid grid-cols-2 gap-4 pb-8'>
        <div className='col-span-1 flex flex-col gap-4'>
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
          <div className='flex flex-col gap-2'>
            <Label>Start Date</Label>
            <DatePicker />
          </div>
          <div className='flex flex-col gap-2'>
            <Label>End Date</Label>
            <DatePicker />
          </div>
        </div>

        <div className='col-span-1'>
          <Label >Description</Label>
          <Textarea />
        </div>

      </div>

      <footer className='flex justify-between'>
        <Link href='/resume/experience'><Button >previous</Button></Link>
        <Link href='/resume/skills'><Button >Next</Button></Link>
      </footer>
    </Container>
  );
}

export default Education;

