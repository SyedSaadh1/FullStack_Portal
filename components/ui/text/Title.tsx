import React, { PropsWithChildren } from 'react'

export default function Title({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl ${className}`}>
      {children}
    </h1>
  )
}

