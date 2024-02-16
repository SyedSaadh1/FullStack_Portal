import React, { PropsWithChildren } from 'react'

const Lead = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
	return (
		<p className={`text-xl text-muted-foreground ${className}`}>
			{children}
		</p>
	)
}

export default Lead

