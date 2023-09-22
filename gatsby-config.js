require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.GATSBY_PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // htmlSerializer: () => prismicHtmlSerializer,
        linkResolver: require('./src/prismic/linkResolver').linkResolver
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/components/favicon.png',

        // WebApp Manifest Configuration
        name: 'Scenarex', // Inferred with your package.json
        dir: 'auto',
        lang: 'en',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/'
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-MLCY0NDQ65"
        ],
        gtagConfig: {
          anonymize_ip: true
        },
        pluginConfig: {
          head: true,
          respectDNT: true
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
