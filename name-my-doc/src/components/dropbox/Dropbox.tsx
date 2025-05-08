import React, { useRef } from 'react';
import clsx from "clsx";
import { gradientButtonClass } from '../styles/classNames';

interface DropboxProps {
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const Dropbox: React.FC<DropboxProps> = ({ files, setFiles }) => {
	// for box click
	const fileInputRef = useRef<HTMLInputElement>(null);

	// multiple file handling
	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		// restrict to certain ctypes
		const allowedTypes = ['application/pdf', 'image/jpeg', 'image/tiff'];

		// ensure files are followed
		const droppedFiles = Array.from(event.dataTransfer.files).filter(file =>
			allowedTypes.includes(file.type)
		);

		// append files to list
		setFiles(prev => [...prev, ...droppedFiles]);
	};

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	// Selecting files
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// Return early if files are not selected
		const selectedFiles = event.target.files;
		if (!selectedFiles) return;

		// Filter supported files
		const allowedTypes = ['application/pdf', 'image/jpeg', 'image/tiff'];
		const filesArray = Array.from(selectedFiles);
		const validFiles = filesArray.filter(file =>
			allowedTypes.includes(file.type)
		);

		// Add valid files to current state
		setFiles(prev => [...prev, ...validFiles]);
	};

	const handleClear = () => {
		const confirmClear = window.confirm("Are you sure you want to clear all uploaded files?");
		if (confirmClear) {
			setFiles([]);
		}
	};

	return (
		<div
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onClick={handleClick}
			className="border-2 p-6 rounded-3xl w-auto bg-gray-50 text-center hover:border-gray-300 transition-all cursor-pointer"
		>
			<input
				type="file"
				ref={fileInputRef}
				onChange={handleFileChange}
				multiple
				className="hidden"
			/>

			<div className="flex justify-center">
				<img
					className="w-40 md:w-48 rounded-2xl"
					src="/upload_icon.png"
					alt="Upload"
				/>
			</div>

			<p className="text-black">Upload your documents</p>
			<p className="text-black font-semibold text-sm">
				Disclaimer: NameMyDoc is an experimental tool. Always review file names before saving.
			</p>

			{files.length > 0 && (
				<>
					{/* Show only when user uploads at least one file */}
					<ul className="mt-4 text-sm text-left">
						{files.map((file, index) => (
							<li key={index}>{file.name}</li>
						))}
					</ul>

					{/* Clear button, prevents from opening file opener again */}
					<button
						className={clsx(gradientButtonClass, "mt-4")}
						onClick={(e) => {
							e.stopPropagation();
							handleClear();
						}}
					>
						Clear All
					</button>
				</>
			)}
		</div>
	);
};

export default Dropbox;
