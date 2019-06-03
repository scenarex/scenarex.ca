import React from "react"
import PropTypes from "prop-types"
import { PeoplePageTemplate } from "../../templates/people-page";
import Helmet from 'react-helmet';

const PeoplePagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
      <div>
        <Helmet>
          <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
        </Helmet>
        <PeoplePageTemplate
          page={{
            frontmatter: data,
            fields: {
            langKey: data.language
            }
          }}
        />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

PeoplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PeoplePagePreview
