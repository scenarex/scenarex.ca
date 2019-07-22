import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';
import translations from "../utils/translations.json";

export const NewsPostTemplate = props => {
  console.log(props);
  let date = new Date(props.page.post_date);
  console.log(date)
  return (
    <article className='post'>
      <div className="row">
        <div className="md:w-3/12 w-full ml-0">
          <div className="post-date">{date.toLocaleDateString(props.page._meta.lang, {year: 'numeric', month: 'long', day: 'numeric'})}<br/>{translations["by"][props.page._meta.lang]} {RichText.render(props.page.post_author)}</div>
        </div>
        <div className="md:w-9/12 w-full">
          {RichText.render(props.page.post_title)}
          {props.page.post_image ?
            <img src={props.page.post_image.url} alt={props.page.post_image.alt}/>
            :
            ""
          }
          {RichText.render(props.page.post_body)}
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
  let page = data.prismic.allNewss.edges[0].node;
  return (
  <Layout title={page.post_title[0].text} path={page.post_date} headerData={data.headerData} footerData={data.footerData}>
    <NewsPostTemplate page={page} />
  </Layout>
  )
}


export default NewsPost
export const newsquery = graphql`
query newsQuery($langKey: String, $uid: String)
{
  prismic {
    allNewss(lang: $langKey, uid: $uid) {
      edges {
        node {
          _meta {
            uid
            lang
          }
          post_author
          post_body
          post_date
          post_image
          post_title
        }
      }
    }
  }
  ...LayoutFragment
}`
