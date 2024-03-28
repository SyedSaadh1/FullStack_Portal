import UserAvatar from './UserAvatar';
import { DefaultUser } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button
} from '@nextui-org/react';

interface AuthUserNavProps {
  user: DefaultUser;
}

export default function AuthUserNav({ user }: AuthUserNavProps) {
	const handleLogout = async () => {
		await signOut();
	};

	return (
		<div className="flex items-center gap-4">
			<Button>
				<Link href="/interview">Interview</Link>
			</Button>

			<Button>
				<Link href="/practise">Practise</Link>
			</Button>

			<Dropdown>
				<DropdownTrigger>
					<Button isIconOnly>
						<UserAvatar name={user?.name || ''} avatar={user?.image || ''} />
					</Button>
				</DropdownTrigger>
				<DropdownMenu>
					<DropdownItem key="1" className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">
								{user?.name || ''} ({user?.id})
							</p>
							<p className="text-xs leading-none text-muted-foreground">
								{user?.email || ''}
							</p>
						</div>
					</DropdownItem>
					<DropdownItem key="2">
						<Link href="/resume">Profile</Link>
						{/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
					</DropdownItem>
					<DropdownItem key="3" onClick={handleLogout}>
            Log out
						{/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}
