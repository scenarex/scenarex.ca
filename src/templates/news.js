import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import translations from "../utils/translations.json";

export function Head({ data }) {
  return <title>{data.prismicNews.data.post_title.text} - SCENAREXinc</title>;
}

const NewsPost = ({data}) => {
  let page = data.prismicNews;
  let date = new Date(page.data.post_date);

  return (
    <Layout
      title={page.data.post_title.text}
      path={page.uid}
      alternate={page.alternate_languages}
      headerData={data.prismicHeader}
      footerData={data.prismicFooter}
    >
      <article className="post">
        <div className="row">
          <div className="md:w-3/12 w-full ml-0">
            <div className="post-date">
              {date.toLocaleDateString(date, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <br />
              {translations["by"][page.lang]}{" "}
              {RichText.render(page.data.post_author.richText)}
            </div>
          </div>
          <div className="md:w-9/12 w-full">
            {RichText.render(page.data.post_title.richText)}
            {page.data.post_image ? (
              <img
                src={page.data.post_image.url}
                alt={page.data.post_image.alt}
              />
            ) : (
              ""
            )}
            {RichText.render(page.data.post_body.richText)}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query newsQuery($lang: String, $id: String) {
    prismicNews(lang: { eq: $lang }, id: { eq: $id }) {
      uid
      lang
      data {
        post_author {
          richText
          text
        }
        post_body {
          richText
          text
        }
        post_date
        post_image {
          url
          copyright
          alt
        }
        post_title {
          richText
          text
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

export default NewsPost;
