'use client';
import React, { useCallback, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Container from '../layout/container';
import { Tabs, Tab } from '@nextui-org/react';

const EXPLORE_PARAM = 'explore';
const TABS = ['programs', 'courses', 'topics'];

const ExploreTabs = ({ tabs }: any) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const exploreParam = searchParams.get(EXPLORE_PARAM) || TABS[0];

	const updateURL = useCallback(
		(newParam: string) => {
			const newSearchParams = new URLSearchParams(searchParams);
			newSearchParams.set(EXPLORE_PARAM, newParam);
			router.push(`${pathname}?${newSearchParams.toString()}`);
		},
		[router, pathname, searchParams]
	);

	// const onTabSelect = useCallback((_: any, data: SelectTabData) => {
	// 	updateURL(data.value as string);
	// }, [updateURL]);

	useEffect(() => {
		if (!searchParams.has(EXPLORE_PARAM)) {
			updateURL(TABS[0]);
		}
	}, [searchParams, updateURL]);

	return (
		<>
			<div>
				<Container>
					<h1>Explore</h1>
					<Tabs
						color="primary"
						variant="underlined"
						classNames={{
							tabList:
                'gap-6 w-full relative rounded-none p-0 border-b border-divider',
							cursor: 'w-full bg-[#22d3ee]',
							tab: 'max-w-fit px-0 h-12',
							tabContent: 'group-data-[selected=true]:text-[#06b6d4]'
						}}
					>
						{TABS.map(tab => (
							<Tab key={tab} title={<h2>{tab}</h2>} />
						))}
					</Tabs>
				</Container>
			</div>
			{tabs[exploreParam]}
		</>
	);
};

export default ExploreTabs;
