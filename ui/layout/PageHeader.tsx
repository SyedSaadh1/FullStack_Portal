import React from 'react';
import FullstackInstituteLogo from './FullstackInstituteLogo';
// import Container from './container';
// import PageNavigationMenu from './PageNavigationMenu';
// import { Course } from '@/types/course.types';
// import courseController from '@/controllers/course.controller';
import AuthUser from '../auth/AuthUser';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react';
import { DefaultUser, getServerSession } from 'next-auth';
import Link from 'next/link';
import NavigationController from '@/modules/internal/user/navigation/NavigationController';

async function PageHeader() {
	const session = await getServerSession();
	const navigation = await NavigationController.getNavigation();

	return (
		<Navbar maxWidth="xl">
			<NavbarBrand>
				<FullstackInstituteLogo />
			</NavbarBrand>
			<NavbarContent justify="end">
				{navigation.map(nav => (
					<NavbarItem key={nav.path}>
						<Link href={nav.path} className="hover:underline">
							{nav.label}
						</Link>
					</NavbarItem>
				))}
				<AuthUser user={session?.user as DefaultUser} />
			</NavbarContent>
		</Navbar>
	);
}

export default PageHeader;
