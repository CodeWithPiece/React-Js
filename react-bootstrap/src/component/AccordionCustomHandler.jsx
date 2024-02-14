import React from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
import AccordionContext from "react-bootstrap/AccordionContext";

const PINK = "rgba(255, 192, 203, 0.6)";
const BLUE = "rgba(0, 0, 255, 0.6)";

const AccordionCustomHandler = ({ children, eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const onButtonClick = useAccordionButton(eventKey, () => {
    callback(eventKey);
  });
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default AccordionCustomHandler;
