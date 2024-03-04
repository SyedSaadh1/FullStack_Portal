// app/admin/[[...nextadmin]]/page.tsx
import { NextAdmin } from '@premieroctet/next-admin';
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter';
import { prisma } from '@/prisma';
import { submitFormAction } from '../actions/nextadmin';
import { options } from '../admin.options';

import schema from '../../../prisma/json-schema/json-schema.json';
import '@premieroctet/next-admin/dist/styles.css';
export default async function AdminPage({
	params,
	searchParams
}: {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | string[] | undefined } | undefined;
}) {
	const props = await getPropsFromParams({
		params: params.nextadmin,
		searchParams,
		options: options,
		prisma,
		schema,
		action: submitFormAction
	});

	return (
		<div className="w-screen h-screen bg-white fixed top-0 left-0 z-50">
			<NextAdmin {...props} />;
		</div>
	);
}
