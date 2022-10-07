import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";

export function Head({data}) {
  return (
    <title>Bookchain® - SCENAREXinc</title>
  )
}

const BookchainPage = ({ data }) => {
  const page = data.prismicBookchain.data;
  const lang = data.prismicBookchain.lang.split("-")[0];
  return (
    <Layout
      title={"Bookchain"}
      path={data.prismicBookchain.uid}
      alternate={data.prismicBookchain.alternate_languages}
      headerData={data.prismicHeader}
      footerData={data.prismicFooter}
    >
      <main className="bookchain">
        <div className="row">
          <div className="md:w-6/12 w-full">
            <center>
              <img src={page.logo.url} alt={page.logo.alt} width="350" />
            </center>
            {RichText.render(page.subheader.richText)}
            {page.timeline.length > 0 && (
              <div className="">
                {page.timeline.map((time) => (
                  <div className="grid gap-4 grid-cols-3 divide-x-4 divide-bodyColor" key={time.timeline_date}>
                    <div className="relative pr-16 before:absolute before:w-4 before:bg-white before:h-4 before:rounded-full before:border-4 before:border-bodyColor before:-right-[30px] before:top-0">
                      <h5 className="mt-0">{makeDate(time.timeline_date, lang)}</h5>
                    </div>
                    <div className="pl-16 col-span-2">{RichText.render(time.timeline_text.richText)}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="text-sm pt-10">{RichText.render(page.bookchain_subtext.richText)}</div>
          </div>
          <div className="md:w-6/12 w-full">
            <div className="w-full mt-12 mb-6">{RichText.render(page.sidebar_text.richText)}</div>
          </div>
        </div>
        {page.bookchain_reasons.length > 0 && (
          <div className="row upper-border mtd">
            {page.bookchain_reasons.map((reason, i) => (
              <div className="lg:w-3/12 w-full ml-0" key={i}>
                <h2 className="xl:text-2xl md:text-xl text-2xl">
                  <i className={reason.reasons_icon}></i> {reason.reasons_title}
                </h2>
                <div className="text-sm lg:pt-10 pt-4 lg:pb-0 pb-6">{RichText.render(reason.reasons_text.richText)}</div>
              </div>
            ))}
          </div>
        )}
        <div className="row upper-border mtd">
          <div className="w-full text-sm pt-10">{RichText.render(page.bookchainsolutions_text.richText)}</div>
        </div>
      </main>
    </Layout>
  );
};

function makeDate(date, lang) {
  let formattedDate = new Date(date);
  let month = formattedDate.getUTCMonth();
  formattedDate.setUTCMonth(month + 1);
  return formattedDate.toLocaleDateString(lang, {
    year: "numeric",
    month: "short"
  });
}

export const bookchainQuery = graphql`
  query bookchainQuery($lang: String) {
    prismicBookchain(lang: { eq: $lang }) {
      lang
      uid
      alternate_languages {
        uid
        lang
      }
      data {
        subheader {
          richText
          text
        }
        timeline {
          timeline_date
          timeline_text {
            text
            richText
          }
        }
        bookchain_reasons {
          reasons_title
          reasons_icon
          reasons_text {
            richText
            text
          }
        }
        bookchain_subtext {
          richText
          text
        }
        sidebar_text {
          richText
          text
        }
        bookchainsolutions_text {
          richText
          text
        }
        logo {
          alt
          copyright
          url
          gatsbyImageData
        }
      }
    }
    ...LayoutFragment
  }
`;

BookchainPage.query = bookchainQuery;

export default BookchainPage;
