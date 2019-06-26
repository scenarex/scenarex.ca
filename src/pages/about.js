import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { RichText } from 'prismic-reactjs';
import translations from "../utils/translations.json";


const AboutPage = ({ data }) => {
  const page = data.prismic.allAbouts.edges[0].node;
  let members = page.body[0].fields;
  var i,j,chunk = 3;
  let memberChunks = [members/3]
  let k=0;
  for (i=0,j=members.length; i<j; i+=chunk) {
      memberChunks[k] = members.slice(i,i+chunk);
      k++
  }
  const lang = (page._meta.lang.split("-") )[0];
  return (
  <Layout title={page.title[0].text} path={page._meta.uid} headerData={data.headerData} footerData={data.footerData}>
    <main>
      <div className="row">
        <div className="6u 12u(small) biggest">
          <h2 className="biggest">{RichText.render(page.title)}</h2>
          <a href="#team" className="more">{translations["learn"][lang]}<br/><i className="fas fa-arrow-down fa-2x"></i></a>
        </div>
        <div className="6u 12u(small)">
          {RichText.render(page.text)}
        </div>
      </div>
      {memberChunks &&
      <div className="upper-border">
        <h2 className="big mtd" id="team">{translations["team"][lang]}</h2>
        {memberChunks.map ( (row,i) =>
          <div className="row 32%" key={i}>
            {row.map ((person, j) =>
              <div className="4u -1u 12u(small))" key={j}>
                <Link to={`/${lang}/${person.link._meta.uid}`}>
                  <img className="grey" src={person.person.url} alt={person.name[0].text}/>
                </Link>
                {RichText.render(person.name)}
                <p>{person.title1[0].text}<br/>
                <a href={`mailto:${person.email[0].text}`} className="green">{person.email[0].text}</a>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      }
    </main>
  </Layout>
  )
}
AboutPage.query = aboutQuery;

export default AboutPage

export const aboutQuery = graphql `
query aboutQuery($langKey: String){
prismic {
  allAbouts(lang: $langKey) {
    edges {
      node {
        title
        _meta {
          uid
          lang
          }
        text
        body {
          __typename
          ... on PRISMIC_AboutBodyTeam {
            fields {
              name
              title1
              email
              person
              link {
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
    }
  }
  ...LayoutFragment
}
`
