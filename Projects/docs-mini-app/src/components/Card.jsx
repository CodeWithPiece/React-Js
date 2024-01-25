import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-48 h-60 rounded-[30px] bg-zinc-900/90 text-white py-4 px-3 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-4 leading-tight font-semibold">{data.desc}</p>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between py-4 px-3">
          <p className="text-sm font-semibold">{data.fileSize}</p>
          <span className="flex items-center justify-center rounded-full w-6 h-6 bg-zinc-100">
            {data.close ? (
              <IoClose color="#000" size=".7em" />
            ) : (
              <LuDownload color="#000" size=".7em" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full p-3 ${data.tag.tagColor} flex items-center justify-center`}
          >
            <p className="text-sm font-semibold uppercase">
              {data.tag.tagTitle}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
