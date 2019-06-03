import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";

const ContactPagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
        <ContactPageTemplate
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

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ContactPagePreview
