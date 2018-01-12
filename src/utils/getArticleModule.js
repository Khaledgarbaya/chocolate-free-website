import React from 'react'
import Recipe from '../components/content-modules/article-recipe'
import ArticleImage from '../components/content-modules/article-image'
import ArticleCopy from '../components/content-modules/article-copy'

const componentsMap = {
  ContentfulArticleRecipe: Recipe,
  ContentfulArticleCopy: ArticleCopy,
  ContentfulArticleImage: ArticleImage
}
export const getArticleModule = (module, index) => {
  const Component = componentsMap[module.internal.type]
  if (Component) {
    return <Component data={module} key={index}/>
  }
  return null
}

export default getArticleModule