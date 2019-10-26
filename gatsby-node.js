const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const paginate = require('./utils/paginate');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulArticle(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const articleTemplate = path.resolve(`./src/templates/article.js`);
        const pageTemplate = path.resolve('./src/templates/page.js');

        _.each(result.data.allContentfulPage.edges, edge => {
          createPage({
            path: edge.node.slug,
            component: slash(pageTemplate),
            context: {
              slug: edge.node.slug,
            },
          });
        });
        _.each(result.data.allContentfulArticle.edges, edge => {
          createPage({
            path: `/article/${edge.node.slug}.html`,
            component: slash(articleTemplate),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
            },
          });
        });
      })
      .then(resolve);
  });
};
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/HorsSujet/)) {
      page.matchPath = '/hors-sujet.html';

      // Update the page.
      createPage(page);
    }

    if (page.path.match(/^\/About/)) {
      page.matchPath = '/about.html';

      createPage(page);
    }

    resolve();
  });
};
