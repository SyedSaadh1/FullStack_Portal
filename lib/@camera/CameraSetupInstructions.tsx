import TextSmall from '@/components/ui/text/TextSmall';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import React from 'react';

const CameraSetupInstructions = () => {
	return (
		<Card className="max-w-md mx-auto shadow-md">
			<CardHeader className="border-b text-center py-4">
				<h2 className="text-xl font-semibold">Camera Setup Instructions</h2>
				<TextSmall className="text-gray-500">
          Follow these tips for the best recording experience:
				</TextSmall>
			</CardHeader>
			<CardBody>
				<ul className="space-y-6 mt-4">
					<li className="flex items-center">
						<span className="flex-shrink-0">
							{/* Placeholder for an icon, e.g., lighting */}
							{/* You can replace these with actual icons */}
							<div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
								<span className="font-semibold">L</span>
							</div>
						</span>
						<p className="ml-3 text-slate-500">
              Ensure you arre in a well-lit area, but avoid backlighting (e.g.,
              do not sit with your back to a window).
						</p>
					</li>
					<li className="flex items-center">
						<span className="flex-shrink-0">
							{/* Placeholder for an icon, e.g., camera level */}
							<div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
								<span className="font-semibold">C</span>
							</div>
						</span>
						<p className="ml-3 text-slate-500">
              Position your camera at eye level for the best angle. Use books or
              a stand to adjust the height if necessary.
						</p>
					</li>
					<li className="flex items-center">
						<span className="flex-shrink-0">
							{/* Placeholder for an icon, e.g., microphone check */}
							<div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
								<span className="font-semibold">M</span>
							</div>
						</span>
						<p className="ml-3 text-slate-500">
              Test your microphone beforehand to ensure your audio is clear
              without any disturbances.
						</p>
					</li>
					<li className="flex items-center">
						<span className="flex-shrink-0">
							{/* Placeholder for an icon, e.g., quiet environment */}
							<div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
								<span className="font-semibold">Q</span>
							</div>
						</span>
						<p className="ml-3 text-slate-500">
              Choose a quiet environment to avoid background noise. Inform
              others that you will be recording.
						</p>
					</li>
				</ul>
			</CardBody>
		</Card>
	);
};

export default CameraSetupInstructions;
