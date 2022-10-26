import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const General = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Chocolate Free</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

General.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default General;
