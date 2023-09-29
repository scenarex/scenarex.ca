// const _ = require("lodash");
// const locales = require("./src/utils/i18n");
// const routes = require("./src/utils/routes.json");
// const {
//   replaceTrailing,
//   replaceBoth,
// } = require("./src/utils/gatsby-node-helpers");

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions;
//   return new Promise((resolve) => {
//     [("en", "fr")].map((lang) => {
//       page.path = replaceTrailing(page.path);
//       // Remove the leading AND traling slash from path, e.g. --> categories
//       let name = replaceBoth(page.path);
//       if (name === "dev-404-page") {
//         return;
//       }
//       if (lang === "en") {
//         createPage({
//           ...page,
//           path: page.path,
//           context: {
//             ...page.context,
//             lang: lang,
//           },
//         });
//       }
//       return createPage({
//         ...page,
//         path: `/${lang}/${page.uid}`,
//         context: {
//           lang: lang,
//         },
//       });
//     });

//     resolve();
//   });
// };

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions
//   const newsTemplate = require.resolve('./src/templates/news-post.js')
//   const peopleTemplate = require.resolve('./src/templates/people-page.js')

//   let memberDocuments = []
//   let newsDocuments = []
//   let allDocuments = []
//   let proceed = true
//   let endCursor = null

//   while (proceed) {
//     const result = await graphql(
//       `
//         query {
//           allPrismicMember(limit: 20) {
//             nodes {
//               type
//               uid
//               lang
//             }
//           }
//           allPrismicNews(limit: 20) {
//             nodes {
//               type
//               lang
//               uid
//             }
//           }
//         }
//       `,
//       { endCursor }
//     )
//     memberDocuments = memberDocuments.concat(result.data.allPrismicMember.nodes)

//     newsDocuments = newsDocuments.concat(result.data.allPrismicNews.nodes)

//     allDocuments = allDocuments.concat(memberDocuments, newsDocuments)
//     proceed = false
//   }

//   let lang
//   allDocuments.forEach(edge => {
//     lang = edge.lang === 'en-ca' ? 'en' : 'fr'
//     createPage({
//       path: `/${lang}/${edge.uid}`,
//       component: edge.type === 'member' ? peopleTemplate : newsTemplate,
//       context: {
//         uid: edge.uid,
//         langKey: edge.lang,
//       },
//     })
//   })
// }


const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryData = await graphql(`
    {
      allPrismicAbout(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicBookchain(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicContact(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicHome(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicMember(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicNews(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicNewsroom(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicPrivacy(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
      allPrismicProtection(filter: {lang: {in: ["en","fr"]}}) {
        nodes {
          id
          lang
          uid
        }
      }
    }
  `)
  
  queryData.data.allPrismicAbout.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/about.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicBookchain.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/bookchain.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicContact.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/contact.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicHome.nodes.forEach((page) => {
    createPage({
      path: page.lang === "en" ? "/" : `/${page.lang}`,
      component: path.resolve(__dirname, 'src/templates/home.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicMember.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/member.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicNews.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/news.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicNewsroom.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/newsroom.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicPrivacy.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/privacy.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  queryData.data.allPrismicProtection.nodes.forEach((page) => {
    createPage({
      path: `/${page.lang}/${page.uid}`,
      component: path.resolve(__dirname, 'src/templates/protection.js'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
}