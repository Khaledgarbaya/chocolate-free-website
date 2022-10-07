import React from "react";
import { graphql, Link } from "gatsby";

const MainMenu = ({ data }) => {
  const { navigationElements = [] } = data.contentfulNavigation;
  return (
    <nav
      className="sm:flex sm:justify-center w-full px-2 py-2 mx-auto"
      role="navigation"
    >
      {navigationElements.map(({ title, id, page: { slug } }) => (
        <Link
          key={id}
          className="w-full block py-2 sm:mx-2 text-center sm:w-auto"
          to={slug}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export const query = graphql`
  query MainMenuQuery {
    contentfulNavigation(slug: { eq: "main-menu" }) {
      title
      navigationElements {
        title
        id
        page {
          slug
        }
      }
    }
  }
`;
export default MainMenu;
