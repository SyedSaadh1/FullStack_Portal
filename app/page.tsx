import HomePageCourses from '@/ui/courses/HomePageCourses';
import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading
} from '@/components/ui/page-header';
import Balancer from 'react-wrap-balancer';
import Title from '@/components/ui/text/Title';
import Container from '@/ui/layout/container';

export default async function Home() {
	return (
		<div>
			<section className="">
				<PageHeader className="grid md:grid-cols-2 grid-cols-1 gap-4">
					<div className="">
						<PageHeaderHeading className="text-left">
							<Balancer>Elevate Your Full Stack Development Journey</Balancer>
						</PageHeaderHeading>

						<PageHeaderDescription className="mt-4 text-left">
              Master Programming Excellence with a Blend of Learning, Practice,
              and Expert Guidance
						</PageHeaderDescription>
					</div>
					<div className="mix-blend-multiply">
						<img src={'/images/Elevate-Your-FullStack.svg'} alt="FullStack" />
					</div>
				</PageHeader>
			</section>

			<section className="text-center bg-white z-10 relative pt-24  border-white border-t-2">
				<Container>
					<Title>
						<Balancer>
              Dive into Web Programming Languages and Achieve Fluency
						</Balancer>
					</Title>

					<HomePageCourses />
				</Container>

				<div
					className="opacity-40 absolute bg-cover bg-center top-0 left-0 -z-10 w-full h-full mix-blend-multiply"
					style={{
						backgroundImage:
              'url(/images/dive-into-web-programming-languages.svg)'
					}}
				/>
			</section>
			{/* <JSONViewer value={data} /> */}
			{/* <ExploreTabs tabs={TAB_VIEW} /> */}
		</div>
	);
}
