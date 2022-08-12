import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Header } from './header'
import { Footer } from './footer'

class Layout extends React.Component {
  render() {
    const {
      headerData,
      footerData,
      children,
      path,
      title,
      alternate,
    } = this.props
    return (
      <div className="container mx-auto">
        <Helmet defaultTitle={title} titleTemplate={`%s | SCENAREXinc`}>
          <meta name="title" content={title} />
          <title>{title}</title>
          <meta
            property="og:image"
            content={'https://www.scenarex.ca/img/logo-colour.png'}
          />
          <meta property="og:title" content={title} />
          <script
            defer
            src="https://kit.fontawesome.com/dbe50f6069.js"
          ></script>
          <script>
            {`window.prismic = {
              endpoint: 'https://scenarex.cdn.prismic.io/api/v2'
            };`}
          </script>
          <script
            type="text/javascript"
            src="https://static.cdn.prismic.io/prismic.min.js"
          ></script>
        </Helmet>
        <Header headerData={headerData} path={path} alternate={alternate} />
        <main>{children}</main>
        <Footer footerData={footerData} />
      </div>
    )
  }
}

export default Layout

// export const query = graphql`
//   fragment LayoutFragment on Query{
//     headerData: prismic {
//       allHeaders (lang: $langKey) {
//         edges {
//         node {
//           logo
//           _meta {
//             lang
//           }
//           navigation {
//             link {
//               _linkType
//               ... on PRISMIC_About {
//                 title
//                 _meta {
//                   uid
//                 }
//               }
//               ... on PRISMIC_Newsroom {
//                 title
//                 _meta {
//                   uid
//                 }
//               }
//               ... on PRISMIC_Contact {
//                 title
//                 _meta {
//                   uid
//                 }
//               }
//               ... on PRISMIC_Bookchain {
//                 title
//                 _meta {
//                   uid
//                 }
//               }
//             }
//           }
//           header_name
//         }
//       }
//     }
//   }
//   footerData: prismic {
//     allFos (lang: $langKey) {
//     edges {
//       node {
//         _meta {
//           lang
//         }
//         column1_title
//         column1_items {
//           item_url {
//             ... on PRISMIC__Document {
//               _meta {
//                 uid
//                 lang
//               }
//             }
//           }
//           item_label
//         }
//         column2_title
//         column2_items {
//           item_label
//           item_icon
//           item_url {
//             ... on PRISMIC__ExternalLink {
//               url
//             }
//           }
//         }
//         column3_title
//         column3_items {
//           item_label
//           item_url {
//             ... on PRISMIC__ExternalLink {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// }
// }
// `

export const query = graphql`
  fragment LayoutFragment on Query {
    headerData: prismicHeader(lang: { eq: $langKey }) {
      lang
      data {
        logo {
          alt
          copyright
          url
        }
        header_name
        navigation {
          link {
            link_type
            document {
              ... on PrismicAbout {
                uid
                data {
                  title {
                    text
                  }
                }
              }
              ... on PrismicNewsroom {
                uid
                data {
                  title {
                    text
                  }
                }
              }
              ... on PrismicContact {
                uid
                data {
                  title {
                    text
                  }
                }
              }
              ... on PrismicBookchain {
                data {
                  title {
                    text
                  }
                }
                uid
              }
            }
          }
        }
      }
    }

    footerData: prismicFo(lang: { eq: $langKey }) {
      lang
      data {
        column1_title {
          text
          richText
        }
        column1_items {
          item_url {
            uid
            lang
          }
          item_label
        }
        column2_title {
          text
          richText
        }
        column2_items {
          item_icon
          item_label
          item_url {
            url
          }
        }
        column3_title {
          text
        }
        column3_items {
          item_label
          item_url {
            url
          }
        }
      }
    }
  }
`
