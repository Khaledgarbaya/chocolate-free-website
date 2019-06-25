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
    <div className="mb-4 w-full flex flex-wrap overflow-hidden">
      <Helmet>
        <title>Chocolate Free</title>
        <meta name="description" content="Chocolate free is a culinary diary of a chocoholic, sweet tooth young lady trying to re-create new sweet fruity and chocolaty version of some classic, or not, deserts."/>
      </Helmet>
      {node.featureImage && <img 
        className="w-full sm:w-1/2"
        src={`${node.featureImage.file.url}?w=400&h=267&fit=fill&bg=rgb:ffffff`} 
        alt={node.featureImage.title} 
        title={node.featureImage.title} 
        width='267' 
        height='400'/>
      }
      <div className="px-2 py-2 w-full sm:w-1/2">
        <div className="font-bold text-xl mb-2">{node.title}</div>
        <p className="text-gray-700 text-base">
          {excerpt}
        </p>
        <Link to={`/article/${node.slug}.html`}>Read more...</Link>
      </div>
    </div>
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
          <div className="content">
            {articles.map(({ node }, i) => <Article node={node} key={i} />)}
            <div className="previousPost pagination">
              {prevPath && <Link to={prevPath}>
                <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                    <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
                  </g>
                </svg>
              </Link>}
            </div>
            <div className="nextPost pagination">
              { nextPath && <Link to={nextPath}>

                <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g>
                    <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
                  </g>
                </svg> 
              </Link>}
            </div>
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
