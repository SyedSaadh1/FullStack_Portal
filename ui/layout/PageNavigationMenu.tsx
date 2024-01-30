"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Advanced HTML, CSS, and JavaScript",
    href: "/htmlandcss",
    description:
      "Explore advanced HTML, CSS, and JavaScript techniques, including responsive design, Flexbox, Grid, and AJAX for dynamic, interactive web development.",
  },
  {
    title: "Introduction to ExpressJs",
    href: "/expressjs",
    description:
      "Master data manipulation in NodeJS: database connections, API building with Express, MySQL, and relational data handling.",
  },
  {
    title: "Introduction to ReactJS",
    href: "/reactjs",
    description:
      "Learn ReactJS fundamentals: components, props, state, and building applications in this introductory course.",
  },
  {
    title: "Introduction to Material UI",
    href: "/materialui",
    description: "Explore Material UI fundamentals, integration with React, and crafting custom themes/layouts in this dynamic course.",
  },
  {
    title: "Introduction to NextJS",
    href: "/nextjs",
    description:
      "Master NextJS essentials: project setup, routing, data integration, SSR, deployment, and optimization in this comprehensive course.",
  },
  {
    title: "Introduction to NodeJS",
    href: "/nodejs",
    description:
      "Master NodeJS essentials: environment setup, modules, NPM, and server creation in this foundational course.",
  },
]

export default function PageNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <Link href="/fullstack">
                <ListItem href="" title="FullStack development">
                  someone who can work on both the back-end and front-end of systems
                </ListItem>
              </Link>
              <Link href="/frontent">
                <ListItem href="/" title="Frontend development">
                  creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app
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
              {components.map((component) => (
                <Link href={component.href}>
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
  )
})
ListItem.displayName = "ListItem"
