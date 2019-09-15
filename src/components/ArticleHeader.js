import React from "react";
import { Link } from "gatsby";
const ArticleHeader = ({ node }) => {
  return (
    <div className="article__header">
      <h1 className="font-heading text-5xl w-full text-center inline-block mb-5">
        <Link to={`/article/${node.slug}.html`}>{node.title}</Link>
      </h1>
      <div className="flex">
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <time>{node.publishDate || ""}</time>
      </div>
    </div>
  );
};

export default ArticleHeader;
