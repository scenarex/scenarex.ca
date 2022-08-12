import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'

const IndexPage = ({ data }) => {
  console.log('padamil111>>>', data)
  let page = data.prismicHome
  console.log('padamil222>>>', page)
  let tools
  let partners
  for (let i = 0; i < page.data.body.length; i++) {
    if (page.data.body[i].__typename === 'PrismicHomeDataBodyPartners') {
      partners = page.data.body[i]
    } else {
      tools = page.data.body[i]
    }
  }
  console.log(
    'homeeeeee>>>>>>>',
    page.alternate_languages[0].lang,
    'partners jak>>>>',
    partners,
    '---',
    'tools>>>',
    tools
  )
  return (
    <Layout
      title={page.data.title.text}
      path={page.lang}
      alternate={page.alternate_languages[0].lang}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <main>
        <section className="masthead">
          {RichText.render(page.data.text.richText)}
        </section>
        <section className="masthead upper-border">
          <div className="big">
            {RichText.render(page.data.body[0].primary.partners_title.richText)}
          </div>
          {partners.items.length > 0 && (
            <div className="row flex-item md:flex-row sm:flex-col md:items-stretch ">
              {partners.items.map((partner, i) => (
                <div className="flex-1 text-center" key={i}>
                  <a href={partner ? partner.link.url : ''}>
                    <img
                      className="grey"
                      src={partner.img.url}
                      style={{ maxHeight: '60px' }}
                      alt=""
                    />
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="masthead upper-border">
          <div className="big">
            {RichText.render(page.data.body[1].primary.tools_title.richText)}
          </div>
          {tools.items.length > 0 && (
            <div className="row flex-item">
              {tools.items.map((tool, i) => (
                <div
                  className="md:w-3/12 w-full ml-0 pl-6 block md:flex-item"
                  key={i}
                >
                  <span className="fa-layers fa-fw fa-8x">
                    <i className="fa fa-circle icon-background"></i>
                    <i
                      className={tool.icon.text}
                      data-fa-transform="shrink-6"
                    ></i>
                  </span>
                  <h2>
                    <a href={tool.link.url}>
                      {RichText.render(tool.name.richText)}
                    </a>
                  </h2>
                  {RichText.render(tool.text1.richText)}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </Layout>
  )
}

// export const homeQuery = graphql`
//   query homeQuery($langKey: String) {
//     prismic {
//       allHomes(lang: $langKey) {
//         edges {
//           node {
//             title
//             _meta {
//               uid
//               lang
//               alternateLanguages {
//                 uid
//                 lang
//               }
//             }
//             text
//             body {
//               __typename
//               ... on PRISMIC_HomeBodyTools {
//                 fields {
//                   name
//                   icon
//                   text1
//                   link {
//                     ... on PRISMIC__ExternalLink {
//                       url
//                     }
//                   }
//                 }
//               }
//               ... on PRISMIC_HomeBodyPartners {
//                 fields {
//                   link {
//                     ... on PRISMIC__ExternalLink {
//                       url
//                     }
//                   }
//                   img
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     ...LayoutFragment
//   }
// `

export const homeQuery = graphql`
  query homeQuery($langKey: String) {
    prismicHome(lang: { eq: $langKey }) {
      id
      uid
      lang
      data {
        title {
          text
        }
        text {
          text
          richText
        }
        body {
          __typename
          ... on PrismicHomeDataBodyPartners {
            items {
              img {
                alt
                copyright
                url
              }
              link {
                url
              }
            }
            primary {
              partners_title {
                richText
                text
              }
            }
          }
          ... on PrismicHomeDataBodyTools {
            items {
              icon {
                text
              }
              link {
                url
              }
              name {
                text
                richText
              }
              text1 {
                text
                richText
              }
            }
            primary {
              tools_title {
                richText
                text
              }
            }
          }
        }
      }
      alternate_languages {
        lang
        uid
      }
    }
    ...LayoutFragment
  }
`

IndexPage.query = homeQuery

export default IndexPage
