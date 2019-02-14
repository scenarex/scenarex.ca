import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import { translate } from "react-i18next"
import "../sass/main.scss"

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    const { i18n } = this.props;
    this.state={language: i18n.language}
  }
  parse(date) {
    var year = date.slice(0,4);
    var month = date.slice(4,6);
    var day = date.slice(6,8);
    var D = new Date(year,month-1,day);
    return D.toLocaleDateString(this.props.i18n.language, {day:"numeric", month: "numeric", year: "numeric"});
}


  render (data) {
    const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title={this.props.lng === "fr" ? "Nouvelles - SCENAREXinc" : "News - SCENAREXinc"} keywords={[`gatsby`, `application`, `react`]} />
        <h2 className="biggest">{t("News")}</h2>
        {this.data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            {post.node.frontmatter.categories !== "external" && post.node.frontmatter.lang === this.props.i18n.language &&
              <div className="news">
                { this.parse(post.node.frontmatter.ref.toString())}
                  &nbsp;»&nbsp;
                <span className='post-title'>
                  <Link to={post.node.frontmatter.path}>{ post.node.frontmatter.title }</Link>
                </span>
              </div>
            }
          </div>
        ))}

          <h2 className="biggest">{t("Press")}</h2>
          {this.data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
              {post.node.frontmatter.categories === "external" && post.node.frontmatter.lang === this.props.i18n.language &&
              <div className="press">
                <span className='post-title'>
                  <h3>{post.node.frontmatter.source}</h3>
                  <a href={post.node.frontmatter.external_url}>{ post.node.frontmatter.title } <i className="fas fa-external-link-alt"></i></a>
                </span>
              </div>
              }
            </div>
          ))}
        </Layout>
      )
    }
  }

  export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (
      sort: {
        fields: [frontmatter___ref]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            ref
            categories
            external_url
            source
            lang
          }
        }
      }
    }
  }
`

export default translate("translations")(NewsPage)
