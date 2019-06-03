import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import translations from "../libs/news-translations.json";

export const NewsPageTemplate = ({
  externalLinks,
  lang,
  newsPosts
  }) => {
  return (
    <div>
      <h2 className="biggest">{translations["news"][lang]}</h2>
      {newsPosts.edges.map(post =>
        (
          <div className="news" key={post.node.id}>
            {post.node.frontmatter.metadata.date}
              &nbsp;»&nbsp;
            <span className='post-title'>
              <Link to={`/${lang}${post.node.frontmatter.metadata.path}`}>{ post.node.frontmatter.title }</Link>
            </span>
          </div>
      ))}

      <h2 className="biggest">{translations["press"][lang]}</h2>
      {externalLinks.edges.map(post => (
        <div className="press" key={post.node.id}>
          <span className='post-title'>
            <h3>{post.node.frontmatter.source}</h3>
            <a href={post.node.frontmatter.external_url}>{ post.node.frontmatter.title } <i className="fas fa-external-link-alt"></i></a>
          </span>
        </div>
      ))}
    </div>
  )
}

const NewsPage = ({ data }) => {
  const { newsPosts, externalLinks, headerData, footerData } = data;
  let lang = headerData.edges[0].node.fields.langKey
  return (
    <Layout path={"News"} title={translations["news"][lang]} headerData={headerData} footerData={footerData}>
      <NewsPageTemplate
        externalLinks = {externalLinks}
        lang = {lang}
        newsPosts={newsPosts}
      />
    </Layout>
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewsPage

export const pageQuery = graphql`
query BlogIndexQuery($langKey: String!) {
  newsPosts: allMarkdownRemark (
      filter: {
        fields: {langKey: { eq: $langKey } },
        frontmatter: { templateKey: { eq : "news-post" }},
      },
      sort: {
        fields: [frontmatter___metadata___date]
        order: DESC
      }) {
      edges {
        node {
          id
          fields {
            langKey
          }
          frontmatter {
            metadata {
              date(formatString: "DD/MM/YYYY")
              path
            }
            author
            title
          }
        }
      }
    }
    externalLinks: allMarkdownRemark (
        filter: {
          fields: {langKey: { eq: $langKey } },
          frontmatter: { templateKey: { eq : "external-link" }},
        },
        sort: {
          fields: [frontmatter___metadata___date]
          order: DESC
        }
        ) {
        edges {
          node {
            id
            fields {
              langKey
            }
            frontmatter {
              metadata {
                path
              }
              author
              external_url
              source
              title
            }
          }
        }
      }
    ...LayoutFragment
}
`
