import React from 'react';

const Title3 = ({
	children,
	className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
	return (
		<h3 className={`text-2xl font-semibold tracking-tight ${className}`}>
			{children}
		</h3>
	);
};

export default Title3;
