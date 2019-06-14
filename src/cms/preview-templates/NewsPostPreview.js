import React from "react";
import PropTypes from "prop-types";
import { NewsPostTemplate } from "../../templates/news-post";
import * as moment from 'moment';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

const NewsPostPreview = ({ entry }) => {
  if (entry) {
    const data = entry.getIn(["data"]).toJS()
    let dateObj = moment(data.metadata.date, "YYYYMMDD")
    let date = dateObj.format("MMMM DD YYYY")
    console.log(data.body)
    const text = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.body).toString();
    console.log(text)
    return (
        <NewsPostTemplate
          author = {data.author}
          content = {text ? text : ""}
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
