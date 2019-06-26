import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';
import translations from "../utils/translations.json";

const NewsPage = ({ data }) => {
  const externalLinks = data.pressPosts.allPresss;
  const newsPosts = data.newsPosts.allNewss;
  const lang = (newsPosts.edges[0].node._meta.lang.split("-") )[0];
  return (
  <Layout title={"News"} path={"news"} headerData={data.headerData} footerData={data.footerData}>
    <main>
      <h2 className="biggest">{translations["news"][lang]}</h2>
      {newsPosts.edges.map((post, i) =>
        (
          <div className="news" key={i}>
            {post.node.post_date}
              &nbsp;»&nbsp;
            <span className='post-title'>
              <Link to={`/${lang}/${post.node._meta.uid}`}>{(post.node.post_title[0].text)}</Link>
            </span>
          </div>
      ))}

      <h2 className="biggest">{translations["press"][lang]}</h2>
      {externalLinks.edges.map((post,i) => (
        <div className="press" key={i}>
          <span className='post-title'>
            {RichText.render(post.node.press_source)}
            <a href={post.node.external_url.url}>{post.node.press_title} <i className="fas fa-external-link-alt"></i></a>
          </span>
        </div>
      ))}
    </main>
  </Layout>
  )
}

NewsPage.query = newsPageQuery;

export default NewsPage

export const newsPageQuery = graphql`
query newsPageQuery($langKey: String) {
  pressPosts : prismic {
    allPresss (lang: $langKey, sortBy: press_date_DESC){
      edges {
        node {
          _meta {
            uid
            lang
          }
          press_title
          press_source
          press_date
          external_url {
          ... on PRISMIC__ExternalLink{
                url
              }
            }
        }
      }
    }
  }
  newsPosts : prismic {
    allNewss (lang: $langKey, sortBy: post_date_DESC) {
      edges {
        node {
          _meta {
            uid
            lang
          }
          post_date
          post_title
        }
      }
    }
  }
  ...LayoutFragment
}
`
