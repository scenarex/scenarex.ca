import React from 'react';
import {Link} from "gatsby";
import routes from "../utils/routes.json";

class LanguageSwitcher extends React.Component {
  translatedLink(lang) {
    if (routes[this.props.path]) {
      return routes[this.props.path][lang]
    }
    else {
      return `/${lang}/${this.props.path}`
    }
  }
  render() {
    return (
      <div>
        <Link to={this.translatedLink("en")} className={this.props.lang === "en" ? "activeLang" : "lang"}>en</Link>
        &nbsp;
        <Link to={this.translatedLink("fr")} className={this.props.lang === "fr" ? "activeLang" : "lang"}>fr</Link>
      </div>
    )
  }
}

export default LanguageSwitcher;
