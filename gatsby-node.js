const _ = require(`lodash`);

const getSliceAliasForContentModel = (
  { internal: { type }, id },
  containerId,
  index
) => {
  switch (type) {
    case "ContentfulArticleRecipe":
      return { [`recipe-${index}-${containerId}`]: `recipe-${id}` };
    case "ContentfulArticleCopy":
      return { [`copy-${index}-${containerId}`]: `copy-${id}` };
    case "ContentfulArticleTwoImages":
      return { [`twoImages-${index}-${containerId}`]: `twoImages-${id}` };
    case "ContentfulArticleImage":
      return { [`image-${index}-${containerId}`]: `image-${id}` };
    default:
      throw new Error(`Unknown content model type: ${type}`);
  }
};
exports.createPages = ({ graphql, actions }) => {
  const { createSlice, createRedirect, createPage } = actions;
  createSlice({
    id: `main-menu`,
    component: require.resolve(`./src/components/main-menu.js`),
  });
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulArticle(sort: { publishDate: DESC }) {
            edges {
              node {
                id
                slug
                contentModules {
                  ... on ContentfulArticleRecipe {
                    internal {
                      type
                    }
                    id
                  }
                  ... on ContentfulArticleCopy {
                    internal {
                      type
                    }
                    id
                  }
                  ... on ContentfulArticleTwoImages {
                    internal {
                      type
                    }
                    id
                  }
                  ... on ContentfulArticleImage {
                    internal {
                      type
                    }
                    id
                  }
                }
              }
            }
          }
          allContentfulNavigation {
            edges {
              node {
                navigationElements {
                  page {
                    slug
                  }
                }
              }
            }
          }
        }
      `
    )
      .then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        _.each(result.data.allContentfulNavigation.edges, (edge) => {
          _.each(edge.node.navigationElements, (navElement) => {
            createRedirect({
              fromPath: `${navElement.page.slug}.html`,
              toPath: `${edge.node.slug}`,
              isPermanent: true,
            });
          });
        });
        _.each(result.data.allContentfulArticle.edges, (edge, index) => {
          let slices = [];
          if (edge.node.contentModules && edge.node.contentModules.length > 0) {
            slices = edge.node.contentModules.map((contentModule, index) => {
              return getSliceAliasForContentModel(
                contentModule,
                edge.node.id,
                index
              );
            });
          }
          slices.forEach((slice) => {
            const sliceAlias = Object.keys(slice)[0];
            let component = null;
            if (sliceAlias.indexOf("recipe") > -1) {
              component = require.resolve(
                `./src/components/content-modules/article-recipe.js`
              );
            } else if (sliceAlias.indexOf("copy") > -1) {
              component = require.resolve(
                `./src/components/content-modules/article-copy.js`
              );
            } else if (sliceAlias.indexOf("twoImages") > -1) {
              component = require.resolve(
                `./src/components/content-modules/article-two-images.js`
              );
            } else if (sliceAlias.indexOf("image") > -1) {
              component = require.resolve(
                `./src/components/content-modules/article-image.js`
              );
            }
            if (component) {
              console.log(Object.values(slice)[0]);
              createSlice({
                id: Object.values(slice)[0],
                component,
              });
            }
          });

          createPage({
            path: `article/${edge.node.slug}`,
            component: require.resolve(`./src/templates/article-template.js`),
            context: {
              id: edge.node.id,
            },
            slices: {
              ...slices.reduce(
                (acc, slice) => ({
                  ...acc,
                  [Object.keys(slice)[0]]: Object.values(slice)[0],
                }),
                {}
              ),
            },
          });
          createRedirect({
            fromPath: `/article/${edge.node.slug}.html`,
            toPath: `/article/${edge.node.slug}`,
            isPermanent: true,
          });
        });
      })
      .then(resolve);
  });
};
