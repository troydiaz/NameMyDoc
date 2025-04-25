import React from "react";

interface SettingsBarProps {
  prefix: string;
  suffix: string;
  delimiter: string;
  setPrefix: (value: string) => void;
  setSuffix: (value: string) => void;
  setDelimiter: (value: string) => void;
}

const SettingsBar: React.FC<SettingsBarProps> = ({
    prefix,
    suffix,
    delimiter,
    setPrefix,
    setSuffix,
    setDelimiter,
  }) => {
    return (
      <div className="flex flex-col justify-center gap-4 p-4">
        {/* Prefix */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-sm font-medium">Prefix:</label>
          <input
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            className="w-64 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
  
        {/* Suffix */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-sm font-medium">Suffix:</label>
          <input
            type="text"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            className="w-64 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
  
        {/* Delimiter */}
        <div className="flex items-center gap-2">
          <label className="w-24 text-sm font-medium">Delimiter:</label>
          <input
            type="text"
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value)}
            className="w-64 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    );
  };
  
  
  export default SettingsBar;