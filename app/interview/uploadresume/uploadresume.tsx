'use client';
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { MdDelete } from 'react-icons/md';
import Balancer from 'react-wrap-balancer';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const BYTE_SIZE = 1024;
const FILE_LIMIT = 5; // MB
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
	const [errorMessage, setErrorMessage] = useState('');
	const [file, setFile] = useState<File | null>(null);

	const { handleFileUpload } = useFileUpload({
		maxSizeInBytes: FILE_SIZE_LIMIT,
		onFileChange: setFile,
		onError: setErrorMessage
	});

	const handleDeleteResume = () => {
		setErrorMessage('');
		setFile(null);
	};

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

	return (
		<label
			className="py-4 md:py-8 hover:bg-slate-200 text-center cursor-pointer mt-4 w-full items-center flex flex-col gap-4  p-3 border-2 border-dotted border-gray-300 rounded-lg drag-area"
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			htmlFor="resume"
		>
			<p className="text-center">
				<Balancer>
          Upload your resume and introduce yourself through a video - a powerful
          way to showcase your skills and personality to potential employers.
				</Balancer>
			</p>
			<CloudArrowUpIcon className="rounded-full max-w-[4rem]" />

			{file && (
				<Button className="mt-[-68px] ml-[500px]" onClick={handleDeleteResume}>
					<MdDelete />
				</Button>
			)}

			<footer>
				<p className="text-lg">
          Drag <span className="text-sm">or</span> Upload Resume
				</p>
				<input
					id="resume"
					name="resume"
					type="file"
					className="hidden"
					accept=".pdf, .doc, .docx"
					onChange={handleFileInput}
				/>

				<p className="text-gray-400 text-sm">
          Supported Formats: PDF, doc, or docx only, maximum file size-5MB
				</p>
			</footer>

			{file && (
				<>
					<div className="flex">
						<p className="ml-2 text-green-500 text-lg">{`'${file.name}' uploaded successfully!`}</p>
					</div>
					<Button className="ml-[40px]">Next</Button>
				</>
			)}

			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
		</label>
	);
}
