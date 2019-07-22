const _ = require('lodash');
const locales = require('./src/utils/i18n');
const routes = require("./src/utils/routes.json");
const { replaceTrailing, localizedSlug, replaceBoth, wrapper } = require('./src/utils/gatsby-node-helpers');
const { getRootQuery } = require('gatsby-source-graphql-universal/getRootQuery');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (page.path === "/preview") {
    return;
  }

  return new Promise(resolve => {
    deletePage(page)
    Object.keys(locales).map(lang => {

      page.path = replaceTrailing(page.path)

      // Remove the leading AND traling slash from path, e.g. --> categories
      let name = replaceBoth(page.path)
      if (name === "dev-404-page") {
        return;
      }
      const localizedPath = routes[name][locales[lang].path]
      const rootQuery = getRootQuery(page.componentPath);
      if (locales[lang].default) {
        createPage({
          ...page,
          path: page.path,
          context: {
            rootQuery: rootQuery,
            langKey: lang
          }
        })
      }
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          langKey: lang
        }
      })
    })

    resolve()
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const newsTemplate = require.resolve('./src/templates/news-post.js')
  const peopleTemplate = require.resolve('./src/templates/people-page.js')


  return graphql(`
    query {
      members : prismic {
        allMembers {
          edges {
            node {
              _meta {
                uid
                lang
              }
            }
          }
        }
      }
      newsPosts2019 : prismic {
        allNewss(where:{post_date_after:"2019-01-01"}) {
          edges {
            node {
              _meta {
                uid
                lang
              }
            }
          }
        }
      }
      newsPostsOld : prismic {
        allNewss(where:{post_date_before:"2019-01-01"}) {
          edges {
            node {
              _meta {
                uid
                lang
              }
            }
          }
        }
      }
    }
  `).then (result => {
    if (result.errors) {
      throw result.errors
    }
    const externalLinks = result.data.members.allMembers;
    const newsPosts2019 = result.data.newsPosts2019.allNewss;
    const newsPostsOld = result.data.newsPostsOld.allNewss;
    const rootQuery1 = getRootQuery(newsTemplate);
    const rootQuery2 = getRootQuery(peopleTemplate);
    let lang;
    externalLinks.edges.forEach(edge => {
    lang = edge.node._meta.lang === "en-ca" ? "en" : "fr"
      createPage({
        path: `/${lang}/${edge.node._meta.uid}`,
        component: peopleTemplate,
        context: {
          rootQuery: rootQuery2,
          uid: edge.node._meta.uid,
          langKey: edge.node._meta.lang
        },
      })
    })
    newsPosts2019.edges.forEach(edge => {
      lang = edge.node._meta.lang === "en-ca" ? "en" : "fr"
      createPage({
        path: `/${lang}/${edge.node._meta.uid}`,
        component: newsTemplate,
        context: {
          rootQuery: rootQuery1,
          uid: edge.node._meta.uid,
          langKey: edge.node._meta.lang
        },
      })
    })
    newsPostsOld.edges.forEach(edge => {
      lang = edge.node._meta.lang === "en-ca" ? "en" : "fr"
      createPage({
        path: `/${lang}/${edge.node._meta.uid}`,
        component: newsTemplate,
        context: {
          uid: edge.node._meta.uid,
          langKey: edge.node._meta.lang
        },
      })
    })
  })
}
