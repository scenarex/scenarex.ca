import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/home-page";
import Helmet from 'react-helmet';

const HomePagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
      <div>
        <Helmet>
          <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
        </Helmet>
        <HomePageTemplate
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

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default HomePagePreview
