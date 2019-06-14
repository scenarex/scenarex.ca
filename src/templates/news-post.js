import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import translations from "../libs/news-translations.json";
import * as moment from 'moment';

export const NewsPostTemplate = ({
  author,
  content,
  date,
  lang,
  title
  }) => {
    console.log(content)
  return (
    <article className='post'>
      <div className="row">
        <div className="3u 12u(small)">
          <div className="post-date">{date.toLocaleDateString(lang, {year: 'numeric', month: 'long', day: 'numeric'})}<br/>{translations["by"][lang]} {author}</div>
        </div>
        <div className="9u 12u(small)">
          <h1 className='post-title'>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: (content) }}/>
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
  console.log(data)
  const { markdownRemark: page, headerData, footerData } = data;
  const {
    fields: {langKey},
    frontmatter: {title, author, metadata: {date}},
    html
  } = page;
  let dateObj = moment(date, "YYYYMMDD")
  let formattedDate = dateObj.format("MMMM DD YYYY")
  return (
  <Layout path={date} title={title} headerData={headerData} footerData={footerData}>
    <NewsPostTemplate
      author={author}
      content={html}
      date={new Date(formattedDate)}
      lang={langKey}
      title={title}
    />
  </Layout>
  )
}

NewsPost.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewsPost

export const pageQuery = graphql`
  query BlogPostTemplate($langKey: String!, $id: String!) {
    markdownRemark(
      id : { eq: $id }
      fields: { langKey: { eq: $langKey } }
    ) {
      fields {
        slug
        langKey
      }
      id
      html
      frontmatter {
        metadata {
          date
          path
        }
        title
        author
      }
    }
    ...LayoutFragment
  }
`
