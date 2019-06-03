import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export const HomePageTemplate = props => {
  const { page } = props;
  return (
  <main>
    <section className="masthead">
      <p>{page.frontmatter.text}</p>
    </section>

    <section className="masthead upper-border">
      <h2 className="big">{page.frontmatter.partnersTitle}</h2>
      {page.frontmatter.partners.length > 0 &&
      <div className="row flex 50%">
        {(page.frontmatter.partners).map((partner,i) =>
          <div className="25u 12u$(small) flex" key={i}>
            <a href={partner.link}>
              <img className="grey" src={partner.img} style={{maxHeight: "60px"}} alt=""/>
            </a>
          </div>
        )}
      </div>
      }
    </section>

    <section className="masthead upper-border">
      <h2 className="big">{page.frontmatter.toolsTitle}</h2>
      {page.frontmatter.tools.length > 0 &&
      <div className="row inline flex">
        {page.frontmatter.tools.map((tool,i) =>
          <div className="3u 12u$(small) flex" key={i}>
            <span className="fa-layers fa-fw fa-8x">
              <i className="fa fa-circle icon-background"></i>
              <i className={tool.icon} data-fa-transform="shrink-6"></i>
            </span>
            <h2><a href={tool.name}>{tool.name}</a></h2>
            <p>{tool.text}</p>
          </div>
          )}
      </div>
      }
    </section>
  </main>
  )
}

const HomePage = ({ data }) => {
  const { markdownRemark: page, headerData, footerData } = data;
  const {
    fields: { langKey },
    frontmatter: {metadata: { ref, metaTitle }}
  } = page;
  return (
    <Layout path={ref} title={metaTitle} headerData={headerData} footerData={footerData}>
      <HomePageTemplate page={{ ...page, langKey}} />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } },
      frontmatter: { templateKey: {eq: "home-page"} }
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
        text
        email
        partnersTitle
        partners {
          img
          link
        }
        toolsTitle
        tools {
          name
          link
          icon
          text
        }
      }
  }
  ...LayoutFragment
}`
