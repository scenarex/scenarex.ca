import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';

const BookchainPage = ({ data }) => {
  const page = data.prismic.allBookchains.edges[0].node;
  const lang = page._meta.lang;
  return (
  <Layout title={"Bookchain"} path={page._meta.uid} headerData={data.headerData} footerData={data.footerData}>
    <main className="bookchain">
      <div className="row">
        <div className="6u 12u(small)">
          <center><img src={page.logo.url} alt={page.logo.alt} width="350"/></center>
          {RichText.render(page.subheader)}
          {page.timeline.length > 0 &&
            <div className="timeline">
              {page.timeline.map(time =>
                <div className="entry" key={time.timeline_date}>
                  <div className="time">
                    <h5>{makeDate(time.timeline_date, lang)}</h5>
                  </div>
                  <div className="body">
                    {RichText.render(time.timeline_text)}
                  </div>
                </div>
              )}
            </div>
          }
          <div className="smaller">{RichText.render(page.bookchain_subtext)}</div>
        </div>
        <div className="6u 12u(small)">
          <div className="12u mt">
            {RichText.render(page.sidebar_text)}
          </div>
        </div>
      </div>
      {page.bookchain_reasons.length > 0 &&
        <div className="row upper-border mtd">
          {page.bookchain_reasons.map((reason, i) =>
            <div className="3u 12u(small)" key={i}>
              <h2><i className={reason.reasons_icon}></i> {reason.reasons_title}</h2>
              <div className="smaller">{RichText.render(reason.reasons_text)}</div>
            </div>
          )}
        </div>
      }
      <div className="row upper-border mtd">
        <div className="12u smaller">
          {RichText.render(page.bookchainsolutions_text)}
        </div>
      </div>
    </main>
  </Layout>
  )
}

function makeDate (date, lang) {
  let formattedDate = new Date(date);
  let month = formattedDate.getUTCMonth()
  formattedDate.setUTCMonth(month +1);
  return formattedDate.toLocaleDateString(lang, {year: 'numeric', month: 'short'});
};
BookchainPage.query = bookchainQuery;


export default BookchainPage


export const bookchainQuery = graphql `
query bookchainQuery($langKey: String)
{
  prismic {
    allBookchains(lang: $langKey) {
      edges {
        node {
          _meta {
            uid
            lang
          }
          subheader
          timeline {
            timeline_date
            timeline_text
          }
          bookchain_subtext
          bookchain_reasons {
            reasons_title
            reasons_text
            reasons_icon
          }
          sidebar_text
          bookchainsolutions_text
          logo
        }
      }
    }
  }
  ...LayoutFragment
}
`
