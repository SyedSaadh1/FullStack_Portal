import Container from '@/ui/layout/container';
import ResumeBuilderNav from '@/ui/resume/builder/ResumeBuilderNav';
import { Card, CardBody, Divider } from '@nextui-org/react';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'Forms',
	description: 'Advanced form example using react-hook-form and Zod.'
};

const sidebarNavItems = [
	{
		title: 'Personal Info ',
		href: '/resume'
	},
	{
		title: 'Experience',
		href: '/resume/experience'
	},
	{
		title: 'Education ',
		href: '/resume/education'
	},
	{
		title: 'Skills',
		href: '/resume/skills'
	},
	{
		title: 'Preview',
		href: '/resume/preview'
	}
];

export default function SettingsLayout({ children }: PropsWithChildren) {
	return (
		<Container>
			<Card>
				<CardBody>
					<div className="space-y-6 p-10 pb-16 md:block">
						<div className="space-y-0.5">
							<h2 className="text-2xl font-bold tracking-tight">Settings</h2>
							<p className="text-muted-foreground">
                Manage your account settings and set e-mail preferences.
							</p>
						</div>
						<Divider />
						<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
							<aside className="-mx-4 lg:w-1/5">
								<ResumeBuilderNav items={sidebarNavItems} />
							</aside>
							<div className="flex-1">{children}</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</Container>
	);
}
