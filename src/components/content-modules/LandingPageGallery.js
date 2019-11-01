import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class LandingPageGallery extends Component {
  render() {
    const { data } = this.props;
    console.log({ data });
    return (
      <div className="flex flex-wrap w-full">
        {data.fields.images['en-US'].map((image, i) => (
          <img
            className="w-full sm:w-1/2 px-2"
            key={i}
            src={`https:${image.fields.file['en-US'].url}?w=312&h=486&fit=fill`}
          />
        ))}
      </div>
    );
  }
}

LandingPageGallery.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LandingPageGallery;
