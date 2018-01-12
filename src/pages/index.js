import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import ArticleHeader from '../components/ArticleHeader'
import SideBar from '../components/SideBar'
import FeaturedPosts from '../components/content-modules/featured-posts'
import LandingPageImage from '../components/content-modules/LandingPageImage'
import getLandingPageModule from '../utils/getLandingPageModule'
import Img from 'gatsby-image'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Article = ({ node }) => {
  console.log(node)
  return (
    <div className="article">
      <ArticleHeader node={node} />
      {node.featureImage && <Img sizes={node.featureImage.sizes} alt={node.featureImage.title} title={node.featureImage.title} backgroundColor={"#f1f1f1"}/>}

      <p>{node.contentModules[0].copy.childMarkdownRemark.excerpt}</p>
      <Link rel='noopener' to={`/article/${node.slug}.html`}>Read more...</Link>
    </div>
  )
}

class IndexPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <div className="grid">
        {contentModules.map((module, i) => getLandingPageModule(module, i))}
        <div className="content">
          {articles.map(({ node }, i) => <Article node={node} key={i} />)}
        </div>
        <SideBar />
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulLandingPage(filter: {
      slug: {eq: "home-page"}
    }){
      edges {
        node {
          contentModules {
            ... on ContentfulLandingPageImage {
              internal {
                type
              }
              image {
                sizes(maxWidth: 800){
                 ...GatsbyContentfulSizes
                }
                file {
                  url
                }
              }
            } 
            ... on ContentfulLandingPageFeaturedPosts {
              internal {
                type
              }
               posts {
                title
                slug
                contentModules {
                  ... on ContentfulArticleRecipe {
                    serves
                    ingredients {
                      id
                    }
                    instructions {
                      id
                    }
                    totalTime
                    prepTime
                    cookTime
                  }
                  ... on ContentfulArticleCopy {
                    copy {
                      childMarkdownRemark {
                        excerpt
                      }
                    }
                  }
                  ... on ContentfulArticleImage {
                    image {
                      sizes(maxWidth: 800){
                       ...GatsbyContentfulSizes
                      }
                      file {
                        url
                      }
                    }
                  }
                }
                featureImage {
                  sizes(maxWidth: 800){
                   ...GatsbyContentfulSizes
                  }
                  file {
                    url
                  }
                }
              }
            } 
          }        
        }
      }
    }
    allContentfulArticle(filter: {
        node_locale: {eq: "en-US"},
        section: {eq: "Recipes"}
    }, sort:{fields: [publishDate], order: DESC}) {
      edges {
        node {
          id
          title
          slug
          section
          publishDate
          contentModules {
            ... on ContentfulArticleRecipe {
              serves
              ingredients {
                id
              }
              instructions {
                id
              }
              totalTime
              prepTime
              cookTime
            }
            ... on ContentfulArticleCopy {
              copy {
                childMarkdownRemark {
                  html
                  excerpt
                }
              }
            }
            ... on ContentfulArticleImage {
              image {
                title
                sizes(maxWidth: 800){
                 ...GatsbyContentfulSizes
                }
                file {
                  url
                }
              }
            }
          }
          featureImage {
            title
            sizes(maxWidth: 800){
             ...GatsbyContentfulSizes
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`
