import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';

export const peopleQuery = graphql`
query peopleQuery($id: String, $lang: String) {
prismic {
  allMembers(id: $id, lang: $lang) {
    edges {
      node {
        name
        description
        img
        email
        _meta {
          uid
          id
          lang
          }
        }
      }
    }
  }
  ...LayoutFragment
}
`

export const MemberTemplate = props => {
  return (
    <div className="row">
     <div className="row">
       <div className="md:w-6/12 w-full px-12">
         <img src={props.page.img.url} alt=""/>
         <a href={`mailto:${props.page.email[0].text}`}><i className="fas fa-envelope"></i> {props.page.email[0].text}</a>
       </div>
       <div className="md:w-6/12 w-full px-12 mt-0">
         <div className="big">{RichText.render(props.page.name)}</div>
         {RichText.render(props.page.description)}
       </div>
     </div>
   </div>
  )
}

const MemberPage = ({ data }) => {
  const doc = data.prismic.allMembers.edges.slice(0,1).pop();
  if(!doc) return null;
  return (
    <Layout title={doc.node.name.text} path={doc.node._meta.uid} headerData={data.headerData} footerData={data.footerData}>
      <MemberTemplate page={doc.node} />
    </Layout>
  );

};

MemberPage.query = peopleQuery;
export default MemberPage
