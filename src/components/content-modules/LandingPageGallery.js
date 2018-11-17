import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

class LandingPageGallery extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="content content-module">
        <div
          className="description"
          dangerouslySetInnerHTML={{
            __html: data.description.childMarkdownRemark.html
          }}
        />
        {data.images.map((image, i) => (
          <img key={i} src={image.file.url} />
        ))}
      </div>
    );
  }
}

LandingPageGallery.propTypes = {
  data: PropTypes.object.isRequired
};

export default LandingPageGallery;
