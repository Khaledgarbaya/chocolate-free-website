const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const paginate = require('./utils/paginate')

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
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
      }
    `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const articleTemplate = path.resolve(`./src/templates/article.js`)
        const pageTemplate = path.resolve('./src/templates/Home/index.js')
        paginate(
          createPage,
          pageTemplate,
          '/article',
          result.data.allContentfulArticle.edges.length,
          3
        )
        console.log('after paginate')
        _.each(result.data.allContentfulArticle.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/article/${edge.node.slug}.html`,
            component: slash(articleTemplate),
            context: {
              id: edge.node.id,
              slug: edge.node.slug
            },
          })
        })
      })
      .then(resolve)
  })
}
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/HorsSujet/)) {
      page.matchPath = "/hors-sujet.html"

      // Update the page.
      createPage(page)
    }

    if (page.path.match(/^\/About/)) {
      page.matchPath = "/about.html"

      createPage(page)
    }

    resolve()
  })
}
