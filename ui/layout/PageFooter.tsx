import React from 'react'
import Container from './container'
import { Button } from '@/components/ui/button'
import Title3 from '@/components/ui/text/Title3'
import Lead from '@/components/ui/text/Lead'

type Props = {}

const PageFooter = (props: Props) => {
  return (
    <div className=''>
      <section>
        <Container className='rounded-lg p-16'>


          <div className='flex justify-between items-center'>
            <div className='flex-1'>
              <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight p-8'>Fullstack</h3>
              <Title3>Code practice and mentorship for everyone</Title3>
              <Lead className="mt-4"> Develop fluency in 67 programming languages with our unique blend of learning, practice and mentoring. Exercism is fun, effective and 100% free, forever</Lead>

            </div>
            <div className='flex-1 text-right'>
              <Button size="lg" className='h-16 px-16 text-2xl'>Explore courses</Button>
            </div>
          </div>

        </Container>
      </section>
      <section className='bg-slate-300 py-16'>
        <Container className='flex'>
          <footer className="footer px-10 bg-neutral text-neutral-content">
            <ul>
              <h6 className="scroll-m-20 text-xl font-semibold tracking-tight pb-3">About</h6>
              <li><a className="link link-hover">About Exercism</a></li>
              <li><a className="link link-hover">Our team</a></li>
            </ul>
            </footer>
           <div>
            <ul>
            <h5 className='scroll-m-20 text-xl font-semibold tracking-tight pb-3'>Legal & policies</h5>
              <li><a className="link link-hover">Terms of usage</a></li>
              <li><a className="link link-hover">Privacy policy</a></li>
              <li><a className="link link-hover">Cookie policy</a></li>
              <li><a className="link link-hover">Code of conduct</a></li>
            </ul>
           </div>
         
        </Container>
      </section>
    </div>
  )
}

export default PageFooter