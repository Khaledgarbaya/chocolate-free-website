import React from 'react'
import {graphql, Link} from 'gatsby'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import SingleArticle from '../components/SingleArticle'
import SideBar from '../components/SideBar'
import getLandingPageModule from '../utils/getLandingPageModule'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PortfolioPage extends React.Component {
  render() {
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <Layout>
        <div className="flex flex-wrap">
          <Helmet>
            <title>Protfolio | Chocolate Free</title>
            <meta name="description" content="Chocolate free is a culinary diary of a chocoholic, sweet tooth young lady trying to re-create new sweet fruity and chocolaty version of some classic, or not, deserts."/>
          </Helmet>
          {contentModules.map((module, i) => getLandingPageModule(module, i))}
        </div>
      </Layout>
    )
  }
}

PortfolioPage.propTypes = propTypes

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioPageQuery {
    allContentfulLandingPage(filter: {
      slug: {eq: "portfolio-page"}
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
            ... on ContentfulLandingPageGallery {
              internal {
                type
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
               images {
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
  }
`
