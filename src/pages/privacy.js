import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'

const PrivacyPage = ({ data }) => {
  const page = data.prismic.allLegalpages.edges[0].node
  const lang = page._meta.lang
  return (
    <Layout
      title={'Privacy'}
      path={page._meta.uid}
      alternate={page._meta.alternateLanguages[0].uid}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <article className="privacy">
        <h2 className="sm:text-6xl text-4xl biggest">{page.title[0].text}</h2>
        {RichText.render(page.text)}
      </article>
    </Layout>
  )
}

// export const privacyQuery = graphql `
// query privacyQuery($langKey: String)
// {
//   prismic {
//     allLegalpages(lang: $langKey) {
//       edges {
//         node {
//           _meta {
//             uid
//             lang
//             alternateLanguages {
//               uid
//             }
//           }
//           text
//           title
//         }
//       }
//     }
//   }
//   ...LayoutFragment
// }
// `

// PrivacyPage.query = privacyQuery

 export default PrivacyPage
