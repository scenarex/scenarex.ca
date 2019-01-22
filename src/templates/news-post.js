import React, {Component} from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

class Template extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }
  render () {
    const post = this.data.markdownRemark
    return (
      <Layout location={this.props.location}>
        <SEO title="News" keywords={[`gatsby`, `application`, `react`]} />
        {post &&
        <article className='post'>
          <div className="row">
            <div className="3u 12u(small)">
              <div className="post-date">{post.frontmatter.ref}<br/>by {post.frontmatter.author}</div>
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

export default(Template)
