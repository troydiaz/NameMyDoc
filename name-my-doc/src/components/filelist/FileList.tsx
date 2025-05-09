import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { gradientButtonClass } from "../styles/classNames"

interface FileListProps {
	originalFiles: File[];
	modifiedNames: string[];
}

const FileList: React.FC<FileListProps> = ({ originalFiles, modifiedNames }) => {
	const handleDownloadZip = async () => {
		const zip = new JSZip();
		originalFiles.forEach((file, idx) => {
			zip.file(modifiedNames[idx], file);
		});
		const blob = await zip.generateAsync({ type: "blob" });
		saveAs(blob, "documents.zip");
	};

	return (
		<div className="w-full border-1 rounded-3xl p-4">
			<table className="w-full text-sm table-fixed">
				<colgroup>
					<col className="w-1/3" />
					<col className="w-1/3" />
					<col className="w-1/3" />
				</colgroup>
				<thead>
					<tr className="border-b">
						<th className="p-2 text-center">Original</th>
						<th className="p-2 text-center">Modified</th>
						<th className="p-2 text-center">Download</th>
					</tr>
				</thead>
				<tbody>
					{originalFiles.length > 0 ? (
						originalFiles.map((file, i) => (
							<tr key={i} className="border-b">
								<td className="p-2 text-center break-words align-top">{file.name}</td>
								<td className="p-2 text-center break-words align-top">{modifiedNames[i]}</td>
								<td className="p-2 text-center align-top">
									<a
										href={URL.createObjectURL(file)}
										download={modifiedNames[i]}
										className="text-black-500 underline"
									>
										Download
									</a>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td className="p-2 text-gray-400 italic text-center" colSpan={3}>
								No files uploaded.
							</td>
						</tr>
					)}
				</tbody>
			</table>

			{originalFiles.length > 0 && (
				<div className="flex justify-center mt-6">
					<button
						onClick={handleDownloadZip}
						className={gradientButtonClass}
					>
						Download All as ZIP
					</button>
				</div>
			)}
		</div>
	);
};

export default FileList;
