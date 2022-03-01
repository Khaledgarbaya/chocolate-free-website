import React, { Component } from "react";
import * as PropTypes from "prop-types";

class ArticleCopy extends Component {
  render() {
    const { html } = this.props.data.copy.childMarkdownRemark;
    return (
      <section
        className="p-2 text-paragraph block  print:hidden"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}

ArticleCopy.propTypes = {
  data: PropTypes.object.isRequired,
};
export default ArticleCopy;
