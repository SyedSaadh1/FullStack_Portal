import React from 'react';
export default function Title4({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h4 className={`text-xl font-semibold tracking-tight ${className}`}>
      {children}
    </h4>
  )
}