import React, { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
	return (
		<div className={`max-w-screen-xl px-6 mx-auto ${className}`}>
			{children}
		</div>
	);
}

export default Container;
