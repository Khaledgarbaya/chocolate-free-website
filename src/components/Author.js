import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Author = ({ author }) => {
  const image = getImage(author.avatar);
  return (
    <div className="flex flex-wrap justify-center items-center font-paragraph mt-6 border-t p-2">
      <div className="w-full sm:w-1/4 text-center">
        {image && (
          <GatsbyImage
            alt={author.fullName}
            className="inline-block"
            image={image}
          />
        )}
      </div>
      <div className="w-full sm:w-3/4 text-center mt-4 sm:text-left sm:mt-0">
        <h3 className="font-heading text-xl inline-block">{author.fullName}</h3>
        <p>{author.bio.bio}</p>
        <div className="u-noMarginBottom" data-markup>
          <a
            className="inline-block text-blue-900 px-2 underline"
            href={author.website}
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
