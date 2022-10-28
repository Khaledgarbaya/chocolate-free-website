exports.createPages = async ({ graphql, actions }) => {
  const { createSlice, createRedirect, createPage } = actions;
  createSlice({
    id: `main-menu`,
    component: require.resolve(`./src/components/main-menu.js`),
  });
  // create Slice for each module
  createSlice({
    id: "recipe",
    component: require.resolve(
      `./src/components/content-modules/article-recipe.js`
    ),
  });
  createSlice({
    id: "copy",
    component: require.resolve(
      `./src/components/content-modules/article-copy.js`
    ),
  });
  createSlice({
    id: "image",
    component: require.resolve(
      `./src/components/content-modules/article-image.js`
    ),
  });
  createSlice({
    id: "twoImages",
    component: require.resolve(
      `./src/components/content-modules/article-two-images.js`
    ),
  });
  const result = await graphql(
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
  );
  if (result.errors) {
    throw result.errors;
  }
  result.data.allContentfulNavigation.edges.forEach((edge) => {
    edge.node.navigationElements.forEach((navElement) => {
      createRedirect({
        fromPath: `${navElement.page.slug}.html`,
        toPath: `${edge.node.slug}`,
        isPermanent: true,
      });
    });
  });
  result.data.allContentfulArticle.edges.forEach((edge) => {
    // create a redirect for each article since url structure changed
    createRedirect({
      fromPath: `/article/${edge.node.slug}.html`,
      toPath: `/article/${edge.node.slug}`,
      isPermanent: true,
    });
  });
};
