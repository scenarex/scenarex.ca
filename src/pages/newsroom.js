import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import translations from '../utils/translations.json'

const NewsPage = ({ data }) => {
  const pageData = data.newsroom.edges[0].node
  const externalLinks = data.pressPosts
  const newsPosts = data.newsPosts
  const lang = newsPosts.edges[0].node.lang.split('-')[0]

  return (
    <Layout
      title={pageData.data.title.text}
      path={pageData.uid}
      alternate={pageData.alternate_languages[0].uid}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <main>
        <h2 className="biggest">{translations['news'][lang]}</h2>
        {newsPosts.edges.map((post, i) => (
          <div className="news" key={i}>
            {post.node.post_date}
            &nbsp;»&nbsp;
            <span className="post-title">
              <Link to={`/${lang}/${post.node.uid}`}>
                {post.node.data.post_title.text}
              </Link>
            </span>
          </div>
        ))}

        <h2 className="biggest">{translations['press'][lang]}</h2>
        {externalLinks.edges.map((post, i) => (
          <div className="press" key={i}>
            <span className="post-title">
              {RichText.render(post.node.data.press_source.richText)}
              <a href={post.node.data.external_url.url}>
                {post.node.data.press_title}{' '}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </span>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const newsPageQuery = graphql`
  query newsPageQuery($langKey: String) {
    newsPosts: allPrismicNews(
      filter: { lang: { eq: $langKey } }
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
    pressPosts: allPrismicPress(
      filter: { lang: { eq: $langKey } }
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
    newsroom: allPrismicNewsroom(filter: { lang: { eq: $langKey } }) {
      edges {
        node {
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
          }
        }
      }
    }
    ...LayoutFragment
  }
`

NewsPage.query = newsPageQuery

export default NewsPage
