import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";

export function Head({data}) {
  return (
    <title>{data.prismicHome.data.title.text}</title>
  )
}

const IndexPage = ({ data }) => {
  let page = data.prismicHome;
  let tools = page.data.body.find(({ __typename }) => __typename === "PrismicHomeDataBodyTools");
  let partners = page.data.body.find(({ __typename }) => __typename === "PrismicHomeDataBodyPartners");

  return (
    <Layout
      title={page.data.title.text}
      path={page.url}
      alternate={page.alternate_languages}
      headerData={data.prismicHeader}
      footerData={data.prismicFooter}
    >
      <main className="divide-y-4">
        <section className="masthead">{RichText.render(page.data.text.richText)}</section>
        <section className="masthead">
          <div className="big">{RichText.render(partners.primary.partners_title.richText)}</div>
          {partners.items.length > 0 && (
            <div className="flex justify-between">
              {partners.items.map((partner, i) => (
                <div className="" key={i}>
                  <a href={partner ? partner.link.url : ""}>
                    <img className="grey" src={partner.img.url} style={{ maxHeight: "60px" }} alt="" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="masthead">
          <div className="big">{RichText.render(tools.primary.tools_title.richText)}</div>
          {tools.items.length > 0 && (
            <div className="flex">
              {tools.items.map((tool, i) => (
                <div className="md:w-3/12 w-full ml-0 pl-6 block md:flex-item" key={i}>
                  <span className="fa-layers fa-fw fa-8x">
                    <i className="fa fa-circle icon-background"></i>
                    <i className={tool.icon.text} data-fa-transform="shrink-6"></i>
                  </span>
                  <h2>
                    <a href={tool.link.url}>{RichText.render(tool.name.richText)}</a>
                  </h2>
                  {RichText.render(tool.text1.richText)}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query homeQuery($lang: String) {
    prismicHome(lang: { eq: $lang }) {
      id
      uid
      lang
      url
      data {
        title {
          text
        }
        text {
          text
          richText
        }
        body {
          __typename
          ... on PrismicHomeDataBodyPartners {
            items {
              img {
                alt
                copyright
                url
              }
              link {
                url
              }
            }
            primary {
              partners_title {
                richText
                text
              }
            }
          }
          ... on PrismicHomeDataBodyTools {
            items {
              icon {
                text
              }
              link {
                url
              }
              name {
                text
                richText
              }
              text1 {
                text
                richText
              }
            }
            primary {
              tools_title {
                richText
                text
              }
            }
          }
        }
      }
      alternate_languages {
        lang
        uid
      }
    }
    ...LayoutFragment
  }
`;

export default IndexPage;
