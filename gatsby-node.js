const _ = require('lodash')
const locales = require('./src/utils/i18n')
const routes = require('./src/utils/routes.json')
const {
  replaceTrailing,
  replaceBoth,
} = require('./src/utils/gatsby-node-helpers')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    deletePage(page)
    Object.keys(locales).map(lang => {
      page.path = replaceTrailing(page.path)
      // Remove the leading AND traling slash from path, e.g. --> categories
      let name = replaceBoth(page.path)
      if (name === 'dev-404-page') {
        return
      }
      const localizedPath = routes[name][locales[lang].path]
      if (locales[lang].default) {
        createPage({
          ...page,
          path: page.path,
          context: {
            ...page.context,
            langKey: lang,
          },
        })
      }
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          langKey: lang,
        },
      })
    })

    resolve()
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const newsTemplate = require.resolve('./src/templates/news-post.js')
  const peopleTemplate = require.resolve('./src/templates/people-page.js')

  let memberDocuments = []
  let newsDocuments = []
  let allDocuments = []
  let proceed = true
  let endCursor = null

  while (proceed) {
    const result = await graphql(
      `
        query {
          allPrismicMember(limit: 20) {
            nodes {
              type
              uid
              lang
            }
          }
          allPrismicNews(limit: 20) {
            nodes {
              type
              lang
              uid
            }
          }
        }
      `,
      { endCursor }
    )
    memberDocuments = memberDocuments.concat(result.data.allPrismicMember.nodes)

    newsDocuments = newsDocuments.concat(result.data.allPrismicNews.nodes)

    allDocuments = allDocuments.concat(memberDocuments, newsDocuments)
    proceed = false
  }

  let lang
  allDocuments.forEach(edge => {
    lang = edge.lang === 'en-ca' ? 'en' : 'fr'
    createPage({
      path: `/${lang}/${edge.uid}`,
      component: edge.type === 'member' ? peopleTemplate : newsTemplate,
      context: {
        uid: edge.uid,
        langKey: edge.lang,
      },
    })
  })
}
