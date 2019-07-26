// You can delete this file if you're not using it
const { registerLinkResolver } = require('gatsby-source-prismic-graphql');

registerLinkResolver(require('./src/prismic/linkResolver').linkResolver);
