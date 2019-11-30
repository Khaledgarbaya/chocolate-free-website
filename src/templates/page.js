import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { graphql, Link } from 'gatsby';
import SideBar from '../components/SideBar';
import getLandingPageModule from '../utils/getLandingPageModule';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const Article = ({ node }) => {
  const excerpt =
    node.contentModules !== null
      ? node.contentModules[0].copy.childMarkdownRemark.excerpt
      : '';
  return (
    <div
      className="w-full md:w-1/2 inline-block max-w-xl p-3 flex items-center justify-center flex-col mb-8 border-b-2"
      to={`/article/${node.slug}.html`}
    >
      <div className="flex-1">
        <div>
          {node.featureImage && (
            <div
              className="bg-cover aspect-ratio-16x9"
              style={{
                backgroundImage: `url(https:${node.featureImage.file.url}?w=640&h=360&fit=thumb)`,
              }}
            ></div>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <h3 className="font-heading text-2xl sm:text-2xl text-black no-underline mb-4">
            {node.title}
          </h3>
          <p className="font-paragraph h-64 text-gray-700 text-base">
            {excerpt}
          </p>
        </div>
      </div>
      <Link
        className="inline-block font-paragraph border-2 border-black text-grey-600 text-md mt-4 w-1/2 inline-block text-center  mx-auto capitalize p-2"
        to={`/article/${node.slug}.html`}
      >
        Read more
      </Link>
    </div>
  );
};
const PageTemplate = ({ data }) => {
  let { articles, pageContent, hideSideBar } = data.contentfulPage;
  pageContent = pageContent || {};
  articles = articles || [];
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        return (
          <h1 className="font-heading text-5xl w-full text-center inline-block mb-5">
            {children}
          </h1>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
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
        <div className={`${hideSideBar ? '' : 'md:w-2/3'} flex flex-wrap`}>
          <div>{documentToReactComponents(pageContent.json, options)}</div>
          <div className="w-full flex flex-wrap">
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
        json
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
          file {
            url
          }
        }
      }
    }
  }
`;
export default PageTemplate;
