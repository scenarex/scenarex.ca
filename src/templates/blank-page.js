import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import paragraphs from "lines-to-paragraphs";

export const BlankPageTemplate = props => {
  const { page  } = props;
  return (
    <main>
      <h2 className="biggest">{page.frontmatter.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: paragraphs(page.frontmatter.text ? page.frontmatter.text : "")}}></p>
    </main>
  )
}

const BlankPage = ({ data }) => {
  const { markdownRemark: page, headerData, footerData } = data;

  const {
    fields: { langKey },
    frontmatter: {metadata: { ref, metaTitle }}
  } = page;
  return (
    <Layout path={ref} title={metaTitle} headerData={headerData} footerData={footerData}>
      <BlankPageTemplate page={{ ...page, langKey}} />
    </Layout>
  );
};

BlankPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlankPage

export const pageQuery = graphql`
  query BlankPageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } },
      frontmatter: { templateKey: {eq: "blank-page"} }
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
        text
      }
    }
  ...LayoutFragment
}`
