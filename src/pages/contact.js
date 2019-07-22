import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';
import translations from "../utils/translations.json";

const ContactPage = ({ data }) => {
  const page = data.prismic.allContacts.edges[0].node;
  const lang = (page._meta.lang.split("-") )[0];
  return (
  <Layout title={"Contact"} path={page._meta.uid} headerData={data.headerData} footerData={data.footerData}>
    <main>
      <h2 className="sm:text-6xl text-4xl biggest">{(page.title[0].text)}</h2>
      <div className="row">
        <div className="md:w-6/12 w-full">
          <a target="_blank" rel="noopener noreferrer" href={page.map_link.url} className="image fit">
            <img src={page.map.url} alt="Map" />
          </a>
        </div>
        <div className="md:w-6/12 w-full address">
          <h3><i className="fas fa-map-marker-alt"></i> {translations["address"][lang]}</h3>
          {RichText.render(page.address)}
        </div>
      </div>
      <div className="row">
        <div className="md:w-4/12 w-full">
          <h3><i className="fas fa-envelope"></i> {translations["email"][lang]}</h3>
          <a href={`mailto:${page.email[0].text}`} className="text-bookchainGreen">{page.email[0].text}</a>
        </div>
        <div className="md:w-4/12 w-full)">
          <h3><i className="fas fa-mobile-alt"></i> {translations["phone"][lang]}</h3>
          <a href={`tel:${page.phone[0].text}`} className="text-bookchainGreen">{page.phone[0].text}</a>
        </div>
      </div>
    </main>
  </Layout>
  )
}


export const contactQuery = graphql `
query contactQuery($langKey: String){
  prismic {
    allContacts(lang: $langKey) {
      edges {
        node {
          _meta {
            lang
            uid
          }
          address
          email
          map {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          map_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          phone
          title
        }
      }
    }
  }
  ...LayoutFragment
}
`
export default ContactPage

ContactPage.query = contactQuery;
