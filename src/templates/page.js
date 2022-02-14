import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { graphql, Link } from "gatsby";
import SideBar from "../components/SideBar";
import getLandingPageModule from "../utils/getLandingPageModule";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Article = ({ node }) => {
  const excerpt =
    node.contentModules !== null
      ? node.contentModules[0].copy.childMarkdownRemark.excerpt
      : "";
  return (
    <Link
      className="block overflow-hidden rounded-lg shadow hover:shadow-xl"
      to={`/article/${node.slug}`}
    >
      <div className="relative">
        <GatsbyImage
          className="absolute object-cover w-full h-full"
          image={getImage(node.featureImage)}
          alt={node.featureImage.title}
        />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="mb-4 text-sm text-black no-underline font-heading sm:text-lg">
          {node.title}
        </h3>
        <p className="text-sm text-gray-700 font-paragraph">{excerpt}</p>
      </div>
    </Link>
  );
};
const PageTemplate = ({ data }) => {
  let { articles, pageContent, hideSideBar } = data.contentfulPage;
  articles = articles || [];
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => {
        return (
          <h1 className="inline-block w-full mb-5 text-5xl text-center font-heading">
            {children}
          </h1>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        return getLandingPageModule(node.data.target);
      },
    },
  };
  return (
    <Layout>
      <div className="flex flex-wrap">
        <Helmet>
          <title>Chocolate Free</title>
          <meta
            name="description"
            content="Chocolate free is a culinary diary of a chocoholic, sweet tooth young lady trying to re-create new sweet fruity and chocolaty version of some classic, or not, deserts."
          />
        </Helmet>
        <div className={`${hideSideBar ? "" : "md:w-2/3"} flex flex-wrap`}>
          {pageContent && <div>{renderRichText(pageContent, options)}</div>}
          <div
            className={`${
              articles.length < 3 ? "max-h-0" : ""
            } grid p-2 gap-5 max-2lg mx-auto sm:grid-cols-2 lg:max-w-none`}
          >
            {articles
              .sort((a, b) => {
                const d1 = new Date(a.publishDate);
                const d2 = new Date(b.publishDate);
                if (d1 > d2) {
                  return -1;
                } else if (d1 < d2) {
                  return 1;
                } else {
                  return 0;
                }
              })
              .map((article, i) => (
                <Article node={article} key={article.id} />
              ))}
          </div>
        </div>
        {!hideSideBar && <SideBar />}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query NewPageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      hideSideBar
      pageContent {
        raw
        references {
          ... on ContentfulLandingPageGallery {
            __typename
            contentful_id
            images {
              title
              gatsbyImageData(
                width: 312
                height: 486
                placeholder: TRACED_SVG
                quality: 100
              )
            }
          }
          ... on ContentfulLandingPageImage {
            __typename
            contentful_id
            image {
              file {
                url
              }
            }
          }
        }
      }
      articles {
        author {
          fullName
          website
        }
        title
        id
        title
        slug
        section
        publishDate
        contentModules {
          ... on ContentfulArticleCopy {
            copy {
              childMarkdownRemark {
                html
                excerpt
              }
            }
          }
        }
        featureImage {
          title
          gatsbyImageData(
            width: 550
            height: 368
            formats: AUTO
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  }
`;
export default PageTemplate;
