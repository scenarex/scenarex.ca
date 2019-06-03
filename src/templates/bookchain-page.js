import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import paragraphs from "lines-to-paragraphs";

export const BookchainPageTemplate = props => {
  const { page } = props;
  return (
  <main className="bookchain">
    <div className="row">
      <div className="6u 12u(small)">
        <center><img src={page.frontmatter.logo} alt="Bookchain logo" width="350"/></center>
        <p>{page.frontmatter.subheader}</p>
        {page.frontmatter.timeline.length > 0 &&
          <div className="timeline">
            {page.frontmatter.timeline.map(time =>
              <div className="entry" key={time.date}>
                <div className="time">
                  <h5>{new Date(time.date).toLocaleDateString(page.langKey, {year: 'numeric', month: 'short'})}</h5>
                </div>
                <div className="body">
                  <h3>{time.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: paragraphs(time.text ? time.text : "")}}></p>
                </div>
              </div>
            )}
          </div>
        }
        <p className="smaller">{page.frontmatter.subtext}</p>
      </div>
      <div className="6u 12u(small)">
        <div className="12u">
          <p>{page.frontmatter.text}</p>
          <h2 className="mt">{page.frontmatter.who}</h2>
          <p>
            {page.frontmatter.whoText}
          </p>
          <h2 className="mt">{page.frontmatter.how}</h2>
          <p>
            {page.frontmatter.howText}
          </p>
        </div>
      </div>
    </div>
    <div className="row upper-border mtd">
      <div className="3u 12u(small)">
        <h2><i className={page.frontmatter.reason1Icon}></i> {page.frontmatter.reason1}</h2>
        <p className="smaller">{page.frontmatter.reason1Text}</p>
      </div>
      <div className="3u 12u(small)">
        <h2><i className={page.frontmatter.reason2Icon}></i> {page.frontmatter.reason2}</h2>
        <p className="smaller">{page.frontmatter.reason2Text}</p>
      </div>
      <div className="3u 12u(small)">
        <h2><i className={page.frontmatter.reason3Icon}></i> {page.frontmatter.reason3}</h2>
        <p className="smaller">{page.frontmatter.reason3Text}</p>
      </div>
      <div className="3u 12u(small)">
        <h2><i className={page.frontmatter.reason4Icon}></i> {page.frontmatter.reason4}</h2>
        <p className="smaller">{page.frontmatter.reason4Text}</p>
      </div>
    </div>
    <div className="row upper-border mtd">
      <div className="12u">
        <h2>{page.frontmatter.sols}</h2>
        <p className="smaller">{page.frontmatter.solsText}</p>
      </div>
    </div>
  </main>
  )
}

const BookchainPage = ({ data }) => {
  const { markdownRemark: page, headerData, footerData } = data;
  const {
    fields: { langKey },
    frontmatter: {metadata: { ref, metaTitle }}
  } = page;
  return (
    <Layout path={ref} title={metaTitle} headerData={headerData} footerData={footerData}>
      <BookchainPageTemplate page={{ ...page, langKey}} />
    </Layout>
  );
};

BookchainPage.propTypes = {
  page: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BookchainPage

export const pageQuery = graphql`
  query BookchainPageTemplate($langKey: String!) {
    markdownRemark(
      fields: { langKey: { eq: $langKey } },
      frontmatter: { templateKey: {eq: "bookchain-page"} }
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
        logo
        subheader
        text
        who
        whoText
        how
        howText
        timeline {
          date
          title
          text
        }
        subtext
        reason1
        reason1Text
        reason1Icon
        reason2
        reason2Text
        reason2Icon
        reason3
        reason3Text
        reason3Icon
        reason4
        reason4Text
        reason4Icon
        sols
        solsText
      }
  }
  ...LayoutFragment
}`
