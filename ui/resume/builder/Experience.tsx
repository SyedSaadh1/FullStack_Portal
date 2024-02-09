"use client"
import Container from '@/ui/layout/container';
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from '../dateui/DatePicker';

type Props = {};

const Experience = (props: Props) => {
  const [company1, setCompany1] = useState({
    name: '',
    date: null,
  });

  const [company2, setCompany2] = useState({
    name: '',
    date: null,
  });

  const handleCompany1Change = (event: any) => {
    setCompany1({
      ...company1,
      name: event.target.value,
    });
  };

  const handleCompany1DateChange = (date: Date | null) => {
    setCompany1({
      ...company1,
      date: date,
    });
  };

  const handleCompany2Change = (event: any) => {
    setCompany2({
      ...company2,
      name: event.target.value,
    });
  };

  const handleCompany2DateChange = (date: Date | null) => {
    setCompany2({
      ...company2,
      date: date,
    });
  };

  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader className=''>
        <CardTitle>Your Experience Details</CardTitle>
      </CardHeader>
      <Label htmlFor="company1">Name of Company-1</Label>
      <Input
        id="company1"
        placeholder="Details."
        value={company1.name}
        onChange={handleCompany1Change}
      />
      <Label>Your Previous company experience date </Label>
      <DatePicker
        className='p-2'
        selected={company1.date}
        onChange={handleCompany1DateChange}
      />
      <Label htmlFor="company2">Name of Company-2</Label>
      <Input
        id="company2"
        placeholder="Details."
        value={company2.name}
        onChange={handleCompany2Change}
      />
      <Label>Your Previous company experience date </Label>
      <DatePicker
        className='p-2'
        selected={company2.date}
        onChange={handleCompany2DateChange}
      />
    </Container>
  );
}

export default Experience;
