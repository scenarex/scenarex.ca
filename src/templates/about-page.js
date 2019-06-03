import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export const AboutPageTemplate = props => {
  const { page  } = props;
  return (
    <main>
      <div className="row">
        <div className="6u 12u(small)">
          <h2 className="biggest">{page.frontmatter.title}</h2>
          <a href="#team" className="more">{page.frontmatter.button}<br/><i className="fas fa-arrow-down fa-2x"></i></a>
        </div>
        <div className="6u 12u(small)">
          <p>{page.frontmatter.text}</p>
        </div>
      </div>
      {page.memberChunks &&
      <div className="upper-border">
        <h2 className="big mtd" id="team">{page.frontmatter.team}</h2>
        {page.memberChunks.map ( (row,i) =>
          <div className="row 32%" key={i}>
            {row.map (person =>
              <div className="4u -1u 12u(small))" key={person.name}>
                <Link to={person.link}>
                  <img className="grey" src={person.img} alt={person.name} />
                </Link>
                <h3>{person.name}</h3>
                <p>{person.title}
                <br/>
                <a href={`mailto:${person.email}`} className="green">{person.email}</a></p>
              </div>
            )}
          </div>
        )}
      </div>
      }
    </main>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: page, headerData, footerData } = data;

  const {
    fields: { langKey },
    frontmatter: {metadata: { ref, metaTitle }}
  } = page;
  let members = page.frontmatter.members;
  var i,j,chunk = 3;
  let memberChunks = [members/3]
  let k=0;
  for (i=0,j=members.length; i<j; i+=chunk) {
      memberChunks[k] = members.slice(i,i+chunk);
      k++
  }
  return (
    <Layout path={ref} title={metaTitle} headerData={headerData} footerData={footerData}>
      <AboutPageTemplate page={{ ...page, langKey, memberChunks}} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } },
      frontmatter: { templateKey: {eq: "about-page"} }
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
        button
        text
        team
        members {
          name
          title
          email
          img
          link
        }
      }
    }
  ...LayoutFragment
}`
