import React from "react";

const ArticleCopy = ({ data }) => {
  const { html } = data.copy.childMarkdownRemark;
  return (
    <section
      className="p-2 text-paragraph block  print:hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ArticleCopy;
