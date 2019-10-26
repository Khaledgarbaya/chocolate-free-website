import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

const MainMenu = () => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      contentfulNavigation(slug: {eq: "main-menu"}) {
        title
        navigationElements {
          title
          page {
            slug
          }
        }
     	}
    }
  `)
  const { navigationElements = [] } = data.contentfulNavigation
  console.log(navigationElements)
  return (

      <nav className="sm:flex sm:justify-center w-full px-2 py-2 mx-auto" role="navigation">
        {navigationElements.map(({title, page: {slug}}) => (
          <Link 
            className="w-full block py-2 sm:mx-2 text-center sm:w-auto"
            to={slug}>{title}</Link>
        ))
        }
    </nav>
  )
}

export default MainMenu
