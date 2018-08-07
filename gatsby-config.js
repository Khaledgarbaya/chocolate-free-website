module.exports = {
  siteMetadata: {
    siteUrl: 'https://chocolate-free.com',
    title: 'Chocolate Free',
    description: 'Chocolate free website'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CHOCOLATE_FREE_CF_SPACE,
        accessToken: process.env.CHOCOLATE_FREE_CF_TOKEN
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-89281107-1',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulArticle } }) => {
              return allContentfulArticle.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.contentModules[0].copy.childMarkdownRemark.excerpt,
                  url: site.siteMetadata.siteUrl + '/article/' + edge.node.slug +'.html',
                  guid: site.siteMetadata.siteUrl + '/article/' + edge.node.slug + '.html',
                });
              });
            },
            query: `
            {
              allContentfulArticle(
                limit: 1000,
                sort: { order: DESC, fields: [publishDate] },
              ) {
                edges {
                  node {
                    contentModules {
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
                    }
                    slug 
                    title
                    date: publishDate
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'name': 'Chocolate-free',
        'short_name': 'ChocoFree',
        'start_url': '/',
        'background_color': '#e8e8e8',
        'icons': [
          {
            'src': '/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': '/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ],
        'theme_color': '#e8e8e8',
        'display': 'standalone'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass'
  ],
}
