import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';

const BookchainPage = ({ data }) => {
  const doc = data.prismic.allBookchains.edges.slice(0,1).pop();
  if(!doc) return null;
  const page = doc.node;
  const lang = page._meta.lang;
  return (
  <Layout title={"Bookchain"} path={page._meta.uid} headerData={data.headerData} footerData={data.footerData}>
    <main className="bookchain">
      <div className="row">
        <div className="md:w-6/12 w-full">
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
          <div className="text-sm pt-10">{RichText.render(page.bookchain_subtext)}</div>
        </div>
        <div className="md:w-6/12 w-full">
          <div className="w-full mt-12 mb-6">
            {RichText.render(page.sidebar_text)}
          </div>
        </div>
      </div>
      {page.bookchain_reasons.length > 0 &&
        <div className="row upper-border mtd">
          {page.bookchain_reasons.map((reason, i) =>
            <div className="lg:w-3/12 w-full ml-0" key={i}>
              <h2 className="xl:text-2xl md:text-xl text-2xl"><i className={reason.reasons_icon}></i> {reason.reasons_title}</h2>
              <div className="text-sm lg:pt-10 pt-4 lg:pb-0 pb-6">{RichText.render(reason.reasons_text)}</div>
            </div>
          )}
        </div>
      }
      <div className="row upper-border mtd">
        <div className="w-full text-sm pt-10">
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


export const bookchainQuery = graphql `
query bookchainQuery($id: String, $lang: String)
{
  prismic {
    allBookchains(id: $id, lang: $lang) {
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

BookchainPage.query = bookchainQuery;

export default BookchainPage
