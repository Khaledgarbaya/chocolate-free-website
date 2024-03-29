import React from "react";
const Article = ({ updateTime, publishedTime, url }) => {
  return (
    <>
      <link
        rel="canonical"
        key={url}
        href={url}
        data-baseprotocol="https"
        data-basehost="chocolate-free.com"
      />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/chocolatefreedotcom/"
      />
      <meta
        property="article:author"
        content="https://www.facebook.com/chocolatefreedotcom/"
      />
      <meta property="article:section" content="Dessert" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:modified_time" content={updateTime} />
    </>
  );
};

export default Article;
