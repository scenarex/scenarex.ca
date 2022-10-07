import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText } from "prismic-reactjs";
import translations from "../utils/translations.json";

export function Head({data}) {
  return (
    <title>{data.prismicAbout.data.title.text} - SCENAREXinc</title>
  )
}

const AboutPage = ({ data }) => {
  console.log(data);
  const page = data.prismicAbout.data;
  let team = page.body[0].items;
  let committee = page.body[1].items;

  const lang = data.prismicAbout.lang.split("-")[0];
  return (
    <Layout
      title={page.title.text}
      path={data.prismicAbout.uid}
      alternate={data.prismicAbout.alternate_languages}
      headerData={data.prismicHeader}
      footerData={data.prismicFooter}
    >
      <main>
        <div className="row">
          <div className="md:w-6/12 w-full biggest">
            {RichText.render(page.title.richText)}
            <a href="#team" className="opacity-100 outline-none absolute text-center text-sm uppercase font-normal z-10 md:block hidden">
              {translations["learn"][lang]}
              <br />
              <i className="fas fa-arrow-down fa-2x"></i>
            </a>
          </div>
          <div className="md:w-6/12 w-full">{RichText.render(page.text.richText)}</div>
        </div>
        {team && (
          <div className="upper-border">
            <h2 className="big mtd" id="team">
              {page.body[0].primary.teamtitle.text}
            </h2>
            <div className="grid grid-cols-4 gap-8">
              {team.map((person, i) => (
                <div className="" key={i}>
                  <Link to={`/${lang}/${person.link.document.uid}`}>
                    <img className="grey" src={person.person.url} alt={person.name.text} />
                  </Link>
                  {RichText.render(person.name.richText)}
                  <p>
                    {person.title1.text}
                    <br />
                    <a href={`mailto:${person.email.text}`} className="text-scenarexGreen">
                      {person.email.text}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {committee && (
          <div className="upper-border">
            <h2 className="big mtd" id="team">
              {page.body[1].primary.teamtitle.text}
            </h2>
            <div className="grid grid-cols-4 gap-8 ">
              {committee.map((person, i) => (
                <div className="" key={i}>
                  <Link to={`/${lang}/${person.link.document.uid}`}>
                    <img className="grey" src={person.person.url} alt={person.name.text} />
                  </Link>
                  {RichText.render(person.name)}
                  <p>
                    {person.title1.text}
                    <br />
                    <a href={`mailto:${person.email.text}`} className="text-scenarexGreen">
                      {person.email.text}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query aboutQuery($lang: String, $id: String!) {
    prismicAbout(id: { eq: $id }, lang: { eq: $lang }) {
      data {
        title {
          richText
          text
        }
        text {
          richText
          text
        }
        body {
          ... on PrismicAboutDataBodyTeam {
            id
            primary {
              teamtitle {
                richText
                text
              }
            }
            items {
              email {
                richText
                text
              }
              link {
                document {
                  ... on PrismicMember {
                    lang
                    uid
                  }
                }
              }
              name {
                richText
                text
              }
              person {
                alt
                copyright
                url
                gatsbyImageData
              }
              title1 {
                richText
                text
              }
            }
          }
        }
      }
      alternate_languages {
        lang
        uid
      }
      lang
      uid
    }
    ...LayoutFragment
  }
`;

export default AboutPage;
