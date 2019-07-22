import "../styles/style.css"
import React from "react";
import { graphql } from "gatsby";
import Helmet from 'react-helmet';
import { Header } from "./header";
import { Footer } from "./footer";

class Layout extends React.Component {
  render() {
    const { headerData, footerData, children, path, title } = this.props;
    return (
      <div className="container mx-auto">
        <Helmet defaultTitle={title} titleTemplate={`%s | SCENAREXinc`}>
          <meta name="title" content={title} />
          <title>{title}</title>
          <meta property="og:image" content={"https://www.scenarex.ca/img/logo-colour.png"} />
          <meta property="og:title" content={title}/>
          <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
          <script>
            {`window.prismic = {
              endpoint: 'https://scenarex.cdn.prismic.io/api/v2'
            };`}
          </script>
          <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js"></script>
        </Helmet>
        <Header headerData={headerData} path={path}/>
        <main>{children}</main>
        <Footer footerData={footerData}/>
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  fragment LayoutFragment on Query{
    headerData: prismic {
      allHeaders (lang: $langKey) {
      edges {
        node {
          _meta {
            lang
          }
          header_logo
          menu_items {
            ref
            link_label
            link_url {
              ... on PRISMIC__Document {
                _meta {
                  uid
                  lang
                }
              }
            }
          }
        }
      }
    }
  }
  footerData: prismic {
    allFos (lang: $langKey) {
    edges {
      node {
        _meta {
          lang
        }
        column1_title
        column1_items {
          item_url {
            ... on PRISMIC__Document {
              _meta {
                uid
                lang
              }
            }
          }
          item_label
        }
        column2_title
        column2_items {
          item_label
          item_icon
          item_url {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
        }
        column3_title
        column3_items {
          item_label
          item_url {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
        }
      }
    }
  }
}
}
`
