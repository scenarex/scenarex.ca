import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import translations from '../utils/translations.json'

export const NewsPostTemplate = props => {
  let date = new Date(props.page.post_date)
  console.log("3333>>>",props.page.data.post_date)
  return (
    <article className="post">
      <div className="row">
        <div className="md:w-3/12 w-full ml-0">
          <div className="post-date">
            {date.toLocaleDateString(props.page.data.post_date, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            <br />
            {translations['by'][props.page.lang]}{' '}
            {RichText.render(props.page.data.post_author.richText)}
          </div>
        </div>
        <div className="md:w-9/12 w-full">
          {RichText.render(props.page.data.post_title.richText)}
          {props.page.data.post_image ? (
            <img
              src={props.page.data.post_image.url}
              alt={props.page.data.post_image.alt}
            />
          ) : (
            ''
          )}
          {RichText.render(props.page.data.post_body.richText)}
        </div>
      </div>
    </article>
  )
}

NewsPostTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  contentComponent: PropTypes.func,
}

const NewsPost = ({ data }) => {
  let page = data.allPrismicNews.edges[0].node

  return (
    <Layout
      title={page.data.post_title.text}
      path={page.uid}
      alternate={page.alternate_languages[0].uid}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <NewsPostTemplate page={page} />
    </Layout>
  )
}

export default NewsPost
export const newsquery = graphql`
  query newsQuery($langKey: String, $uid: String) {
    allPrismicNews(filter: { lang: { eq: $langKey }, uid: { eq: $uid } }) {
      edges {
        node {
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
          }
        }
      }
    }
    ...LayoutFragment
  }
`
