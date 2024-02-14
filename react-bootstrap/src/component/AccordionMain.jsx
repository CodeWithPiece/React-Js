import React from "react";
import AccordionBasic from "./AccordionBasic";
import AccordionDefaultActive from "./AccordionDefaultActive";
import AccordionFlush from "./AccordionFlush";
import AccordionAlwaysOpen from "./AccordionAlwaysOpen";
import AccrodionCustom from "./AccrodionCustom";

const AccordionMain = () => {
  return (
    <>
      <AccordionBasic />
      <AccordionDefaultActive />
      <AccordionFlush />
      <AccordionAlwaysOpen />
      <AccrodionCustom />
    </>
  );
};

export default AccordionMain;
