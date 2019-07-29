import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';
import translations from "../utils/translations.json";

export const pageQuery = graphql`
  query LegalPageTemplate($lang: String!, $id: String!) {
    prismic {
      allLegalpages(lang: $lang, id: $id) {
        edges {
          node {
            _meta {
              id
              uid
              lang
            }
            title
            text
          }
        }
      }
    }
    ...LayoutFragment
  }
`

export const LegalPageTemplate = props => {

  return (
    <main>
      <h2 className="sm:text-6xl text-4xl biggest">{(props.page.title[0].text)}</h2>
      <br/>
      {RichText.render(props.page.text)}
  </main>
  )
}


const LegalPage = ({ data }) => {
  const doc = data.prismic.allLegalpages.edges.slice(0,1).pop();
  if(!doc) return null;
    let lang = (doc.node._meta.lang.split("-"))[0]
  return (
    <Layout title={translations[doc.node._meta.uid][lang]} path={doc.node._meta.uid} headerData={data.headerData} footerData={data.footerData}>
      <LegalPageTemplate page={doc.node} />
    </Layout>
  );
};

LegalPage.query = pageQuery;
export default LegalPage
