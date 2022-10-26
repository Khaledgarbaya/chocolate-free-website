import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LandingPageGallery = ({ data }) => {
  return (
    <div className="flex flex-wrap w-full">
      {data.images.map((image, i) => (
        <GatsbyImage
          alt={image.title}
          image={getImage(image)}
          className="w-full sm:w-1/2 px-2"
          key={i}
        />
      ))}
    </div>
  );
};
export default LandingPageGallery;
