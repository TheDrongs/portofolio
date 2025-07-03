import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Certificate = ({ isFlexShrink, img, title, description, issuedBy, credentialURL }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div
        className={`${
          isFlexShrink && "w-[300px] flex-shrink-0"
        } h-full bg-mainColor text-white flex flex-col gap-4 rounded-lg p-3 mb-4 border border-zinc-200 shadow overflow-hidden`}
      >
        <img
          className={`w-full h-auto aspect-video object-contain rounded-lg select-none cursor-pointer ${isLoading ? "skeleton" : ""}`}
          src={img}
          onLoad={() => setIsLoading(false)}
          onClick={() => {
            setSelectedImage(img);
            setShowModal(true);
          }}
          alt="Credential-img"
        />
        <strong className="text-xl text-[#fedf89]">{title}</strong>
        <div className="line-clamp-6 ">{description}</div>
        <div className="flex justify-between">
          <div
            className="font-bold cursor-pointer"
            title={`issued by ${issuedBy}`}
          >
            {issuedBy}
          </div>
          <a
            href={credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white/65 transition-colors ease-linear font-semibold"
            title="View Credential"
          >
            <IoEyeSharp className="w-6 h-6" />
            Credentials
          </a>
        </div>
      </div>

      <AnimatePresence>
        {showModal && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Popup"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default Certificate;
