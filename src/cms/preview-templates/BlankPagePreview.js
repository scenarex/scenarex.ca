import React from "react";
import PropTypes from "prop-types";
import { BlankPageTemplate } from "../../templates/blank-page";

const BlankPagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
        <BlankPageTemplate
          page={{
            frontmatter: data,
            langKey: data.metadata.language
          }}
        />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlankPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BlankPagePreview
