import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const ArticleTwoImages = ({ data }) => {
  const { left, right } = data;
  return (
    <section className="flex flex-wrap justify-center w-full  print:hidden">
      <div className="w-full md:w-1/2 p-2">
        <GatsbyImage
          image={getImage(left)}
          alt={left.title}
          className="m-0 w-full inline-block"
          title={left.title}
        />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <GatsbyImage
          image={getImage(right)}
          alt={right.title}
          className="m-0 w-full inline-block"
          title={right.title}
        />
      </div>
    </section>
  );
};

export default ArticleTwoImages;
