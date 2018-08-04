import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function Twitter({
  title,
  description,
  image,
}) {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description} />
      <meta name="twitter:creator" content="@amalnasri" />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}

Twitter.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Twitter;
