import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'

const PrivacyPage = ({ data }) => {
  const page = data.allPrismicLegalpage.edges[0].node
  const lang = page.data.lang
  return (
    <Layout
      title={page.data.title.text}
      path={page.data.uid}
      alternate={page.alternate_languages[0].uid}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <article className="privacy">
        <h2 className="sm:text-6xl text-4xl biggest">{page.data.title.text}</h2>
        {RichText.render(page.data.text.richText)}
      </article>
    </Layout>
  )
}

export const privacyQuery = graphql`
  query privacyQuery($langKey: String) {
    allPrismicLegalpage(filter: { lang: { eq: $langKey } }) {
      edges {
        node {
          uid
          lang
          data {
            title {
              richText
              text
            }
            text {
              text
              richText
            }
          }
          alternate_languages {
            uid
          }
        }
      }
    }
    ...LayoutFragment
  }
`

PrivacyPage.query = privacyQuery

export default PrivacyPage
