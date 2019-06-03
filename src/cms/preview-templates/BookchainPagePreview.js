import React from "react";
import PropTypes from "prop-types";
import { BookchainPageTemplate } from "../../templates/bookchain-page";

const BookchainPagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
        <BookchainPageTemplate
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

BookchainPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BookchainPagePreview
