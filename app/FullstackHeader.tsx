import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';


export default function FullstackHeader() {
	return (
		<div className='bg-slate-100 flex justify-between items-center px-12'>
			<h1 className="p-4 font-bold">Fullstack Portal</h1>
			<Link href="/login">
				<Button>
					<EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
				</Button>
			</Link>
		</div>
	);
}