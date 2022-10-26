import React from "react";
import { Slice } from "gatsby";
const SlicesMap = {
  ContentfulArticleRecipe: "recipe",
  ContentfulArticleCopy: "copy",
  ContentfulArticleImage: "image",
  ContentfulArticleTwoImages: "twoImages",
};
export const getArticleModule = (module, index, id) => {
  const sliceAlias = SlicesMap[module.internal.type];
  if (sliceAlias) {
    return (
      <Slice alias={`${sliceAlias}-${index}-${id}`} data={module} key={index} />
    );
  }
  return null;
};

export default getArticleModule;
