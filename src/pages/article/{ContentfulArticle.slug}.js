import React from "react";
import { graphql } from "gatsby";
import ArticleHeader from "../../components/ArticleHeader";
import DisqusThread from "../../components/DisqusThread";
import Author from "../../components/Author";
import OG from "../../components/seo/og";
import Article from "../../components/seo/article";
import General from "../../components/seo/general";
import Twitter from "../../components/seo/twitter";
import getArticleModule from "../../utils/getArticleModule";
import Layout from "../../components/layout";

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticle;
    const {
      title,
      slug,
      contentModules,
      featureImage,
      author,
      publishDate,
      updatedAt,
    } = article;
    const featuredImageUrl =
      featureImage && featureImage.file ? featureImage.file.url : "";
    const excerpt =
      contentModules !== null
        ? contentModules[0].copy.childMarkdownRemark.excerpt
        : "";
    return (
      <Layout>
        <div className="content">
          <article className="article">
            <OG
              title={title}
              locale="en-US"
              type="article"
              description={excerpt}
              url={`https://chocolate-free.com/article/${slug}`}
              siteName="Chocolate Free"
              updateTime={updatedAt}
              publishedTime={publishDate}
              image={`https:${featuredImageUrl}?w=1200&h=630`}
              imageSecure={`https:${featuredImageUrl}?w=1200&h=630`}
            />

            <Article
              updateTime={updatedAt}
              publishedTime={publishDate}
              url={`https://chocolate-free.com/article/${slug}`}
            />

            <Twitter
              title={title}
              description={excerpt}
              image={`https:${featuredImageUrl}?w=1200&h=630`}
            />
            <General title={title} description={excerpt} />
            <ArticleHeader node={article} />
            {contentModules &&
              contentModules.map((module, i) => getArticleModule(module, i))}
            <Author author={author} />
            <div className="print:hidden"><DisqusThread id={slug} path={slug} title={title} /></div>
          </article>
        </div>
      </Layout>
    );
  }
}

export default ArticleTemplate;

export async function config() {
  // Optionally use GraphQL here
  const {data} = graphql`
  {
    allContentfulArticle(sort: {order: DESC, fields: publishDate}) {
      nodes {
        slug
      }
    }
  }`
  return ({ params }) => {
    const slugs = data.allContentfulArticle.nodes.map(s => s.slug)
    return {
      defer: slugs.indexOf(params.slug) > 9,
    }
  }
}

export const pageQuery = graphql`
  query articleQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      slug
      contentModules {
        ... on ContentfulArticleRecipe {
          internal {
            type
          }
          serves
          ingredients {
            childMarkdownRemark {
              html
            }
          }
          instructions {
            childMarkdownRemark {
              html
            }
          }
          image {
            title
            gatsbyImageData(
              width: 400
              formats: AUTO
              placeholder: BLURRED
              quality: 80
            )
          }
          title
          totalTime
          prepTime
          cookTime
        }
        ... on ContentfulArticleCopy {
          internal {
            type
          }
          copy {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
        ... on ContentfulArticleTwoImages {
          internal {
            type
          }
          left {
            title
            description
            gatsbyImageData(
              width: 420
              formats: AUTO
              placeholder: BLURRED
              quality: 80
            )
          }
          right {
            title
            description
            gatsbyImageData(
              width: 420
              formats: AUTO
              placeholder: BLURRED
              quality: 80
            )
          }
        }
        ... on ContentfulArticleImage {
          internal {
            type
          }
          image {
            title
            gatsbyImageData(
              width: 600
              formats: AUTO
              placeholder: BLURRED
              quality: 80
            )
          }
        }
      }
      publishDate
      updatedAt
      featureImage {
        title
        gatsbyImageData(
          width: 420
          formats: AUTO
          placeholder: BLURRED
          quality: 80
        )
      }
      author {
        fullName
        website
        bio {
          bio
        }
        avatar {
          gatsbyImageData(
            width: 150
            formats: AUTO
            placeholder: BLURRED
            quality: 80
          )
        }
      }
    }
  }
`;
