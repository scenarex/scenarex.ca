import React from "react";
import PropTypes from "prop-types";
import Helmet from 'react-helmet';
import { FooterTemplate } from "../../components/Footer";

const FooterPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <div>
      <Helmet>
        <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
      </Helmet>
      <FooterTemplate data={data} langKey={data.language}/>
    </div>
  )
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FooterPreview;
