import React, {Component} from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { translate } from "react-i18next"
import "../sass/main.scss"
class Template extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }
  parse(date) {
    var year = date.slice(0,4);
    var month = date.slice(4,6);
    var day = date.slice(6,8);
    var D = new Date(year,month-1,day);
    console.log(D.toLocaleDateString({day:"numeric", month: "short", year: "numeric"}));
    return D.toLocaleDateString(this.props.i18n.language,{day:"numeric", month: "long", year: "numeric"});
  }
  render () {
    const { t } = this.props
    const post = this.data.markdownRemark
    return (
      <Layout location={this.props.location}>
        <SEO title="News" keywords={[`gatsby`, `application`, `react`]} />
        {post &&
        <article className='post'>
          <div className="row">
            <div className="3u 12u(small)">
              <div className="post-date">{this.parse(post.frontmatter.ref.toString())}<br/>{t("by")} {post.frontmatter.author}</div>
            </div>
            <div className="9u 12u(small)">
              <h1 className='post-title'>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html}} />
            </div>
          </div>
        </article>
        }
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        ref
        author
      }
    }
  }
`

export default translate("translations")(Template)
