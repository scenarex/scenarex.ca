import React from "react";
import PropTypes from "prop-types";
import { NewsPostTemplate } from "../../templates/news-post";
import * as moment from 'moment';
import paragraphs from "lines-to-paragraphs";

const NewsPostPreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    let dateObj = moment(data.metadata.date, "YYYYMMDD")
    let date = dateObj.format("MMMM DD YYYY")
    return (
        <NewsPostTemplate
          author = {data.author}
          content = {data.body ? paragraphs(data.body) : ""}
          date={new Date(date)}
          lang={data.metadata.language}
          title={data.title}
        />
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
