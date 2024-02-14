import React from "react";
import AlertBasic from "./AlertBasic";
import AlertLink from "./AlertLink";
import AlertContent from "./AlertContent";
import AlertDismiss from "./AlertDismiss";
import AlertCustomDismiss from "./AlertCustomDismiss";

const AlertMain = () => {
  return (
    <>
      <AlertBasic />
      <AlertLink />
      <AlertContent />
      <AlertDismiss />
      <AlertCustomDismiss />
    </>
  );
};

export default AlertMain;
