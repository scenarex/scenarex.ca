import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'

export const PeoplePageTemplate = props => {
  return (
    <div className="row">
      <div className="row">
        <div className="md:w-6/12 w-full px-12">
          <img src={props.page.img.url} alt="" />
          <a href={`mailto:${props.page.email.text}`}>
            <i className="fas fa-envelope"></i> {props.page.email.text}
          </a>
        </div>
        <div className="md:w-6/12 w-full px-12 mt-0">
          <div className="big">{RichText.render(props.page.name.richText)}</div>
          {RichText.render(props.page.description.richText)}
        </div>
      </div>
    </div>
  )
}

const PeoplePage = ({ data }) => {
  let page = data.allPrismicMember.edges[0].node.data
  return (
    <Layout
      title={page.name.text}
      path={data.allPrismicMember.edges[0].node.uid}
      alternate={data.allPrismicMember.edges[0].node.alternate_languages[0].uid}
      headerData={data.headerData}
      footerData={data.footerData}
    >
      <PeoplePageTemplate page={page} />
    </Layout>
  )
}

export default PeoplePage
// export const peopleQuery = graphql`
// query peopleQuery($langKey: String, $uid: String) {
// prismic {
//   allMembers(lang: $langKey, uid: $uid) {
//     edges {
//       node {
//         name
//         description
//         img
//         email
//         _meta {
//           uid
//           lang
//           alternateLanguages {
//             uid
//           }
//           }
//         }
//       }
//     }
//   }
//   ...LayoutFragment
// }
// `

export const peopleQuery = graphql`
  query peopleQuery($langKey: String, $uid: String) {
    allPrismicMember(filter: { lang: { eq: $langKey }, uid: { eq: $uid } }) {
      edges {
        node {
          uid
          lang
          alternate_languages {
            uid
          }
          data {
            description {
              richText
              text
            }
            email {
              richText
              text
            }
            member_type
            img {
              url
              alt
              copyright
            }
            name {
              richText
              text
            }
          }
        }
      }
    }
    ...LayoutFragment
  }
`
