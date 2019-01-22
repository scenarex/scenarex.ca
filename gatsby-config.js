module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/en`,
        name: "pagesEN"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts/fr`,
        name: "pagesFR"
      }
    },
    "gatsby-transformer-remark",
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/sass/main.scss", "src/sass/skel.scss"],
      },
    },
    `gatsby-plugin-react-helmet`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
/*require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})*/
