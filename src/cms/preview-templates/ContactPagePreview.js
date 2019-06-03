import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";
import Helmet from 'react-helmet';

const ContactPagePreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
      <div>
        <Helmet>
          <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
        </Helmet>
        <ContactPageTemplate
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

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ContactPagePreview
