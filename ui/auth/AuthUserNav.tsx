
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { DefaultUser } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface AuthUserNavProps {
  user: DefaultUser
}

export default function AuthUserNav({ user }: AuthUserNavProps) {

  const handleLogout = async () => {
    await signOut();
  }

  const adminUsers = [
    'zakeer579@gmail.com',
    'zakeer@zakeer.me'
  ]

  return (
    <div className="flex items-center gap-4">
      <Button asChild>
        <Link href='/practise'>
          Practise
        </Link>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="border relative h-8 w-8 rounded-full">
            <UserAvatar name={user?.name || ""} avatar={user?.image || ""} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.name || ""}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email || ""}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/resume">Profile</Link>
              {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          {adminUsers.includes(String(user?.email)) && <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/admin">admin</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            Log out
            {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}