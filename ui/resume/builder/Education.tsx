
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

type Props = {};

const Education = (props: Props) => {
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
    <Container className='bg-slate-200 p-16'>
      <CardHeader>
        <CardTitle>Education Details</CardTitle>
      </CardHeader>
      <Label className='flex'>SCC Details</Label>
      <Input
        id="scc"
        placeholder="Write Your FullName."
        value={scc}
        onChange={(e) => setScc(e.target.value)}
      />
      <DatePicker />

      <Label className='flex'>HigherSecondary</Label>
      <Input
        id="higherSecondary"
        placeholder="Write Your FullName."
        value={higherSecondary}
        onChange={(e) => setHigherSecondary(e.target.value)}
      />
      <DatePicker />

      <Label className='flex'>Bachelor</Label>
      <Input
        id="bachelor"
        placeholder="Write Your FullName."
        value={bachelor}
        onChange={(e) => setBachelor(e.target.value)}
      />
      <DatePicker />

      <Label className='flex'>Others</Label>
      <Input
        id="others"
        placeholder="Write Your FullName."
        value={others}
        onChange={(e) => setOthers(e.target.value)}
      />
      <DatePicker />
    </Container>
  );
}

export default Education;

