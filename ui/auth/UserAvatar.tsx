import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface UserAvatarProps {
  avatar: string
  name: string
}

export default function UserAvatar({ name = "", avatar }: UserAvatarProps) {
  const avatarNames = (name || "").split(" ");
  const initials = avatarNames.map((name) => name[0]).join("") || "!?";
  return (
    <Avatar>
      <AvatarImage src={avatar} alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
