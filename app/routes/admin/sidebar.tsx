import type { LoaderFunctionArgs } from "@vercel/remix";
import { NavLink } from "@remix-run/react";
import UI from '@material-tailwind/react';

const { List, ListItem, Card } = UI

export async function loader({
  request,
}: LoaderFunctionArgs) {

  return {}
}


export default function Sidebar() {

  const navLinks = [
    { to: 'dashboard', text: 'Dashboard' },
    { to: 'users', text: 'Users' },
    { to: 'roles', text: 'Roles' },
    { to: 'courses', text: 'Courses' },
  ]

  return (
    <Card className="max-w-xs flex-1">
      <List>
        {navLinks.map(((nav, key) => <NavLink key={key} to={`/admin/${nav.to}`}>
          {({ isActive }) => (
            <ListItem selected={isActive}>{nav.text}</ListItem>
          )}
        </NavLink>))}
      </List>
    </Card>
  );
}