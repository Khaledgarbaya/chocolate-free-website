import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

class LandingPageImage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="w-full px-4 py-4  print:hidden">
        <Link to="/" rel="noopener">
          <GatsbyImage
            className="block mx-auto"
            image={getImage(data.image)}
            alt="Chocolate Free"
          />
        </Link>
      </div>
    );
  }
}

LandingPageImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LandingPageImage;
