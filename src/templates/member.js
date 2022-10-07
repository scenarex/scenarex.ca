import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";

export function Head({ data }) {
  return <title>{data.prismicMember.data.name.text} - SCENAREXinc</title>;
}

const PeoplePage = ({ data }) => {
  let page = data.prismicMember;
  return (
    <Layout
      title={page.data.name.text}
      path={page.uid}
      alternate={page.alternate_languages}
      headerData={data.prismicHeader}
      footerData={data.prismicFooter}
    >
      <main>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <img src={page.data.img.url} alt="" />
            <a href={`mailto:${page.data.email.text}`}>
              <i className="fas fa-envelope"></i> {page.data.email.text}
            </a>
          </div>
          <div className="">
            <div className="big">
              <h2>{page.data.name.text}</h2>
            </div>
            {RichText.render(page.data.description.richText)}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query peopleQuery($lang: String, $id: String) {
    prismicMember(lang: { eq: $lang }, id: { eq: $id }) {
      uid
      lang
      alternate_languages {
        uid
        lang
      }
      data {
        description {
          richText
          text
        }
        email {
          richText
          text
        }
        member_type
        img {
          url
          alt
          copyright
        }
        name {
          richText
          text
        }
      }
    }
    ...LayoutFragment
  }
`;

export default PeoplePage;
