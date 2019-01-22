import { Link } from 'gatsby'
import React, {Component} from 'react'
import { translate } from "react-i18next"

class Menu extends Component {
  render() {
    const { t } = this.props
    return (
        <ul>
          <li><Link to="/about">{t("About")}</Link></li>
          <li><Link to="/bookchain">Bookchain®</Link></li>
          <li><Link to="/news">{t("News")}</Link></li>
          <li><Link to="/contact">{t("Contact")}</Link></li>
        </ul>
      )
    }
}
export default translate("translations")(Menu)
