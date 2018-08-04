import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function Article({
  updateTime,
  publishedTime,
  url,
}) {
  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="article:publisher" content="https://www.facebook.com/chocolatefreedotcom/" />
      <meta property="article:author" content="https://www.facebook.com/chocolatefreedotcom/" />
      <meta property="article:section" content="Dessert" />
      <meta property="article:published_time" content={publishedTime}/>
      <meta property="article:modified_time" content={updateTime}/>
    </Helmet>
  );
}

Article.propTypes = {
  updateTime: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Article;
