import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/home-page";

const HomePagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
        <HomePageTemplate
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

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default HomePagePreview
