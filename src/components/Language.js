import React from 'react';
import {Link} from "gatsby";

class LanguageSwitcher extends React.Component {
  render() {
    const current = ["en-ca", "fr-ca"].includes(this.props.path) ? "" : this.props.path;
    const alternate = ["en-ca", "fr-ca"].includes(this.props.alternate) ? "" : this.props.alternate;
    return (
      <div>
        <Link to={this.props.lang === "en" ? `/en/${current}` : `/en/${alternate}`} className={this.props.lang === "en" ? "activeLang" : "lang"}>en</Link>
        &nbsp;
        <Link to={this.props.lang === "fr" ? `/fr/${current}` : `/fr/${alternate}`} className={this.props.lang === "fr" ? "activeLang" : "lang"}>fr</Link>
      </div>
    )
  }
}

export default LanguageSwitcher;
