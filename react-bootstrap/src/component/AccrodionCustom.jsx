import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionCustomHandler from "./AccordionCustomHandler";

const AccrodionCustom = () => {
  const callback = (eventKey) => {
    console.log(`Handling Callback ${eventKey}`);
  };

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <AccordionCustomHandler eventKey="0" callback={callback}>
            Click me!
          </AccordionCustomHandler>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <AccordionCustomHandler eventKey="1" callback={callback}>
            Click me!
          </AccordionCustomHandler>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccrodionCustom;
