import React, { useState } from 'react';
import Dropbox from '../dropbox/Dropbox';
import SettingsBar from '../settingsbar/SettingsBar';
import FileList from '../filelist/FileList';
import { gradientButtonClass } from "../styles/classNames"

const Upload: React.FC = () => {
	const [prefix, setPrefix] = useState("");
	const [suffix, setSuffix] = useState("");
	const [delimiter, setDelimiter] = useState("");
	const [files, setFiles] = useState<File[]>([]);
	const [modifiedNames, setModifiedNames] = useState<string[]>([]);
	const [hasRenamed, setHasRenamed] = useState(false);

	const handleRename = () => {
		const renamed = files.map((file) => {
			const baseName = file.name.replace(/\.[^/.]+$/, ""); // remove file extension
			return `${prefix}${delimiter}${baseName}${delimiter}${suffix}.pdf`;
		});
		setModifiedNames(renamed);
		setHasRenamed(true);
	};

	// const handleFileUpdate = (newFiles: File[]) => {
	// 	setFiles(newFiles);
	// 	setModifiedNames([]); // clear renamed results on new upload
	// };

	return (
		<div className="py-15">
			<div className="flex flex-col justify-between gap-4 h-full">
        <Dropbox files={files} setFiles={setFiles} />

				<div className="flex justify-center">
					<SettingsBar 
						prefix={prefix}
						suffix={suffix}
						delimiter={delimiter}
						setDelimiter={setDelimiter}
						setPrefix={setPrefix}
						setSuffix={setSuffix}
					/>
				</div>

				{files.length >= 0 && (
					<div className="flex justify-center mt-4">
						<button
							onClick={handleRename}
							className={gradientButtonClass}
						>
							Rename Files
						</button>
					</div>
				)}

				<FileList
					originalFiles={hasRenamed ? files : []}
					modifiedNames={hasRenamed ? modifiedNames : []}
				/>
			</div>
		</div>
	);
};

export default Upload;
