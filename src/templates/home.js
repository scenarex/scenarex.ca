import React from "react"
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import { RichText } from 'prismic-reactjs'
import { linkResolver } from "../prismic/linkResolver";


const IndexPage = ({ data }) => {
  const doc = data.prismic.allHomes.edges.slice(0,1).pop();
  if(!doc) return null;
  let page = doc.node;
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
  <Layout title={page.title[0].text} path="/" headerData={data.headerData} footerData={data.footerData}>
    <main>
      <section className="masthead">
        {RichText.render(page.text)}
      </section>
      <section className="masthead upper-border">
        <div className="big">{RichText.render(page.partnerstitle)}</div>
        {partners.fields.length > 0 &&
        <div className="row flex-item ml-4 mb-4">
          {(partners.fields).map((partner,i) =>
            <div className="flex-item pl-2 p-0" key={i}>
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
query homeQuery($id: String, $lang: String) {
prismic {
  allHomes(id: $id, lang: $lang) {
    edges {
      node {
        title
        _meta {
          uid
          id
          lang
          }
        text
        partnerstitle
        toolstitle
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
