'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default function InputFile() {
	const [fileUploaded, setFileUploaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [uploadedFileName, setUploadedFileName] = useState('');

	const handleFileUpload = (file: any) => {
		const size = file.size;

		if (size > 5000000) {
			setErrorMessage(
				`File is too big! Please upload a file less than 5 MB. Your file size is ${size} bytes. Thanks!!`
			);
			setFileUploaded(false);
		} else {
			setErrorMessage('');
			setFileUploaded(true);
			setUploadedFileName(file.name);
		}
	};

	const handleDeleteResume = () => {
		setFileUploaded(false);
		setErrorMessage('');
		setUploadedFileName('');
	};

	const handleDrop = (event: any) => {
		event.preventDefault();

		const file = event.dataTransfer.files?.[0];

		if (file) {
			handleFileUpload(file);
		}
	};

	const handleDragOver = (event: any) => {
		event.preventDefault();
	};

	const handleFileInput = (event: any) => {
		const file = event.target.files?.[0];

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

			{fileUploaded && (
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

			{fileUploaded && (
				<>
					<div className="flex">
						<p className="ml-2 text-green-500 text-lg">{` '${uploadedFileName}' uploaded successfully!`}</p>
					</div>
					<Button className="ml-[40px]">Next</Button>
				</>
			)}

			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
		</div>
	);
}
