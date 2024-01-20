import React from "react";
import { useSearchParams } from "react-router-dom";

const UrlParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("city"));

  const handleClick = (event) => {
    setSearchParams({ name: "Nirmal Kumar Pahadi", city: "Ranchi" });
  };

  return (
    <>
      <h2>UrlParams</h2>
      <p>Name: {searchParams.get("name")}</p>
      <p>City: {searchParams.get("city")}</p>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Update Url
      </button>
    </>
  );
};

export default UrlParams;
