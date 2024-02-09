"use client"
import Container from '@/ui/layout/container';
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from '../dateui/DatePicker';

type Props = {};

const Education = (props: Props) => {
  const [educationDetails, setEducationDetails] = useState({
    scc: { name: '', date: null },
    higherSecondary: { name: '', date: null },
    bachelor: { name: '', date: null },
    others: { name: '', date: null },
  });

  useEffect(() => {
    const storedEducationDetails = JSON.parse(localStorage.getItem('educationDetails') || '{}');
    setEducationDetails(storedEducationDetails);
  }, []);

  const handleChange = (category, event) => {
    const { value } = event.target;
    setEducationDetails((prevDetails) => ({
      ...prevDetails,
      [category]: {
        ...prevDetails[category],
        name: value,
      },
    }));
  };

  const handleDateChange = (category, date) => {
    setEducationDetails((prevDetails) => ({
      ...prevDetails,
      [category]: {
        ...prevDetails[category],
        date,
      },
    }));
  };

  useEffect(() => {
    localStorage.setItem('educationDetails', JSON.stringify(educationDetails));
  }, [educationDetails]);

  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader>
        <CardTitle>Education Details</CardTitle>
      </CardHeader>
      <Label htmlFor="scc">SCC Details</Label>
      <Input
        id="scc"
        placeholder="Write Your FullName."
        value={educationDetails.scc.name}
        onChange={(event) => handleChange('scc', event)}
      />
      <DatePicker
        selected={educationDetails.scc.date}
        onChange={(date) => handleDateChange('scc', date)}
      />

<Label htmlFor="higherSecondary">HigherSecondary</Label>
      <Input
        id="higherSecondary"
        placeholder="Write Your FullName."
        value={educationDetails.higherSecondary.name}
        onChange={(event) => handleChange('higherSecondary', event)}
      />
      <DatePicker
        selected={educationDetails.higherSecondary.date}
        onChange={(date) => handleDateChange('higherSecondary', date)}
      />

      
<Label htmlFor="bachelor">Bachelor</Label>
      <Input
        id="bachelor"
        placeholder="Write Your FullName."
        value={educationDetails.bachelor.name}
        onChange={(event) => handleChange('bachelor', event)}
      />
      <DatePicker
        selected={educationDetails.bachelor.date}
        onChange={(date) => handleDateChange('bachelor', date)}
      />

<Label htmlFor="others">Others</Label>
      <Input
        id="others"
        placeholder="Write Your FullName."
        value={educationDetails.others.name}
        onChange={(event) => handleChange('others', event)}
      />
      <DatePicker
        selected={educationDetails.others.date}
        onChange={(date) => handleDateChange('others', date)}
      />

    </Container>
  );
}

export default Education;
