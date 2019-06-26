require('dotenv').config({
  path: `.env`,
})
const prismicHtmlSerializer = require('./src/prismic/htmlSerializer')
const prismicLinkResolver = require('./src/prismic/linkResolver')
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
      {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'scenarex',
        accessToken : `${process.env.API_KEY}`,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
        linkResolver: () => prismicLinkResolver,
        previews: true,
        path: "/preview",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/sass/main.scss", "src/sass/skel.scss"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
    resolve: `gatsby-plugin-favicon`,
     options: {
       logo: "./src/components/favicon.png",

       // WebApp Manifest Configuration
       appName: null, // Inferred with your package.json
       appDescription: null,
       developerName: null,
       developerURL: null,
       dir: 'auto',
       lang: 'en',
       background: '#fff',
       theme_color: '#fff',
       display: 'standalone',
       orientation: 'any',
       start_url: '/?homescreen=1',
       version: '1.0',

       icons: {
         android: true,
         appleIcon: true,
         appleStartup: true,
         coast: false,
         favicons: true,
         firefox: true,
         opengraph: false,
         twitter: false,
         yandex: false,
         windows: false
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
