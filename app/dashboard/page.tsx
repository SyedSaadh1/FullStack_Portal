import Container from '@/ui/layout/container';
import { Button } from '@nextui-org/react';
import React from 'react';

type Props = {};

const Dashboard = (_: Props) => {
	return (
		<section className="bg-slate-100 rounded-xl shadow-inner">
			<Container className="py-6 text-center max-w-screen-xl">
				<h3 className="text-5xl font-bold text-center py-8 p-4 border-b-2 border-dashed border-gray-300">
          Ready to Begin Your Adventure?
				</h3>

				<div className="py-10 border-b-2 border-dashed border-gray-300">
					<p className="max-w-4xl mx-auto text-xl">
            Unlock the door to endless possibilities and growth. Browse through
            our diverse programs and select the course that sparks your
            interest. Your journey to mastery and success starts on this
            dashboard.
					</p>
				</div>

				<div className="grid grid-cols-3">
					<div />
					<div className="flex gap-2 py-10 px-5 border-x-2 border-dashed border-gray-300">
						<Button
							size="lg"
							className="flex-1 max-w-4xl font-bold"
							variant="ghost"
						>
              Explore Courses
						</Button>
						<Button
							size="lg"
							className="flex-1 max-w-4xl font-bold"
							variant="shadow"
							color="primary"
						>
              Explore Programs
						</Button>
					</div>
					<div />
				</div>
			</Container>
		</section>
	);
};

export default Dashboard;
