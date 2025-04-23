// src/components/Dropbox.tsx
import React, { useState } from 'react';

const Dropbox: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div 
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="border-2 p-6 rounded-lg w-auto bg-gray-50 text-center hover:border-gray-300 transition-all"
    >
    <div className="flex justify-center">
        <img
        className="w-40 md:w-48 rounded-2xl"
        src="/upload_icon.png"
        alt="Upload"
        />
    </div>
      {/* icon from https://www.vector4free.com/free-vectors/upload */}
      <p className="text-gray-700">Upload your documents</p>
      <p className="text-gray-700 font-semibold">Disclaimer: NameMyDoc is an experimental tool. Always review file names before saving.</p>

      {files.length > 0 && (
        <ul className="mt-4 text-sm text-left">
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropbox;
