import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function og({
  locale,
  type,
  title,
  description,
  url,
  siteName,
  updateTime,
  publishedTime,
  image,
  imageSecure
}) {
  return (
    <Helmet>
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName}/>
      <meta property="og:updated_time" content={updateTime}/>
      <meta property="article:published_time" content={publishedTime} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={imageSecure} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
}

og.propTypes = {
  locale: PropTypes.string, 
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,       
  siteName: PropTypes.string,
  updateTime: PropTypes.string.isRequired,
  publishedTime: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageSecure: PropTypes.string.isRequired
};

export default og;
