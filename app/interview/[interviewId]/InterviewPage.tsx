'use client';
import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	useDisclosure,
	Card,
	CardBody,
	Chip
} from '@nextui-org/react';
// import JSONViewer from '@/ui/common/JSONViewer';
import Title4 from '@/components/ui/text/Title4';
import { Question } from '@prisma/client';

type Props = {
  interview: any;
};

const InterviewPage = ({ interview }: Props) => {
	const { isOpen, onClose } = useDisclosure({ isOpen: true });

	const { stack, questions = [] } = interview || {};
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
						<ModalHeader className="flex flex-col gap-1">
							{stack?.type} - {stack?.stackName}
						</ModalHeader>
						<ModalBody>
							{/* <JSONViewer value={interview} /> */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{questions.map((question: Question) => (
									<Card key={question.id}>
										<CardBody>
											<Title4>{question?.text}</Title4>
											<Chip color="primary">{question?.questionType}</Chip>
										</CardBody>
									</Card>
								))}
							</div>
						</ModalBody>
						{/* <ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Close
							</Button>
							<Button color="primary" onPress={onClose}>
								Action
							</Button>
						</ModalFooter> */}
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default InterviewPage;
