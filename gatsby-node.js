const _ = require('lodash');
const locales = require('./src/utils/i18n');
const routes = require("./src/utils/routes.json");
const { replaceTrailing, localizedSlug, replaceBoth, wrapper } = require('./src/utils/gatsby-node-helpers');
const { getRootQuery } = require('gatsby-source-graphql-universal/getRootQuery');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (page.path === "/news/"){
  return new Promise(resolve => {
    deletePage(page)
    Object.keys(locales).map(lang => {

      page.path = replaceTrailing(page.path)

      // Remove the leading AND traling slash from path, e.g. --> categories
      let name = replaceBoth(page.path)
      const localizedPath = routes[name][locales[lang].path]
      const rootQuery = getRootQuery(page.componentPath);
      if (locales[lang].default) {
        createPage({
          ...page,
          path: page.path,
          context: {
            rootQuery: rootQuery,
            lang: lang
          }
        })
      }
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          lang: lang
        }
      })
    })

    resolve()
  })
  }
}
