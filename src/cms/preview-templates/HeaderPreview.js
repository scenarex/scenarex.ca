import React from "react";
import PropTypes from "prop-types";
import { HeaderTemplate } from "../../components/header";

const HeaderPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <HeaderTemplate data={data} langKey={data.langauge} path={`/${data.language}`}/>;
};

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HeaderPreview;
