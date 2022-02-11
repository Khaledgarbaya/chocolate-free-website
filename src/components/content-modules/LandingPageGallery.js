import React, { Component } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

class LandingPageGallery extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="flex flex-wrap w-full">
        {data.images.map((image, i) => (
          <GatsbyImage
            alt={image.title}
            image={getImage(image)}
            className="w-full sm:w-1/2 px-2"
            key={i}
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
