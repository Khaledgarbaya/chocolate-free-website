import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const Article = ({ updateTime, publishedTime, url }) => {
  return (
    <Helmet>
      <link
        rel="canonical"
        key={url}
        href={url}
        data-baseprotocol="https"
        data-basehost="chocolate-free.com"
      />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/chocolatefreedotcom/"
      />
      <meta
        property="article:author"
        content="https://www.facebook.com/chocolatefreedotcom/"
      />
      <meta property="article:section" content="Dessert" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:modified_time" content={updateTime} />
    </Helmet>
  );
};

Article.propTypes = {
  updateTime: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Article;
