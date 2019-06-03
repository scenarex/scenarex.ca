import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export const PeoplePageTemplate = props => {
  const { page } = props;
  return (
    <div className="row">
      <div className="row">
        <div className="6u 12u(small)">
          <img src={page.frontmatter.img} alt=""/>
          <a href={`mailto:${page.frontmatter.email}`}><i className="fas fa-envelope"></i> {page.frontmatter.email}</a>
        </div>
        <div className="6u 12u(small)">
          <h2 className="big">{page.frontmatter.name}</h2>
          <p>{page.frontmatter.description}</p>
        </div>
      </div>
    </div>
  )
}

const PeoplePage = ({ data }) => {
  const { markdownRemark: page, headerData, footerData } = data;
  const {
    fields: { langKey },
    frontmatter: {metadata: { ref }}
  } = page;
  return (
    <Layout path={ref} title={page.frontmatter.name} headerData={headerData} footerData={footerData}>
      <PeoplePageTemplate page={{ ...page, langKey}} />
    </Layout>
  );
};

PeoplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PeoplePage

export const pageQuery = graphql`
  query PageByID($langKey: String!, $id: String!) {
    markdownRemark(
      id : {eq: $id }
      fields: { langKey: { eq: $langKey } }
    ) {
      fields {
        langKey
        slug
      }
      frontmatter {
        templateKey
        metadata {
          ref
          language
        }
        name
        email
        description
        img
      }
  }
  ...LayoutFragment
}`
