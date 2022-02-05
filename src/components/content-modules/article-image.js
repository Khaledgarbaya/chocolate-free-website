import React, { Component } from "react";
import * as PropTypes from "prop-types";

class ArticleImage extends Component {
  render() {
    const { image } = this.props.data;
    return (
      <section>
        {image && (
          <img
            className="mx-auto"
            src={`${image.file.url}?w=650`}
            alt={image.title}
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
