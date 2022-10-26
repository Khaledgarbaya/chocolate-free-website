const _ = require(`lodash`);
exports.createPages = ({ graphql, actions }) => {
  const { createSlice, createRedirect } = actions;
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
