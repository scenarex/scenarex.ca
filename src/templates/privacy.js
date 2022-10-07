import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";

export function Head({ data }) {
  return <title>{data.prismicPrivacy.data.title.text} - SCENAREXinc</title>;
}

const PrivacyPage = ({ data }) => {
  const page = data.prismicPrivacy;

  return (
    <Layout
      title={page.data.title.text}
      path={page.uid}
      alternate={page.alternate_languages}
      headerData={data.prismicHeader}
      footerData={data.prismicFooter}
    >
      <article className="privacy">
        <h2 className="sm:text-6xl text-4xl biggest">{page.data.title.text}</h2>
        {RichText.render(page.data.text.richText)}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query privacyQuery($lang: String) {
    prismicPrivacy(lang: { eq: $lang }) {
      uid
      lang
      data {
        title {
          richText
          text
        }
        text {
          text
          richText
        }
      }
      alternate_languages {
        uid
        lang
      }
    }
    ...LayoutFragment
  }
`;

export default PrivacyPage;
