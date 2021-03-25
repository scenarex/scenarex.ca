const _ = require('lodash');
const locales = require('./src/utils/i18n');
const routes = require("./src/utils/routes.json");
const { replaceTrailing, localizedSlug, replaceBoth, wrapper } = require('./src/utils/gatsby-node-helpers');
const { getRootQuery } = require('gatsby-source-graphql-universal/getRootQuery');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const newsTemplate = require.resolve('./src/templates/news-post.js');
  const peopleTemplate = require.resolve('./src/templates/people-page.js');

  let documents = [];
  let proceed = true;
  let endCursor = null;

  while (proceed) {
    const result = await graphql(`
    query($endCursor: String) {
      prismic {
        _allDocuments(first: 20, after: $endCursor ,type_in: ["member", "news"]) {
          edges {
            node {
              _meta {
                lang
                uid
                type
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
            hasPreviousPage
            startCursor
          }
          totalCount
        }
      }
    }
    `, { endCursor });

    documents = documents.concat(result.data.prismic._allDocuments.edges);

    if (result.data.prismic._allDocuments.pageInfo.hasNextPage) {
      endCursor = result.data.prismic._allDocuments.pageInfo.endCursor;
    } else {
      proceed = false;
    }
  }

  let lang;
  documents.forEach(edge => {
  lang = edge.node._meta.lang === "en-ca" ? "en" : "fr"
    createPage({
      path: `/${lang}/${edge.node._meta.uid}`,
      component: edge.node._meta.type === "member" ? peopleTemplate : newsTemplate,
      context: {
        uid: edge.node._meta.uid,
        langKey: edge.node._meta.lang
      },
    })
  });
}