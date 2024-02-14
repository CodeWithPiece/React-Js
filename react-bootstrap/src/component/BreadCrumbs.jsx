import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCrumbs = () => {
  const items = [
    { name: "Home", url: "" },
    { name: "Library", url: "https://google.com" },
    { name: "Data", url: "https://google.com" },
    { name: "Setting", url: "" },
    { name: "Exit", url: "https://google.com" },
  ];

  return (
    <Breadcrumb>
      {items.map((item) => {
        return (
          <Breadcrumb.Item
            key={item.name}
            active={item.url.length === 0 ? true : false}
            href={item.url}
            target="_blank"
          >
            {item.name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
