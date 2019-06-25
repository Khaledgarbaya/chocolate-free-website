import React from 'react'
import {graphql, Link} from 'gatsby'
import * as PropTypes from "prop-types"
import { rhythm } from '../../utils/typography'
import ArticleHeader from '../../components/ArticleHeader'
import SideBar from '../../components/SideBar'
import FeaturedPosts from '../../components/content-modules/featured-posts'
import LandingPageImage from '../../components/content-modules/LandingPageImage'
import getLandingPageModule from '../../utils/getLandingPageModule'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const propTypes = {
  data: PropTypes.object.isRequired,
}
const Article = ({ node }) => {
  const excerpt = node.contentModules !== null ? node.contentModules[0].copy.childMarkdownRemark.excerpt : ''
  return (
    <Link  className="w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8" to={`/article/${node.slug}.html`}>
      <div className="rounded-lg shadow hover:shadow-raised  overflow-hidden">
        <Helmet>
          <title>Chocolate Free</title>
          <meta name="description" content="Chocolate free is a culinary diary of a chocoholic, sweet tooth young lady trying to re-create new sweet fruity and chocolaty version of some classic, or not, deserts."/>
        </Helmet>
        <div>
          {node.featureImage && <div className="bg-cover aspect-ratio-16x9"
            style={{
              backgroundImage:`url(https:${node.featureImage.file.url}?w=640&h=360&fit=thumb)` }}>
            </div>
          }
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <h3 className="font-display text-black no-underline mb-4">{node.title}</h3>
          <p className="text-gray-700 text-base">
            {excerpt}
          </p>
          <Link className="text-grey-600 text-md mr-2 mt-2 w-full inline-block text-right" to={`/article/${node.slug}.html`}>Read more...</Link>
        </div>
      </div>
    </Link>
  )
}

class IndexPage extends React.Component {
  render() {
    const {nextPath, prevPath} = this.props.pageContext
    const articles = this.props.data.allContentfulArticle.edges
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <Layout>
        <div className="grid">
          <div className="flex flex-wrap">
            {articles.map(({ node }, i) => <Article node={node} key={i} />)}
          </div>
          <SideBar />
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery($skip: Int!, $limit:Int!) {
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
    }, sort:{fields: [publishDate], order: DESC},
    skip: $skip,
    limit: $limit
    ) {
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
