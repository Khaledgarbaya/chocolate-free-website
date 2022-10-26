import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticleImage = ({ data }) => {
  const { image } = data;
  return (
    <section className="flex justify-center  print:hidden">
      {image && (
        <GatsbyImage
          image={getImage(image)}
          title={image.title}
          alt={image.title}
        />
      )}
    </section>
  );
};

export default ArticleImage;
