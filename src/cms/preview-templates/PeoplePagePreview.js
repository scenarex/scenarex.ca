import React from "react"
import PropTypes from "prop-types"
import { PeoplePageTemplate } from "../../templates/people-page";

const PeoplePagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
        <PeoplePageTemplate
          page={{
            frontmatter: data,
            fields: {
            langKey: data.language
            }
          }}
        />
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
