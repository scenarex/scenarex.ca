import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import paragraphs from "lines-to-paragraphs";

export const ContactPageTemplate = props => {
  const { page } = props;
  return (
      <main>
      <h2 className="biggest">{page.frontmatter.title}</h2>

      <div className="row">
        <div className="6u 12u(small)">
          <a target="_blank" rel="noopener noreferrer" href={page.frontmatter.mapLink} className="image fit">
            <img src={page.frontmatter.mapPicture} alt="Map" />
          </a>
        </div>
        <div className="6u 12u(small)">
          <h3><i className="fas fa-map-marker-alt"></i> {page.frontmatter.addressTitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: paragraphs(page.frontmatter.address)}}></p>
        </div>
      </div>
      <div className="row">
        <div className="4u 12u(small)">
          <h3><i className="fas fa-envelope"></i> {page.frontmatter.emailTitle}</h3>
          <a href={`mailto:${page.frontmatter.email}`} className="green">{page.frontmatter.email}</a>
        </div>
        <div className="4u 12u(small)">
          <h3><i className="fas fa-mobile-alt"></i> {page.frontmatter.phoneTitle}</h3>
          <a href={`tel:+14385581885${page.frontmatter.phoneNumber}`} className="green">{page.frontmatter.phone}</a>
        </div>
      </div>
    </main>
  )
}

const ContactPage = ({ data }) => {
  const { markdownRemark: page, headerData, footerData } = data;
  const {
    fields: { langKey },
    frontmatter: {metadata: { ref, metaTitle }}
  } = page;
  return (
    <Layout path={ref} title={metaTitle} headerData={headerData} footerData={footerData}>
      <ContactPageTemplate page={{ ...page, langKey}} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } },
      frontmatter: { templateKey: {eq: "contact-page"} }
    ) {
      fields {
        langKey
        slug
      }
      frontmatter {
        templateKey
        metadata {
          metaTitle
          ref
          language
        }
        title
        mapLink
        mapPicture
        addressTitle
        address
        email
        emailTitle
        phoneTitle
        phone
        phoneNumber
      }
  }
  ...LayoutFragment
}`
