import "../sass/main.scss"
import React from "react";
import { graphql } from "gatsby";
import Helmet from 'react-helmet';
import { Header } from "./Header";
import { Footer } from "./Footer";
import scenarex from '../../public/img/scenarex.png';

class Layout extends React.Component {
  render() {
    const { headerData, children, footerData, path, title } = this.props
    return (
      <div className="container">
        <Helmet defaultTitle={title} titleTemplate={`%s | SCENAREXinc`}>
          <meta name="title" content={title} />
          <title>{title}</title>
          <meta property="og:image" content={"https://www.scenarex.ca/img/logo-colour.png"} />
          <meta property="og:title" content={title}/>
          <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
        </Helmet>
        <Header data={headerData} path={path} />
        <main>{children}</main>
        <Footer data={footerData}/>
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  fragment LayoutFragment on Query{
    headerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "header" } },fields: { langKey: { eq: $langKey } } } ) {
      edges {
        node {
          id
          fields {
            langKey
          }
          frontmatter {
            lang
            logo
            menuItems {
              label
              linkURL
              ref
            }
            discover
          }
        }
      }
    }
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } },fields: { langKey: { eq: $langKey } } } ) {
      edges {
        node {
          id
          fields {
            langKey
          }
          frontmatter {
            lang
            contentTitle
            contentItems {
              label
              linkURL
            }
            socialTitle
            socialItems {
              label
              linkURL
              icon
            }
            madeTitle
            madeItems {
              label
              linkURL
            }
            translations {
              using
              newsletter
              email
              subscribe
              copyright
            }
          }
        }
      }
    }
  }
`;
