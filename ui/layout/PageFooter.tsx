'use client'
import React from 'react'
import Container from './container'
import { Button } from '@/components/ui/button'
import Title3 from '@/components/ui/text/Title3'
import Lead from '@/components/ui/text/Lead'
import Link from "next/link";

const About = [
	{ name: "about us", link: "about-us" },
	{ name: "our team", link: "our-team" }
]

const LegalPols = [
	{ name: "terms of usage", link: "terms-of-usage" },
	{ name: "privacy policy", link: "privacy-policy" },
	{ name: "cookie policy", link: "cookie-policy" },
	{ name: "code of conduct", link: "code-of-conduct" }
]

const navLinks = [
	{ title: 'About us', links: About },
	{ title: 'Legal policies', links: LegalPols },

]

type Props = {}

const PageFooter = (props: Props) => {
	return (
		<div className=''>
			<section>
				<Container className='rounded-lg py-16'>
					<div className='flex justify-between items-center'>
						<div className='flex-1'>
							<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight p-8'>Fullstack</h3>
							<Title3>Code practice and mentorship for everyone</Title3>
							<Lead className="mt-4"> Develop fluency in 67 programming languages with our unique blend of learning, practice and mentoring. Exercism is fun, effective and 100% free, forever</Lead>

						</div>
						<div className='flex-1 text-right'>
							<Button size="lg" className='h-16 px-16 text-2xl'>Explore courses</Button>
						</div>
					</div>

				</Container>
			</section>
			<section className='bg-slate-300 py-16'>
				<Container className='flex'>

					<footer className='flex gap-16'>
						{navLinks.map(({ title, links }) => <div key={title} className="bg-neutral text-neutral-content">
							<h6 className="scroll-m-20 text-xl font-semibold tracking-tight pb-3">{title}</h6>
							<ul className='flex flex-col gap-2'>
								{links.map(({ name, link }) => (
									<li key={link}>
										<Link href={`/${link}`}>
											{name}
										</Link>
									</li>
								))}
							</ul>
						</div>)}
					</footer>
				</Container>
			</section>
		</div >
	)
}

export default PageFooter