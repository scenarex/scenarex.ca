import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import translations from '../utils/translations.json'

const AboutPage = ({ data }) => {
  const page = data.prismicAbout.data
  let team = page.body[0].items
  let committee = page.body[1].items

  var i,
    j,
    chunk = 4
  let teamChunks = [team / 4]
  let k = 0
  for (i = 0, j = team.length; i < j; i += chunk) {
    teamChunks[k] = team.slice(i, i + chunk)
    k++
  }
  var m,
    n,
    chunk = 4
  let committeeChunks = [committee / 4]
  let l = 0
  for (m = 0, n = committee.length; m < n; m += chunk) {
    committeeChunks[l] = committee.slice(m, m + chunk)
    l++
  }

  const lang = data.prismicAbout.lang.split('-')[0]
  return (
    <Layout
      title={page.title.text}
      path={data.prismicAbout.uid}
      alternate={data.prismicAbout.alternate_languages[0].uid}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <main>
        <div className="row">
          <div className="md:w-6/12 w-full biggest">
            {RichText.render(page.title.richText)}
            <a
              href="#team"
              className="opacity-100 outline-none absolute text-center text-sm uppercase font-normal z-10 md:block hidden"
            >
              {translations['learn'][lang]}
              <br />
              <i className="fas fa-arrow-down fa-2x"></i>
            </a>
          </div>
          <div className="md:w-6/12 w-full">
            {RichText.render(page.text.richText)}
          </div>
        </div>
        {teamChunks && (
          <div className="upper-border">
            <h2 className="big mtd" id="team">
              {page.body[0].primary.teamtitle.text}
            </h2>
            {teamChunks.map((row, i) => (
              <div className="row" key={i}>
                {row.map((person, j) => (
                  <div className="md:w-3/12 w-full pl-8" key={j}>
                    <Link to={`/${lang}/${person.link.document.uid}`}>
                      <img
                        className="grey"
                        src={person.person.url}
                        alt={person.name.text}
                      />
                    </Link>
                    {RichText.render(person.name.richText)}
                    <p>
                      {person.title1.text}
                      <br />
                      <a
                        href={`mailto:${person.email.text}`}
                        className="text-scenarexGreen"
                      >
                        {person.email.text}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {committeeChunks && (
          <div className="upper-border">
            <h2 className="big mtd" id="team">
              {page.body[1].primary.teamtitle.text}
            </h2>
            {committeeChunks.map((row, i) => (
              <div className="row" key={i}>
                {row.map((person, j) => (
                  <div className="md:w-3/12 w-full pl-8" key={j}>
                    <Link to={`/${lang}/${person.link.document.uid}`}>
                      <img
                        className="grey"
                        src={person.person.url}
                        alt={person.name.text}
                      />
                    </Link>
                    {RichText.render(person.name)}
                    <p>
                      {person.title1.text}
                      <br />
                      <a
                        href={`mailto:${person.email.text}`}
                        className="text-scenarexGreen"
                      >
                        {person.email.text}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </main>
    </Layout>
  )
}

export const aboutQuery = graphql`
  query aboutQuery($langKey: String) {
    prismicAbout(lang: { eq: $langKey }) {
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
        uid
      }
      lang
      uid
    }

    ...LayoutFragment
  }
`
AboutPage.query = aboutQuery

export default AboutPage
