import React from 'react'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import SingleArticle from '../components/SingleArticle'
import SideBar from '../components/SideBar'
import getLandingPageModule from '../utils/getLandingPageModule'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AboutPage extends React.Component {
  render() {
    const articles = this.props.data.allContentfulArticle.edges
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <Layout>
        <div className="grid">
          <Helmet>
            <title>About | Chocolate Free</title>
            <meta name="description" content="Chocolate free is a culinary diary of a chocoholic, sweet tooth young lady trying to re-create new sweet fruity and chocolaty version of some classic, or not, deserts."/>
          </Helmet>
          {contentModules.map((module, i) => getLandingPageModule(module, i))}
          <div className="content">
            {articles.map(({ node }, i) => <SingleArticle node={node} key={i} />)}
          </div>
          <SideBar />
        </div>
      </Layout>
    )
  }
}

AboutPage.propTypes = propTypes

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    allContentfulLandingPage(filter: {
      slug: {eq: "about-page"}
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
      section: { eq: "about" }
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
            resolutions(width: 800) {
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
  }
`
