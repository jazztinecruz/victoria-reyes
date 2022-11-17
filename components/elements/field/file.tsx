import React from "react";

const File = () => {
  return (
    <div className="flex flex-col gap-4">
      <span>Proof of Residency</span>
      <input type="file" className="file-input w-full max-w-xs" />
    </div>
  );
};

export default File;
