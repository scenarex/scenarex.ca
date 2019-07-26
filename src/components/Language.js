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
    console.log(this.props)
    return (
      <div>
        <Link to={this.translatedLink("en-ca")} className={this.props.lang === "en-ca" ? "activeLang" : "lang"}>en</Link>
        &nbsp;
        <Link to={this.translatedLink("fr-ca")} className={this.props.lang === "fr-ca" ? "activeLang" : "lang"}>fr</Link>
      </div>
    )
  }
}

export default LanguageSwitcher;
