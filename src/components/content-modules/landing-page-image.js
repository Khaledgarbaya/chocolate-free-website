import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LandingPageImage = ({ data }) => {
  return (
    <div className="w-full px-4 py-4  print:hidden">
      <Link to="/" rel="noopener">
        <GatsbyImage
          className="block mx-auto"
          image={getImage(data.image)}
          alt="Chocolate Free"
        />
      </Link>
    </div>
  );
};
export default LandingPageImage;
