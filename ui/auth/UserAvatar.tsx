import { Avatar } from '@nextui-org/react';

interface UserAvatarProps {
  avatar: string;
  name: string;
}

export default function UserAvatar({ name = '', avatar }: UserAvatarProps) {
	const avatarNames = (name || '').split(' ');
	const initials = avatarNames.map(name => name[0]).join('') || '!?';
	return (
		<Avatar
			src={avatar}
			isBordered
			radius="full"
			alt={name}
			fallback={initials}
		></Avatar>
	);
}
