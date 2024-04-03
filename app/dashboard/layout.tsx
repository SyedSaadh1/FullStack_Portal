import Container from '@/ui/layout/container';
import { PropsWithChildren } from 'react';
import DashboardMenu from './DashboardMenu';

export default function DashboardLayout({ children }: PropsWithChildren) {
	return (
		<section className="py-4 md:py-10">
			<Container className="flex flex-col gap-4">
				<DashboardMenu />
				<main className="mt-4">{children}</main>
			</Container>
		</section>
	);
}
