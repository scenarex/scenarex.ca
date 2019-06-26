const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/prismic/linkResolver');

registerLinkResolver(linkResolver);
