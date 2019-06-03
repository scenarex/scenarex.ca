import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";
import Helmet from 'react-helmet';

const AboutPagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    let members = data.members;
    var i,j,chunk = 3;
    let memberChunks = [members/3]
    let k=0;
    for (i=0,j=members.length; i<j; i+=chunk) {
        memberChunks[k] = members.slice(i,i+chunk);
        k++
    }
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/fonts.bookchain.ca/fonts.css" />
          <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
        </Helmet>
        <AboutPageTemplate
          page={{
            frontmatter: data,
            fields: {
            langKey: data.language
            },
            memberChunks: memberChunks
          }}
        />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
