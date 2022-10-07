import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import translations from "../utils/translations.json";

export function Head({ data }) {
  return <title>{data.prismicContact.data.title.text} - SCENAREXinc</title>;
}

const ContactPage = ({ data }) => {
  const page = data.prismicContact;
  const lang = page.lang;
  return (
    <Layout title={"Contact"} path={page.uid} alternate={page.alternate_languages} headerData={data.prismicHeader} footerData={data.prismicFooter}>
      <main>
        <h2 className="sm:text-6xl text-4xl biggest">{page.data.title.text}</h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="">
            <a target="_blank" rel="noopener noreferrer" href={page.data.map_link.url} className="image fit">
              <img src={page.data.map.url} alt="Map" />
            </a>
          </div>
          <div className="">
            <h3>
              <i className="fas fa-map-marker-alt"></i> {translations["address"][lang]}
            </h3>
            {RichText.render(page.data.address.richText)}
            <h3>
              <i className="fas fa-envelope"></i> {translations["email"][lang]}
            </h3>
            <a href={`mailto:${page.data.email.text}`} className="text-bookchainGreen">
              {page.data.email.text}
            </a>
            <h3>
              <i className="fas fa-mobile-alt"></i> {translations["phone"][lang]}
            </h3>
            <a href={`tel:${page.data.phone.text}`} className="text-bookchainGreen">
              {page.data.phone.text}
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query contactQuery($lang: String) {
    prismicContact(lang: { eq: $lang }) {
      uid
      lang
      data {
        address {
          richText
          text
        }
        email {
          richText
          text
        }
        map {
          url
        }
        map_link {
          url
        }
        phone {
          text
          richText
        }
        title {
          text
          richText
        }
      }
      alternate_languages {
        uid
        lang
      }
    }
    ...LayoutFragment
  }
`;
export default ContactPage;
