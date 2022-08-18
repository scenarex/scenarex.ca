import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import translations from '../utils/translations.json'

const ContactPage = ({ data }) => {
  const page = data.allPrismicContact.edges[0].node
  const lang = page.lang.split('-')[0]
  return (
    <Layout
      title={'Contact'}
      path={page.uid}
      alternate={page.alternate_languages[0].uid}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <main>
        <h2 className="sm:text-6xl text-4xl biggest">{page.data.title.text}</h2>
        <div className="row">
          <div className="md:w-6/12 w-full">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={page.data.map_link.url}
              className="image fit"
            >
              <img src={page.data.map.url} alt="Map" />
            </a>
          </div>
          <div className="md:w-6/12 w-full address">
            <h3>
              <i className="fas fa-map-marker-alt"></i>{' '}
              {translations['address'][lang]}
            </h3>
            {RichText.render(page.data.address.richText)}
          </div>
        </div>
        <div className="row">
          <div className="md:w-4/12 w-full">
            <h3>
              <i className="fas fa-envelope"></i> {translations['email'][lang]}
            </h3>
            <a
              href={`mailto:${page.data.email.text}`}
              className="text-bookchainGreen"
            >
              {page.data.email.text}
            </a>
          </div>
          <div className="md:w-4/12 w-full)">
            <h3>
              <i className="fas fa-mobile-alt"></i>{' '}
              {translations['phone'][lang]}
            </h3>
            <a
              href={`tel:${page.data.phone.text}`}
              className="text-bookchainGreen"
            >
              {page.data.phone.text}
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const contactQuery = graphql`
  query contactQuery($langKey: String) {
    allPrismicContact(filter: { lang: { eq: $langKey } }) {
      edges {
        node {
          uid
          lang
          data {
            address {
              richText
              text
            }
            email {
              richText
              text
            }
            map {
              url
            }
            map_link {
              url
            }
            phone {
              text
              richText
            }
            title {
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
export default ContactPage
ContactPage.query = contactQuery;
