import React from "react";
import AlertBasic from "./AlertBasic";
import AlertLink from "./AlertLink";
import AlertContent from "./AlertContent";
import AlertDismiss from "./AlertDismiss";

const AlertMain = () => {
  return (
    <>
      <AlertBasic />
      <AlertLink />
      <AlertContent />
      <AlertDismiss />
    </>
  );
};

export default AlertMain;
