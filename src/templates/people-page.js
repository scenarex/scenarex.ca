import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';

export const PeoplePageTemplate = props => {
  return (
    <div className="row">
      <div className="row">
        <div className="6u 12u(small)">
          <img src={props.page.img.url} alt=""/>
          <a href={`mailto:${props.page.email[0].text}`}><i className="fas fa-envelope"></i> {props.page.email[0].text}</a>
        </div>
        <div className="6u 12u(small)">
          <h2 className="big">{RichText.render(props.page.name)}</h2>
          {RichText.render(props.page.description)}
        </div>
      </div>
    </div>
  )
}

const PeoplePage = ({ data }) => {
  let page = data.prismic.allMembers.edges[0].node;
  return (
    <Layout title={page.name[0].text} path={page._meta.uid} headerData={data.headerData} footerData={data.footerData}>
      <PeoplePageTemplate page={page} />
    </Layout>
  );
};


export default PeoplePage
export const peopleQuery = graphql`
query peopleQuery($langKey: String, $uid: String) {
prismic {
  allMembers(lang: $langKey, uid: $uid) {
    edges {
      node {
        name
        description
        img
        email
        _meta {
          uid
          lang

          }
        }
      }
    }
  }
  ...LayoutFragment
}
`
