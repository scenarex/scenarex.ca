import React from "react";
import { graphql } from "gatsby";
import { Header } from "./header";
import { Footer } from "./footer";

const Layout = (props) => {
  const { headerData, footerData, children, path, alternate } = props;
  return (
    <div className="container mx-auto">
      <Header headerData={headerData} path={path} alternate={alternate} />
      {children}
      <Footer footerData={footerData} />
    </div>
  );
};

export const query = graphql`
  fragment LayoutFragment on Query {
    prismicHeader(lang: { eq: $lang }) {
      lang
      data {
        logo {
          alt
          copyright
          url
        }
        header_name
        navigation {
          link {
            link_type
            document {
              ... on PrismicAbout {
                uid
                data {
                  title {
                    text
                  }
                }
              }
              ... on PrismicNewsroom {
                uid
                data {
                  title {
                    text
                  }
                }
              }
              ... on PrismicContact {
                uid
                data {
                  title {
                    text
                  }
                }
              }
              ... on PrismicBookchain {
                data {
                  title {
                    text
                  }
                }
                uid
              }
            }
          }
        }
      }
    }

    prismicFooter(lang: { eq: $lang }) {
      lang
      data {
        column1_title {
          text
          richText
        }
        column1_items {
          item_url {
            uid
            lang
          }
          item_label
        }
        column2_title {
          text
          richText
        }
        column2_items {
          item_icon
          item_label
          item_url {
            url
          }
        }
        column3_title {
          text
        }
        column3_items {
          item_label
          item_url {
            url
          }
        }
      }
    }
  }
`;

export default Layout;
