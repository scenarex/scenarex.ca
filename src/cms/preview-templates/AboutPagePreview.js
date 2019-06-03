import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

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
        <AboutPageTemplate
          page={{
            frontmatter: data,
            fields: {
            langKey: data.language
            },
            memberChunks: memberChunks
          }}
        />
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
