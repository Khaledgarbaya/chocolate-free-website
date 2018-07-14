import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'
import SingleArticle from '../components/SingleArticle'
import SideBar from '../components/SideBar'
import getLandingPageModule from '../utils/getLandingPageModule'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PortfolioPage extends React.Component {
  render() {
    const contentModules = this.props.data.allContentfulLandingPage.edges[0].node.contentModules
    return (
      <div className="grid portfolio">
        {contentModules.map((module, i) => getLandingPageModule(module, i))}
      </div>
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
