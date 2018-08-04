import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from "prop-types"
import ArticleHeader from '../components/ArticleHeader'
import { rhythm } from '../utils/typography'
import DisqusThread from '../components/DisqusThread'
import Author from '../components/Author'

import getArticleModule from '../utils/getArticleModule'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticle
    const {
      title,
      slug,
      contentModules,
      featureImage,
      author,
      publishDate,
      section
    } = article
    return (
      <div className="content">
        <article className="article">
          <ArticleHeader node={article} />
          {contentModules.map((module, i) => getArticleModule(module, i))}
          <Author author={author} />
          <DisqusThread id={slug} path={slug} title={title}/>
        </article>
      </div>
    )
  }
}

ArticleTemplate.propTypes = propTypes

export default ArticleTemplate

export const pageQuery = graphql`
  query articleQuery($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      slug
      contentModules {
        ... on ContentfulArticleRecipe {
          internal {
            type
          }
          serves
          ingredients {
            childMarkdownRemark {
              html
            }
          }
          instructions {
            childMarkdownRemark {
              html
            }
          }
          image {
            title
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes
            }
            file {
              url
            }
          }
          title
          totalTime
          prepTime
          cookTime
        }
        ... on ContentfulArticleCopy {
          internal {
            type
          }
          copy {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulArticleImage {
          internal {
            type
          }
          image {
            title
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes
            }
            file {
              url
            }
          }
        }
      }      
      publishDate
      featureImage {
        title
        sizes(maxWidth: 800) {
           ...GatsbyContentfulSizes
        }
        responsiveResolution(width: 800) {
          src
          srcSet
          height
          width
        }
      }
      author {
        fullName
        website
        bio {
          bio
        }
        avatar {
          responsiveResolution(width: 200) {
            src
            srcSet
            height
            width
          }
        }
      }
    }
  }
`
