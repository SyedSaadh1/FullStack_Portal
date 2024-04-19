'use client';
import React, { useMemo, useState } from 'react';
import {
	Modal,
	ModalContent,
	ModalBody,
	useDisclosure,
	Chip,
	Button
} from '@nextui-org/react';
// import JSONViewer from '@/ui/common/JSONViewer';
import { MicrophoneIcon } from '@heroicons/react/24/outline';
import Title3 from '@/components/ui/text/Title3';
import Container from '@/ui/layout/container';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import {
	SandpackCodeEditor,
	SandpackLayout,
	SandpackProvider
} from '@codesandbox/sandpack-react';

// @ts-ignore
import { SandpackFileExplorer } from 'sandpack-file-explorer';

type Props = {
  interview: any;
};

const InterviewPage = ({ interview }: Props) => {
	const { isOpen, onClose } = useDisclosure({ isOpen: true });
	const { stack, questions = [] } = interview || {};
	const duration = useMemo(() => {
		return questions.reduce(
			(prev: number, curr: any) => prev + parseInt(curr?.duration),
			0
		);
	}, [questions]);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const question = questions[currentQuestion];

	return (
		<Modal
			hideCloseButton
			size="full"
			isOpen={isOpen}
			onClose={onClose}
			isDismissable={false}
			isKeyboardDismissDisabled={true}
		>
			<ModalContent>
				{_ => (
					<>
						<ModalBody className="p-0">
							<div className="flex flex-col">
								<header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
									<div className="flex items-center gap-4">
										<p className="flex items-center gap-2 font-semibold">
											{stack?.type} - {stack?.stackName} Interview
											<Chip>({duration} Mins)</Chip>
										</p>
									</div>
									<div className="flex items-center gap-4">
										<Link href="./">
											<Button color="danger">End Interview</Button>
										</Link>
									</div>
								</header>
								<Container className="py-4 md:py-8 w-full">
									<Title3 className="">
										<Balancer>{question?.text}</Balancer>
									</Title3>
									{question?.questionType === 'TEXT' && (
										<div className="flex flex-col gap-4 items-center border-1 bg-slate-50 rounded py-16 md:py-32 my-4 w-full">
											<Button variant="shadow">
												<MicrophoneIcon className="h-4 w-4 mr-2" />
                        Record Answer
											</Button>
											<p>Click the button to start recording your answer.</p>
										</div>
									)}

									{question?.questionType === 'CODE_CHALLENGE' && (
										<div className="border-1 bg-slate-50 rounded my-4 w-full">
											<SandpackProvider
												template={
													stack?.stackName === 'JavaScript' ? 'static' : 'react'
												}
											>
												<SandpackLayout>
													<SandpackFileExplorer />
													<SandpackCodeEditor closableTabs showLineNumbers />
												</SandpackLayout>
											</SandpackProvider>
										</div>
									)}
									<div className="flex justify-end gap-4">
										<p className="mr-auto">
                      Showing Question {currentQuestion + 1} of{' '}
											{questions?.length}
										</p>
										{currentQuestion > 0 && (
											<Button
												color="default"
												onPress={() => setCurrentQuestion(currentQuestion - 1)}
											>
                        Previous
											</Button>
										)}
										{currentQuestion < questions?.length - 1 && (
											<Button
												color="primary"
												onPress={() => setCurrentQuestion(currentQuestion + 1)}
											>
                        Next
											</Button>
										)}
									</div>
									{/* <JSONViewer value={interview} /> */}
								</Container>
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default InterviewPage;
