import React from "react";
import Helmet from "react-helmet";

const Twitter = ({ title, description, image }) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:creator" content="@amalnasri" />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
export default Twitter;
