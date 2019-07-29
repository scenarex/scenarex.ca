// You can delete this file if you're not using it
const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
console.log("registering link resolver")
registerLinkResolver(require('./src/prismic/linkResolver').linkResolver);
console.log("registered link resolver")
