import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";

export function Head({ data }) {
  return <title>{data.prismicProtection.data.title.text} - SCENAREXinc</title>;
}

const ProtectionPage = ({ data }) => {
  const page = data.prismicProtection;

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
  query protectionQuery($lang: String) {
    prismicProtection(lang: { eq: $lang }) {
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

export default ProtectionPage;
