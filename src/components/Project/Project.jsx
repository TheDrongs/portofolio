import { FaFolderOpen } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
    return (
      <div className="flex flex-col bg-mainColor text-white p-5 bedar-sc2:p-8 rounded-md border shadow">
        <FaFolderOpen className="w-6 h-6" />
        <div className="mt-5 mb-4">
          <strong className="block text-2xl text-[#fedf89]">
            PROJECT NAME : {projectName}
          </strong>
          <div className="border-b border-white mt-2" />
        </div>
        <div className="mb-2">DESCRIPTION : {projectDescription}</div>
        <div className="mb-2">CLIENTS : {projectDetails}</div>
        <div className="mb-2">ROLE : {projectRole}</div>
        <div>TECH STACK(s) : {tags}</div>
        <div className="flex items-center justify-between mt-10">
          <div>Date : {date}</div>
          <div className="flex gap-2">
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
      </div>
    );
};

export default Project;
