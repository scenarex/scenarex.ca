import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import translations from "../utils/translations.json";

export function Head({ data }) {
  return <title>{data.prismicNewsroom.data.title.text} - SCENAREXinc</title>;
}

const NewsPage = ({ data }) => {
  const pageData = data.prismicNewsroom;
  const externalLinks = data.allPrismicPress;
  const newsPosts = data.allPrismicNews;
  const lang = pageData.lang;

  return (
    <Layout
      title={pageData.data.title.text}
      path={pageData.uid}
      alternate={pageData.alternate_languages}
      headerData={data.prismicHeader}
      footerData={data.prismicFooter}
    >
      <main>
        <h2 className="biggest">{translations["news"][lang]}</h2>
        {newsPosts.edges.map((post, i) => (
          <div className="flex" key={i}>
            <div className="w-32 font-mono">{post.node.data.post_date}</div>
            <div className="">
              <Link to={`/${lang}/${post.node.uid}`}>
                {post.node.data.post_title.text}
              </Link>
            </div>
          </div>
        ))}

        <h2 className="biggest">{translations["press"][lang]}</h2>
        {externalLinks.edges.map((post, i) => (
          <div className="press" key={i}>
            <span className="post-title">
              {RichText.render(post.node.data.press_source.richText)}
              <a href={post.node.data.external_url.url}>
                {post.node.data.press_title}{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </span>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query newsPageQuery($lang: String) {
    allPrismicNews(
      filter: { lang: { eq: $lang } }
      sort: { fields: data___post_date, order: DESC }
    ) {
      edges {
        node {
          lang
          data {
            post_title {
              richText
              text
            }
            post_date
          }
          uid
        }
      }
    }
    allPrismicPress(
      filter: { lang: { eq: $lang } }
      sort: { order: DESC, fields: data___press_date }
    ) {
      edges {
        node {
          uid
          lang
          data {
            press_title
            press_source {
              richText
              text
            }
            press_date
            external_url {
              url
            }
          }
        }
      }
    }
    prismicNewsroom(lang: { eq: $lang }) {
      uid
      lang
      data {
        title {
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

export default NewsPage;
