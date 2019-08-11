import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

class LandingPageGallery extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="flex flex-wrap w-full">
        <div
          className="mb-6"
          dangerouslySetInnerHTML={{
            __html: data.description.childMarkdownRemark.html
          }}
        />
        {data.images.map((image, i) => (
          <img className="w-full sm:w-1/2 px-2" key={i} src={image.file.url} />
        ))}
      </div>
    );
  }
}

LandingPageGallery.propTypes = {
  data: PropTypes.object.isRequired
};

export default LandingPageGallery;
