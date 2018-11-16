import React from 'react'
import {graphql, Link} from 'gatsby'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import SingleArticle from '../components/SingleArticle'
import SideBar from '../components/SideBar'
import getLandingPageModule from '../utils/getLandingPageModule'
import ArticleHeader from '../components/ArticleHeader'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Article = ({ node }) => {
  return (
      <div className="article">
        <Helmet>
          <title>Hors sujet | Chocolate Free</title>
          <meta name="description" content="Chocolate free is a culinary diary of a chocoholic, sweet tooth young lady trying to re-create new sweet fruity and chocolaty version of some classic, or not, deserts."/>
        </Helmet>
        <ArticleHeader node={node} />
        {node.featureImage && <Img sizes={node.featureImage.sizes} alt={node.featureImage.title} title={node.featureImage.title} backgroundColor={"#f1f1f1"}/>}

        <p>{node.contentModules[0].copy.childMarkdownRemark.excerpt}</p>
        <Link rel='noopener' to={`/article/${node.slug}.html`}>Read more...</Link>
      </div>
  )
}

class HorsSujetPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <Layout>
        <div className="grid">
          {contentModules.map((module, i) => getLandingPageModule(module, i))}
          <div className="content">
            {articles.map(({ node }, i) => <Article node={node} key={i} />)}
          </div>
          <SideBar />
        </div>
      </Layout>
    )
  }
}

HorsSujetPage.propTypes = propTypes

export default HorsSujetPage

export const pageQuery = graphql`
  query HorsSujetPageQuery {
    allContentfulLandingPage(filter: {
      slug: {eq: "hors-sujet-page"}
    }){
      edges {
        node {
          contentModules {
            ... on ContentfulLandingPageImage {
              internal {
                type
              }
              image {
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
                featureImage {
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
      node_locale: { eq: "en-US" },
      section: { eq: "horsSujet" }
    }) {
      edges {
        node {
          id
          title
          slug
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
`
