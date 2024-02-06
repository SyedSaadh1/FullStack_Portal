import React, { PropsWithChildren } from 'react'

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container