import React, { useState, useRef } from 'react';
import clsx from "clsx";
import { gradientButtonClass } from '../styles/classNames'

const Dropbox: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current?.click(); 
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;
    const newFiles = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleClear = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all uploaded files?");
    if (confirmClear){
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
      {/* Hidden file input */}
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
          <ul className="mt-4 text-sm text-left">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>

          <button className={clsx(gradientButtonClass)}
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
