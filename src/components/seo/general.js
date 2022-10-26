import React from "react";

const General = ({ title, description }) => {
  return (
    <>
      <title>{title} | Chocolate Free</title>
      <meta name="description" content={description} />
    </>
  );
};
export default General;
