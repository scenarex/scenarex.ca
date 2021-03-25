import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import { RichText } from 'prismic-reactjs'


const IndexPage = ({ data }) => {
  console.log("data");
  let page = data.prismic.allHomes.edges[0].node;
  let tools;
  let partners;
  for (let i=0; i<page.body.length; i++) {
    if (page.body[i].__typename === "PRISMIC_HomeBodyPartners") {
      partners = page.body[i]
    }
    else {
      tools = page.body[i]
    }
  }
  return (
  <Layout title={page.title[0].text} path={page._meta.lang} alternate={page._meta.alternateLanguages[0].lang} headerData={data.headerData} footerData={data.footerData}>
    <main>
      <section className="masthead">
        {RichText.render(page.text)}
      </section>
      <section className="masthead upper-border">
        <div className="big">{RichText.render(page.partnerstitle)}</div>
        {partners.fields.length > 0 &&
        <div className="row flex-item md:flex-row sm:flex-col md:items-stretch ">
          {(partners.fields).map((partner,i) =>
            <div className="flex-1 text-center" key={i}>
              <a href={partner ? partner.link.url : ""}>
                <img className="grey" src={partner.img.url} style={{maxHeight: "60px"}} alt=""/>
              </a>
            </div>
          )}
        </div>
        }
      </section>

      <section className="masthead upper-border">
        <div className="big">{RichText.render(page.toolstitle)}</div>
        {tools.fields.length > 0 &&
        <div className="row flex-item">
          {(tools.fields).map((tool,i) =>
            <div className="md:w-3/12 w-full ml-0 pl-6 block md:flex-item" key={i}>
              <span className="fa-layers fa-fw fa-8x">
                <i className="fa fa-circle icon-background"></i>
                <i className={tool.icon[0].text} data-fa-transform="shrink-6"></i>
              </span>
              <h2><a href={tool.link.url}>{RichText.render(tool.name)}</a></h2>
              {RichText.render(tool.text1)}
            </div>
            )}
        </div>
        }
      </section>
    </main>
  </Layout>
  )
}

export const homeQuery = graphql`
query homeQuery($langKey: String) {
prismic {
  allHomes(lang: $langKey) {
    edges {
      node {
        title
        _meta {
          uid
          lang
          alternateLanguages {
            uid
            lang
          }
        }
        text
        body {
          __typename
          ... on PRISMIC_HomeBodyTools {
            fields {
              name
              icon
              text1
              link {
              ... on PRISMIC__ExternalLink{
                    url
                  }
              }
            }
          }
          ... on PRISMIC_HomeBodyPartners{
            fields {
              link {
                ... on PRISMIC__ExternalLink{
                      url
                    }
              }
              img
            }
          }
        }
        }
      }
    }
  }
  ...LayoutFragment
}
`


IndexPage.query = homeQuery;

export default IndexPage
