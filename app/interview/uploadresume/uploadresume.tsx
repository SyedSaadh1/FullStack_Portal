'use client';
import React, { useState, DragEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const BYTE_SIZE = 1024;
const FILE_LIMIT = 5; // mb
const FILE_SIZE_LIMIT = BYTE_SIZE * BYTE_SIZE * FILE_LIMIT;

export default function InputFile() {
	const [errorMessage, setErrorMessage] = useState('');
	const [file, setFile] = useState<File | null>(null);

	const handleFileUpload = (file: File) => {
		const size = file.size;

		if (size > FILE_SIZE_LIMIT) {
			setErrorMessage(
				`File is too big! Please upload a file less than ${FILE_LIMIT} MB. Your file size is ${size} bytes. Thanks!!`
			);
			setFile(null);
		} else {
			setErrorMessage('');
			setFile(file);
		}
	};

	const handleDeleteResume = () => {
		setErrorMessage('');
		setFile(null);
	};

	const handleDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (file) {
			handleFileUpload(file);
		}
	};

	const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]; // event.target.files?.[0];
		if (file) {
			handleFileUpload(file);
		}
	};

	return (
		<div
			className="w-full max-w-xl mx-auto items-center
        mt-[100px] flex-1 flex flex-col 
       items-center p-3 border-2 border-dotted
        border-gray-300 rounded-lg drag-area"
			onDrop={handleDrop}
			onDragOver={handleDragOver}
		>
			<FaCloudUploadAlt className="p-[10px] rounded-full ml-[10px] text-8xl" />

			{file && (
				<Button className="mt-[-68px] ml-[500px]" onClick={handleDeleteResume}>
					<MdDelete />
				</Button>
			)}

			<header className="mt-6">
				<label className="text-lg">Drag files here to upload </label> or
				<label className="text-sky-600 underline file-input-button ml-[5px] text-xl cursor-pointer">
          Upload Resume
					<input
						type="file"
						className="hidden"
						accept=".pdf, .doc, .docx"
						onChange={handleFileInput}
					/>
				</label>
				<label className="ml-[5px] text-lg"> from your device</label>
			</header>

			<p className="text-gray-400 text-sm">
        Supported Formats: PDF, doc, or docx only, maximum file size-5MB
			</p>

			{file && (
				<>
					<div className="flex">
						<p className="ml-2 text-green-500 text-lg">{` '${file.name}' uploaded successfully!`}</p>
					</div>
					<Button className="ml-[40px]">Next</Button>
				</>
			)}

			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
		</div>
	);
}
