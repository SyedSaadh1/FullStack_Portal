"use client"
import Container from '@/ui/layout/container'
import React, { useState, useEffect } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TextareaDemo } from '../dateui/input'

type Props = {}

const Summary = (props: Props) => {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const storedsummary = ''; //localStorage.getItem('summary');
    if (storedsummary) {
      setSummary(storedsummary);
    }
  }, []);

  const handleChange = (e: any) => {
    const newsummary = e.target.value;
    setSummary(newsummary);
    // localStorage.setItem('summary', newsummary);
  }

  return (
    <Container className='bg-slate-200 p-16'>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <Label htmlFor="summary">Information</Label>
      <TextareaDemo
        id="summary"
        placeholder="Write Your Summary."
        value={summary}
        onChange={handleChange}
      />
    </Container>
  )
}

export default Summary;
