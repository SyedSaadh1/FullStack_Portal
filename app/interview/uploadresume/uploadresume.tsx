'use client';
import React, { useState, useCallback } from 'react';
import Balancer from 'react-wrap-balancer';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ENDPOINTS from '@/contants/api.constants';
import { SelfIntroduction } from '@/types/user.types';
import SelfIntroductions from '@/ui/intro/SelfIntroductions';
import { Button, useDisclosure } from '@nextui-org/react';

const BYTE_SIZE = 1024;
const FILE_LIMIT = 2; // MB
const FILE_SIZE_LIMIT = BYTE_SIZE * BYTE_SIZE * FILE_LIMIT;

type FileUploadProps = {
  maxSizeInBytes: number;
  onFileChange: (_file: File | null) => void;
  onError: (_message: string) => void;
};

const useFileUpload = ({
	maxSizeInBytes,
	onFileChange,
	onError
}: FileUploadProps) => {
	const handleFileUpload = useCallback(
		(file: File) => {
			if (file.size > maxSizeInBytes) {
				onError(
					`File is too big! Please upload a file less than ${FILE_LIMIT} MB.`
				);
				onFileChange(null);
			} else {
				onError('');
				onFileChange(file);
			}
		},
		[maxSizeInBytes, onFileChange, onError]
	);

	return { handleFileUpload };
};

export default function InputFile() {
	const {
		isOpen: displayIntroductions,
		onOpen: showIntroductions,
		onClose
	} = useDisclosure();

	const [errorMessage, setErrorMessage] = useState('');
	const [file, setFile] = useState<File | null>(null);
	const [saving, setSaving] = useState(false);
	const [introductions, setIntroductions] = useState<SelfIntroduction[]>([]);
	const router = useRouter();

	const { handleFileUpload } = useFileUpload({
		maxSizeInBytes: FILE_SIZE_LIMIT,
		onFileChange: setFile,
		onError: setErrorMessage
	});

	const handleDrop = (event: React.DragEvent<HTMLElement>) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (file) {
			handleFileUpload(file);
		}
	};

	const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
		event.preventDefault();
	};

	const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			handleFileUpload(file);
		}
	};

	const user = useSession();
	const onSubmit = async () => {
		try {
			setSaving(true);
			const form = new FormData();
			form.append('resume', file as File);
			form.append('userId', user?.data?.user?.id as string);
			const response = await axios.post(ENDPOINTS.INTERNAL_RESUME_UPLOAD, form);
			if (response.data?.status) {
				return router.push('/self-introduction');
			}
		} catch (error: any) {
			setSaving(false);
			setErrorMessage(error.message);
		}
	};

	const generateIntroductions = async () => {
		try {
			setSaving(true);
			const form = new FormData();
			form.append('resume', file as File);
			form.append('userId', user?.data?.user?.id as string);
			const response = await axios.post(
				ENDPOINTS.INTERNAL_RESUME_INTRODUCTIONS,
				form
			);
			if (response?.data) {
				setIntroductions((response?.data?.data || []) as SelfIntroduction[]);
				showIntroductions();
				setSaving(false);
			}
		} catch (error: any) {
			setSaving(false);
			setErrorMessage(error.message);
		}
	};

	return (
		<>
			<SelfIntroductions
				isOpen={displayIntroductions}
				introductions={introductions}
				onClose={onClose}
			/>
			<label
				className="py-4 md:py-8 hover:bg-slate-200 text-center cursor-pointer mt-4 w-full items-center flex flex-col gap-4  p-3 border-2 border-dotted border-gray-300 rounded-lg drag-area"
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				htmlFor={'resume'}
			>
				<p className="text-center">
					<Balancer>
            Upload your resume and introduce yourself through a video - a
            powerful way to showcase your skills and personality to potential
            employers.
					</Balancer>
				</p>
				<CloudArrowUpIcon className="rounded-full max-w-[4rem]" />

				<footer>
					<p className="text-lg">
            Drag <span className="text-sm">or</span> Upload Resume
					</p>
					<input
						id="resume"
						name="resume"
						type="file"
						className="hidden"
						accept=".pdf"
						onChange={handleFileInput}
					/>

					<p className="text-gray-400 text-sm">
            Please upload your file as a single PDF under {FILE_LIMIT}MB.
					</p>
				</footer>

				{file && (
					<>
						<div className="flex gap-2 mt-2">
							<Button
								color="danger"
								isLoading={saving}
								className="min-w-24"
								size="lg"
								onClick={generateIntroductions}
							>
                Generate Introductions
							</Button>
							<Button
								isLoading={saving}
								className="min-w-24"
								size="lg"
								onClick={onSubmit}
							>
                Record Self Intro Video
							</Button>
						</div>
					</>
				)}

				{errorMessage && (
					<p>
						<h1>{errorMessage}</h1>
					</p>
				)}
			</label>
		</>
	);
}
