import React from "react";
import PropTypes from "prop-types";

const NewsPostPreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    return (
      <div className="press">
        <span className='post-title'>
          <h3>{data.source}</h3>
          <a href={data.external_url}>{ data.title } <i className="fas fa-external-link-alt"></i></a>
        </span>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

NewsPostPreview.propTypes = {
  widgetFor: String,
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default NewsPostPreview
