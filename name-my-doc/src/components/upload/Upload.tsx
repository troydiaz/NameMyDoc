import React, { useState } from 'react';
import Dropbox from '../dropbox/Dropbox';
import SettingsBar from '../settingsbar/SettingsBar';

const Upload: React.FC = () => {
    const [prefix, setPrefix] = useState("");
    const [suffix, setSuffix] = useState("");
    const [delimiter, setDelimiter] = useState("");

    return (
        <div className="py-15">
            <div className="flex flex-col justify-between gap-4 h-full">
                <Dropbox />
                <div className="flex justify-center">
                    <SettingsBar 
                    prefix={prefix}
                    suffix={suffix}
                    delimiter={delimiter}
                    setDelimiter={setDelimiter}
                    setPrefix={setPrefix}
                    setSuffix={setSuffix}/>
                </div>
            </div>
        </div>
    )
}

export default Upload