import React, { PropsWithChildren } from 'react'
import LoaderSpinner from './LoaderSpinner'


const PageInitialLoader = ({ children }: PropsWithChildren) => {
  return (
    <div className='h-svh w-svw relative'>
      {children}
      <div className='w-full h-full flex items-center justify-center absolute top-0 left-0 bg-slate-100 z-50'>
        <LoaderSpinner />
      </div>
    </div>
  )
}

export default PageInitialLoader