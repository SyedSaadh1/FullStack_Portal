  "use client"
  import { CardHeader, Input } from '@fluentui/react-components';
  import { Container } from 'lucide-react';
  import React, { useState, useEffect } from 'react';
  import { DatePicker } from '../dateui/DatePicker';
  import { CardTitle } from '@/components/ui/card';
  import { Label } from '@radix-ui/react-label';

  type Props = {};

  const Experience = (props: Props) => {
    const [company1, setCompany1] = useState('');
    const [company1Date, setCompany1Date] = useState('');
    const [company2, setCompany2] = useState('');
    const [company2Date, setCompany2Date] = useState('');

    useEffect(() => {
      const storedCompany1 = localStorage.getItem('company1');
      const storedCompany1Date = localStorage.getItem('company1Date');
      const storedCompany2 = localStorage.getItem('company2');
      const storedCompany2Date = localStorage.getItem('company2Date');

      if (storedCompany1) {
        setCompany1(storedCompany1)
      };
      if (storedCompany1Date) {
        setCompany1Date(storedCompany1Date)
      };
      if (storedCompany2) {
        setCompany2(storedCompany2)
      };
      if (storedCompany2Date) {
        setCompany2Date(storedCompany2Date)
      };
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

    const handleCompany2Change = (e: any) => {
      const value = e.target.value;
      setCompany2(value);
      localStorage.setItem('company2', value);
    };

    const handleCompany2DateChange = (date: any) => {
      setCompany2Date(date);
      localStorage.setItem('company2Date', date);
    };

    return (
      <Container className='bg-slate-200 p-16'>
        <CardHeader className=''>
          <CardTitle>Your Experience Details</CardTitle>
        </CardHeader>
        <Label htmlFor="company1">Name of Company-1</Label>
        <Input
          id="company1"
          value={company1}
          onChange={handleCompany1Change}
          placeholder="Details."
        />
        <Label>Your Previous company experience date </Label>
        <DatePicker
          className='p-2'
          value={new Date(company1Date)}
          onChange={handleCompany1DateChange}
        />
        <Label htmlFor="company2">Name of Company-2</Label>
        <Input
          id="company2"
          value={company2}
          onChange={handleCompany2Change}
          placeholder="Details."
        />
        <Label>Your Previous company experience date </Label>
        <DatePicker
          className='p-2'
          value={new Date(company2Date)}
          onChange={handleCompany2DateChange}
        />
      </Container>
    );
  }

export default Experience;


/*om 'react';
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
      date: null,
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
      date: null,
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
*/