'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { Course } from '@/types/course.types';

interface PageNavigationMenuProps {
  courses: Course[];
}

export default function PageNavigationMenu({
	courses
}: PageNavigationMenuProps) {
	return (
		<NavigationMenu className="mr-auto">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Programs</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
							<Link href="/fullstack">
								<ListItem href="" title="FullStack development">
                  someone who can work on both the back-end and front-end of
                  systems
								</ListItem>
							</Link>
							<Link href="/frontent">
								<ListItem href="/" title="Frontend development">
                  creates websites and applications using web languages such as
                  HTML, CSS, and JavaScript that allow users to access and
                  interact with the site or app
								</ListItem>
							</Link>
							<ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Courses</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{courses.map(course => (
								<Link key={course.id} href={course.url || '/'}>
									<ListItem
										key={course.name}
										title={course.name}
										href={course.id}
									>
										{course.description}
									</ListItem>
								</Link>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{/* <NavigationMenuItem>
          <Link href="/resume" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resume
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
