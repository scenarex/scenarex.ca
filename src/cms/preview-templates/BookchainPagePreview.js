import React from "react";
import PropTypes from "prop-types";
import { BookchainPageTemplate } from "../../templates/bookchain-page";
import Helmet from 'react-helmet';

const BookchainPagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    console.log(data)
    return (
      <div>
        <Helmet>
          <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
        </Helmet>
        <BookchainPageTemplate
          page={{
            frontmatter: data,
            langKey: data.metadata.language
          }}
        />
      </div>
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
