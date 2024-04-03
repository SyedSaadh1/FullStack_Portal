'use client';
import NavigationController from '@/modules/internal/user/navigation/NavigationController';
import { Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {};

const DashboardMenu = (_: Props) => {
	const pathname = usePathname();
	const menu = NavigationController.userDashboardNavigation();

	return (
		<Tabs aria-label="Options" selectedKey={pathname}>
			{menu.map(({ path, label }) => (
				<Tab
					key={path}
					title={
						<Link className="block w-full" href={path}>
							{label}
						</Link>
					}
				></Tab>
			))}
		</Tabs>
	);
};

export default DashboardMenu;
