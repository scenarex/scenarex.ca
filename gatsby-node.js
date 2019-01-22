const path = require("path");
exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  const postTemplate = path.resolve(`src/templates/news-post.js`);
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path ? node.frontmatter.path : "/news",
        component: postTemplate
      })
    })
  })
}
