import React from "react";
import { useSearchParams } from "react-router-dom";

const UrlParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("city"));
  console.log(searchParams.get("number"));
  console.log(searchParams.get("job"));

  const handleClick = (event) => {
    setSearchParams({
      name: "Nirmal Kumar Pahadi",
      city: "Ranchi",
      number: 9898989898,
      job: "Software Developer",
    });
  };

  const handleChange = (event) => {
    setSearchParams({
      name: "Nirmal Kumar Pahadi",
      city: "Ranchi",
      number: 9898989898,
      job: event.target.value,
    });
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
      <input
        type="text"
        name="job"
        placeholder="Search Job"
        onChange={handleChange}
      />
    </>
  );
};

export default UrlParams;
