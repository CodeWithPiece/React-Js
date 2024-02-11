import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const foregroundRef = useRef();
  const datas = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: ".2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "bg-green-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: "1.8mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: ".6mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "bg-green-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: "1.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hello there...!!",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
  ];

  return (
    <div
      ref={foregroundRef}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5"
    >
      {datas.map((data, index) => {
        return <Card key={index} data={data} reference={foregroundRef} />;
      })}
    </div>
  );
};

export default Foreground;
