import React from "react";
import { Slice } from "gatsby";
const SlicesMap = {
  ContentfulArticleRecipe: "recipe",
  ContentfulArticleCopy: "copy",
  ContentfulArticleImage: "image",
  ContentfulArticleTwoImages: "twoImages",
};
export const getArticleModule = (module, index) => {
  const sliceAlias = SlicesMap[module.internal.type];
  // this is weird but trust me it works, hopefully it will be fixed in the future
  if (sliceAlias === "recipe") {
    return <Slice allowEmpty={true} alias="recipe" data={module} key={index} />;
  } else if (sliceAlias === "copy") {
    return <Slice allowEmpty={true} alias="copy" data={module} key={index} />;
  } else if (sliceAlias === "image") {
    return <Slice allowEmpty={true} alias="image" data={module} key={index} />;
  } else if (sliceAlias === "twoImages") {
    return (
      <Slice allowEmpty={true} alias="twoImages" data={module} key={index} />
    );
  }
  return null;
};

export default getArticleModule;
