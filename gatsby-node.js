const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              langKey
            }
            frontmatter {
              templateKey
              metadata {
                path
                language
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const defaultLanguage = "en"
    posts.forEach(edge => {
      if (edge.node.frontmatter.templateKey === "header") {
       return false;
       } else if (edge.node.frontmatter.templateKey === "footer") {
         return false;
       } else if (edge.node.frontmatter.templateKey === "external-link") {
         return false;
       }
       if (edge.node.fields.langKey === defaultLanguage) {
         createPage({
           path: edge.node.frontmatter.metadata.path,
           component: path.resolve(
             `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
           ),
           // additional data can be passed via context
           context: {
             id: edge.node.id,
             langKey: edge.node.fields.langKey,
             slug: edge.node.frontmatter.metadata.path
           },
         })
       }

      createPage({
        path: `${edge.node.fields.langKey}${edge.node.frontmatter.metadata.path}`,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id: edge.node.id,
          langKey: edge.node.fields.langKey,
          slug: `${edge.node.fields.langKey}${edge.node.frontmatter.metadata.path}`
        },
      })
    })
    //create page for news posts
    createPage({
      path: "/news",
      component: path.resolve(
        `src/templates/news-page.js`
      ),
      // additional data can be passed via context
      context: {
        langKey: "en",
        slug: "/news"
      },
    })
    createPage({
      path: "/en/news",
      component: path.resolve(
        `src/templates/news-page.js`
      ),
      // additional data can be passed via context
      context: {
        langKey: "en",
        slug: "/en/news"
      },
    })
    createPage({
      path: "/fr/nouvelles",
      component: path.resolve(
        `src/templates/news-page.js`
      ),
      // additional data can be passed via context
      context: {
        langKey: "fr",
        slug: "/fr/nouvelles"
      },
    })
  })
}
