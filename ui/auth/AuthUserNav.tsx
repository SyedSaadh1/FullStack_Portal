import { DefaultUser } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar
} from '@nextui-org/react';

interface AuthUserNavProps {
  user: DefaultUser;
}

export default function AuthUserNav({ user }: AuthUserNavProps) {
	const handleLogout = async () => {
		await signOut();
	};

	return (
		<Dropdown>
			<DropdownTrigger>
				<Avatar
					isBordered
					as="button"
					className="transition-transform"
					name={user?.name || ''}
					size="sm"
					src={user?.image || ''}
				/>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem key="profile" className="h-14 gap-2">
					<p className="font-semibold">Signed in as</p>
					<p className="font-semibold">{user?.email || ''}</p>
				</DropdownItem>
				<DropdownItem key="2">
					<Link href="/resume">Profile</Link>
				</DropdownItem>
				<DropdownItem key="3" onClick={handleLogout}>
          Log out
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
