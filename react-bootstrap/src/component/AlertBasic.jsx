import React, { useMemo } from "react";
import Alert from "react-bootstrap/Alert";

const AlertBasic = () => {
  const variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  const cachedVariants = useMemo(() => {
    return variants;
  }, [variants]);

  return (
    <>
      {cachedVariants.map((variant) => {
        return (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        );
      })}
    </>
  );
};

export default AlertBasic;
