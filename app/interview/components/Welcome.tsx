import Title from '@/components/ui/text/Title';
import Title3 from '@/components/ui/text/Title3';
import Container from '@/ui/layout/container';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import InputFile from '../uploadresume/uploadresume';

const Welcome = () => {
	return (
		<section className="">
			<Container>
				<div className="grid grid-cols-2 items-center py-4 md:py-8 min-h-[50vh]">
					<div className="flex flex-col gap-8 items-start">
						<Title>
							<Balancer>
                Revolutionize Your{' '}
								<span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
                  Job Application Experience
								</span>
							</Balancer>
						</Title>

						<Title3 className="bg-gradient-to-r from-cyan-500 to-violet-500 inline-block text-white">
              Blend Your Resume with a Personal Touch
						</Title3>
					</div>

					<div className="flex flex-col gap-4 items-center">
						<InputFile />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Welcome;
