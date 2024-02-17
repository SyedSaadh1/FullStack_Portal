'use client'
import React from 'react'
import Container from './container'
import { Button } from '@/components/ui/button'
import Title3 from '@/components/ui/text/Title3'
import Lead from '@/components/ui/text/Lead'
import Link from "next/link";
import FullstackInstituteLogo from './FullstackInstituteLogo'
import Balancer from 'react-wrap-balancer'
import TextSmall from '@/components/ui/text/TextSmall'

const About = [
  { name: "about us", link: "about-us" },
  { name: "our team", link: "our-team" }
]

const LegalPols = [
  { name: "terms of usage", link: "terms-of-usage" },
  { name: "privacy policy", link: "privacy-policy" },
  { name: "cookie policy", link: "cookie-policy" },
  { name: "code of conduct", link: "code-of-conduct" }
]

const navLinks = [
  { title: 'About us', links: About },
  { title: 'Legal policies', links: LegalPols },

]

type Props = {}

const PageFooter = (props: Props) => {
  return (
    <div className='bg-slate-50'>
      <section className='border-t border-b shadow-sm'>
        <Container className='rounded-lg py-16'>
          <FullstackInstituteLogo />
          <div className='flex justify-between items-center'>
            <div className='flex-1'>

              <Title3>Coding Exercises and Expert Mentorship for All</Title3>
              <Lead className="mt-4">A Fusion of Interactive Learning, Hands-On Practice, and Personalized Mentoring. Experience the Fun and Efficacy of Fullstack Programming.</Lead>

            </div>
            <div className='flex-1 text-right'>
              <Button size="lg" className='h-16 px-16 text-2xl'>Explore courses</Button>
            </div>
          </div>

        </Container>
      </section>
      <section className='bg-muted py-8'>
        <Container className='flex'>
          <div>
            <TextSmall>© Copyright {(new Date()).getFullYear()} Fullstack.Institute - All Rights Reserved.</TextSmall>
          </div>
          <footer className='flex gap-16'>
            {!true && navLinks.map(({ title, links }) => <div key={title} className="bg-neutral text-neutral-content">
              <h6 className="scroll-m-20 text-xl font-semibold tracking-tight pb-3">{title}</h6>
              <ul className='flex flex-col gap-2'>
                {links.map(({ name, link }) => (
                  <li key={link} className='capitalize'>
                    <Link href={`/${link}`} className='hover:text-slate-900 text-slate-600'>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>)}
          </footer>
        </Container>
      </section>
    </div >
  )
}

export default PageFooter