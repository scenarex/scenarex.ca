import React, { Component } from "react"
import { translate } from "react-i18next"

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.title = this.props.siteTitle
    this.splitTitle = this.props.siteTitle.split("/")

    i18n.changeLanguage(i18n.language.substring(0,2))

    this.state = { language: i18n.language ? i18n.language.substring(0,2) : "en"}
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  render() {
    return (
      <div className="LanguageSwitch">
        {this.splitTitle.length > 2 && (this.splitTitle[1] === "en" || this.splitTitle[1] === "fr") ?
          <div >
            <a href={"/en/"+this.splitTitle[2]} className={this.state.language === "en" ? "activeLang" : "lang"} onClick={() => this.handleChangeLanguage("en")}>en</a>
            &nbsp;
            <a href={"/fr/"+this.splitTitle[2]} className={this.state.language === "fr" ? "activeLang" : "lang"} onClick={() => this.handleChangeLanguage("fr")}>fr</a>
          </div>
          :
          <div>
            <a href={this.title} className={this.state.language === "en" ? "activeLang" : "lang"} onClick={() => this.handleChangeLanguage("en")}>en</a>
            &nbsp;
            <a href={this.title} className={this.state.language === "fr" ? "activeLang" : "lang"} onClick={() => this.handleChangeLanguage("fr")}>fr</a>
          </div>
        }
      </div>
    )
  }
}

export default translate("translations")(LanguageSwitcher)
