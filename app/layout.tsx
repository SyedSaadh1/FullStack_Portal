import React from 'react';
import PageHeader from '@/ui/layout/PageHeader';
import FluentUIProvider from './FluentUIProvider';
import NextAuthProvider from './NextAuthProvider';
import './tailwind.css';

import { Metadata } from 'next';
import PageFooter from '@/ui/layout/PageFooter';

export const metadata: Metadata = {
	title: 'Fullstack Institute | Elevate Your Development Journey',
	description:
    'Master full stack development with hands-on training, expert guidance, and real-world projects. Become a highly skilled programmer.',
	keywords:
    'full stack development, programming, web development, JavaScript, React, Node.js, institute, training'
};

export default function RootLayout({
	children
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="theme-day bg">
				<FluentUIProvider>
					<NextAuthProvider>
						<main className="bg">
							<PageHeader />
							{children}
							<PageFooter />
						</main>
					</NextAuthProvider>
				</FluentUIProvider>
			</body>
		</html>
	);
}
