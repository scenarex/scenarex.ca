import PropTypes from 'prop-types'
import React, {Component} from 'react'
import { Link } from 'gatsby'
import LanguageSwitch from "./language-switcher.js"
import { translate } from "react-i18next"

class Header extends Component {
  constructor(props) {
    super(props)
    this.title = props.siteTitle
  }
  render() {
    const { t } = this.props
    return (
      <header className="masthead">
         <h1 className="masthead-title">
           <Link to="/"><img src="/assets/images/scenarex.png" alt=""/></Link>
         </h1>
         <nav>
           <ul>
             <li><Link to="/about" className={this.title === "/about" ? "active" : ""}>{t("About")}</Link></li>
             <li><Link to="/lbf2019" className={this.title === "/lbf2019" ? "active" : ""}>{t("LBF2019")}</Link></li>
             <li>
                <Link to="/bookchain" className={this.title === "/bookchain" ? "active" : ""}>Bookchain®</Link>
                { this.title === "/" ?
                <div>
                  <br/><Link to="/bookchain" className="more menu" ><i className="fas fa-arrow-up fa-2x"></i><br/>{t("Discover")}</Link>
                </div>
                : null
                }
             </li>
             <li><Link to="/news" className={this.title === "/news" ? "active" : ""}>{t("News")}</Link></li>
             <li><Link to="/contact" className={this.title === "/contact" ? "active" : ""}>{t("Contact")}</Link></li>
             <li>
             <LanguageSwitch siteTitle={this.title}/>
             </li>
           </ul>
         </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default translate("translations")(Header)
