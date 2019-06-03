import React from "react";
import PropTypes from "prop-types";
import { HeaderTemplate } from "../../components/Header";

const HeaderPreview = ({ entry }) => {
  console.log(entry)
  const data = entry.getIn(["data"]).toJS();
  return <HeaderTemplate data={data} langKey={data.langauge} path={`/${data.language}`}/>;
};

HeaderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HeaderPreview;
