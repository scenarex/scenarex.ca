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
          <a href={`mailto:${props.page.email[0].text}`}>
            <i className="fas fa-envelope"></i> {props.page.email[0].text}
          </a>
        </div>
        <div className="md:w-6/12 w-full px-12 mt-0">
          <div className="big">{RichText.render(props.page.name)}</div>
          {RichText.render(props.page.description)}
        </div>
      </div>
    </div>
  )
}

const PeoplePage = ({ data }) => {
  console.log(data)
  let page = data.prismic.allMembers.edges[0].node
  console.log('castle>>>>>>')
  return (
    <h2>fjkhfjkshkjfksahfkljhsjkafh</h2>
    // <Layout
    //   title={page.name[0].text}
    //   path={page._meta.uid}
    //   alternate={page._meta.alternateLanguages[0].uid}
    //   headerData={data.headerData}
    //   footerData={data.footerData}
    // >
    //   <PeoplePageTemplate page={page} />
    // </Layout>
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
    prismicMember(lang: { eq: $langKey }, uid: { eq: $uid }) {
      data {
        description {
          text
        }
        email {
          text
        }
        name {
          text
        }
        member_type
        img {
          alt
          copyright
          url
        }
      }
      uid
      lang
      alternate_languages {
        uid
      }
    }
    ...LayoutFragment
  }
`
