import React from 'react'

import Link from 'next/link';
import Title3 from '@/components/ui/text/Title3';
import TextSmall from '@/components/ui/text/TextSmall';


function FullstackInstituteLogo({ className }: { className?: string }) {
  return (
    <Link href='/' className={`py-4 inline-flex flex-col items-end ${className}`} >
      <Title3 className='bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent inline-block'>Fullstack.Institute</Title3>
      <TextSmall className='text-xs'>Beta</TextSmall>
    </Link>
  )
}

export default FullstackInstituteLogo