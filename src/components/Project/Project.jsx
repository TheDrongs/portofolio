import { FaFolderOpen } from "react-icons/fa";
import { IoEyeSharp, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

const Project = ({
  projectName,
  projectDescription,
  projectDetails,
  projectRole,
  projectURL,
  screenshots,
  tags,
  date,
  onViewClick,
}) => {
  const [showStacks, setShowStacks] = useState(false);

  return (
    <div className="flex flex-col bg-mainColor text-white p-5 bedar-sc2:p-8 rounded-md border shadow">
      <FaFolderOpen className="w-6 h-6" />
      <div className="mt-5 mb-4">
        <strong className="block text-2xl text-[#fedf89]">
          NAME : {projectName}
        </strong>
        <div className="border-b border-white mt-2" />
      </div>

      <div className="mb-2">DESCRIPTION : {projectDescription}</div>
      <div className="mb-2">CLIENTS : {projectDetails}</div>
      <div className="mb-2">ROLE : {projectRole}</div>

      <div className="mb-4">
        <button
            onClick={() => setShowStacks((prev) => !prev)}
            className="flex items-center gap-2 bg-black text-mainColor font-medium py-1.5 px-3 rounded-full shadow hover:text-black active:text-black hover:bg-yellow-100 transition-all"
          >
            {showStacks ? (
              <IoEyeOffOutline className="w-5 h-5" />
            ) : (
              <IoEyeOutline className="w-5 h-5" />
            )}
            {showStacks ? "Hide Tech Stacks" : "Show Tech Stacks"}
          </button>
        {showStacks && (
          <div className="mt-2 text-sm text-white/90">
            {tags}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div>Date : {date}</div>
        {onViewClick && screenshots?.length > 0 && (
          <button
            onClick={() => onViewClick(screenshots)}
            title="View Screenshots"
            className="flex items-center gap-1 text-white hover:text-yellow-300 transition-colors"
          >
            <IoEyeSharp className="w-6 h-6" />
            Screenshots
          </button>
        )}
      </div>
    </div>
  );
};

export default Project;
