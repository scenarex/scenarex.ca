module.exports = {
  siteMetadata: {
    title: `Scenarex Website`,
    author: `Scenarex Inc.`,
    description: `Public facing website for Scenarex Inc.`,
    siteUrl: `https://scenarex.ca`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/sass/main.scss", "src/sass/skel.scss"],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
        publicPath: `admin`,
        htmlTitle: `Content Manager`,
        modulePath: `${__dirname}/src/cms/cms.js`,
        }
    },
    {
       resolve: "gatsby-source-filesystem",
       options: {
         path: `${__dirname}/src/pages`,
         name: "pages",
       },
     },
     {
        resolve: "gatsby-source-filesystem",
        options: {
          path: `${__dirname}/src/pages/about`,
          name: "blank-pages",
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: `en`,
        langKeyDefault: `en`,
        useLangKeyLayout: false,
        prefixDefault: true,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
