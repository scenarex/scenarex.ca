const _ = require('lodash')
const locales = require('./src/utils/i18n')
const routes = require('./src/utils/routes.json')
const {
  replaceTrailing,
  replaceBoth,
} = require('./src/utils/gatsby-node-helpers')
//const { getRootQuery } = require('gatsby-source-graphql-universal/getRootQuery')

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
      //  const rootQuery = getRootQuery(page.componentPath)
      // console.log('rootQuery>>>', rootQuery)
      // console.log(
      //   'onCreatePage>>>>>>>',
      //   page,
      //   'lang>>>',
      //   lang,
      //   '-----',
      //   locales[lang]
      // )
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
    // const result = await graphql(
    //   `
    //     query($endCursor: String) {
    //       prismic {
    //         _allDocuments(
    //           first: 20
    //           after: $endCursor
    //           type_in: ["member", "news"]
    //         ) {
    //           edges {
    //             node {
    //               _meta {
    //                 lang
    //                 uid
    //                 type
    //               }
    //             }
    //           }
    //           pageInfo {
    //             hasNextPage
    //             endCursor
    //             hasPreviousPage
    //             startCursor
    //           }
    //           totalCount
    //         }
    //       }
    //     }
    //   `,
    //   { endCursor }
    // )

    const result = await graphql(
      `
        query {
          allPrismicMember(limit: 10) {
            nodes {
              type
              uid
              lang
            }
          }
          allPrismicNews(limit: 10) {
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
    //   console.log('mimim11>>>>', result)

    memberDocuments = memberDocuments.concat(result.data.allPrismicMember.nodes)

    newsDocuments = newsDocuments.concat(result.data.allPrismicNews.nodes)

    allDocuments = allDocuments.concat(memberDocuments, newsDocuments)

    console.log(
      'mimim>>>>',
      // memberDocuments,
      // '----->>>',
      // newsDocuments,
      // '+++++',
      // allDocuments,
      // 'length>>>',
      // memberDocuments.length,
      // '+++',
      newsDocuments.length,
      '+++' + allDocuments.length
    )

    // if (result.data.allPrismicMember.pageInfo.hasNextPage) {
    //   endCursor = result.data.allPrismicMember.pageInfo.endCursor
    // } else {
    //   proceed = false
    // }
    endCursor = 2
    proceed = false
  }

  let lang
  allDocuments.forEach(edge => {
  //  console.log('jakooo milo>>>', edge.lang, '---', edge.uid)
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
