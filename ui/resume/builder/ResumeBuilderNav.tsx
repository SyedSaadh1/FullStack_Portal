'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ResumeBuilderNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export default function ResumeBuilderNav({
	className,
	items,
	...props
}: ResumeBuilderNavProps) {
	const pathname = usePathname();

	return (
		<nav
			className={cn(
				'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
				className
			)}
			{...props}
		>
			{items.map(item => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						pathname === item.href
							? 'bg-muted hover:bg-muted'
							: 'hover:bg-transparent hover:underline',
						'justify-start'
					)}
				>
					{item.title}
				</Link>
			))}
		</nav>
	);
}
