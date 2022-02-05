import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
class PostCard extends Component {
  render() {
    const { title, featureImage, slug, contentModules } = this.props.post;
    return (
      <article className="w-full px-2 py-2 flex flex-wrap">
        <img
          src={`${featureImage.file.url}?w=400&h=320`}
          alt=""
          className="w-full sm:w-1/2"
        />
        <div className="w-full sm:w-1/2 px-2 py-2">
          <h3>
            <Link to={`article/${slug}.html`}>{title}</Link>
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: contentModules[0].copy.childMarkdownRemark.excerpt,
            }}
          />
        </div>
      </article>
    );
  }
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
