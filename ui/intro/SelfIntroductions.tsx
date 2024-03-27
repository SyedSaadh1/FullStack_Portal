'use client';
import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Card,
	CardBody,
	CardHeader,
	Divider
} from '@nextui-org/react';
import { SelfIntroduction } from '@/types/user.types';
import Container from '../layout/container';

type Props = {
  introductions: SelfIntroduction[];
  isOpen: boolean;
  onClose?: any;
};

const SelfIntroductions = ({ isOpen, onClose, introductions }: Props) => {
	return (
		<Modal
			size="full"
			isOpen={isOpen}
			onClose={onClose}
			isDismissable={false}
			className="ui-modal-intros"
			scrollBehavior="inside"
			isKeyboardDismissDisabled
		>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							<Container>
								<h2>Self Introductions based on RESUME</h2>
							</Container>
						</ModalHeader>
						<ModalBody className="overflow-hidden overflow-y-auto">
							<Container className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{introductions.map(({ name, content }) => (
									<Card key={name}>
										<CardHeader>
											<h3>{name}</h3>
										</CardHeader>
										<Divider />
										<CardBody>
											{String(content)
												.split('.')
												.map(
													(sentence: string, idx: number) =>
														sentence && (
															<p
																className={`p-1 ${idx > 0}? 'mt-2' : ''`}
																key={idx}
															>
																{sentence}.
															</p>
														)
												)}
										</CardBody>
									</Card>
								))}
							</Container>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
                Close
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default SelfIntroductions;
