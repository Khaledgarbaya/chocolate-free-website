import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

class ArticleImage extends Component {
  render() {
    const { image } = this.props.data;
    return (
      <section className="flex justify-center  print:hidden">
        {image && (
          <GatsbyImage
            image={getImage(image)}
            title={image.title}
          />
        )}
      </section>
    );
  }
}

ArticleImage.propTypes = {
  data: PropTypes.object.isRequired,
};
export default ArticleImage;
