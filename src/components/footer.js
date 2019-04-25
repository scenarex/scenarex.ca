import React, {Component} from 'react'
import Menu from "./menu"
import i18n from "i18next"
import { translate } from "react-i18next"

class Footer extends Component{
  constructor(props) {
    super(props)
    this.title = props.siteTitle
  }
  render() {
    const { t } = this.props
    return (
      <footer className="upper-border">
        <div className="row">
          <div className="3u 6u(small)">
            <h3>SCENAREXinc</h3>
          </div>
          <div className="3u 6u$(small)">
            <h3>Contents</h3>
            <nav>
              <Menu />
            </nav>
          </div>
          <div className="3u 6u(small)">
            <h3>Social</h3>
            <nav>
              <ul>
                <li><i className="fab fa-facebook"></i> <a href="https://www.facebook.com/scenarex/">Facebook</a></li>
                <li><i className="fab fa-twitter"></i> <a href="https://twitter.com/Scenarex">Twitter</a></li>
                <li><i className="fab fa-github"></i> <a href="https://github.com/Scenarex">Github</a></li>
              </ul>
            </nav>
          </div>
          <div className="3u 6u$(small)">
            <nav>
              <h3>{t("Made with")}<i className="fas fa-heart" style={{color: "#E15554"}}></i>{t("using")}</h3>
              <ul>
                <li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>
                <li><a href="https://github.com/ajlkn/skel">Skel.io</a></li>
                <li><a href="http://www.modularscale.com/">Modular Scale</a></li>
                <li><a href="https://www.typography.com/fonts/gotham/overview/">Gotham</a></li>
                <li><a href="https://fontawesome.com/license">Font Awesome</a></li>
              </ul>
            </nav>
          </div>
          <div className="12u">
            <h3>{t("Sign up for our newsletter")}</h3>
            <form action={"https://scenarex.us14.list-manage.com/subscribe/post?u=55adcdb3618aefdb354ae8f92&amp;id=b554781cb8&SIGNUP=SCENAREX-" + i18n.language} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate row" target="_blank" noValidate>
              <div className="mc-field-group 6u 12u(small)">
                <input type="email" defaultValue="" placeholder="Email" name="EMAIL" className="required email" id="mce-EMAIL"/>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                <div className="response" id="mce-success-response" style={{display:"none"}}></div>
              </div>
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_55adcdb3618aefdb354ae8f92_b554781cb8" tabIndex="-1" defaultValue=""/></div>
              <div className="clear 3u 12u(small)"><button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"><i className="fas fa-info-circle"></i>&nbsp;{t("Subscribe")}</button></div>
            </form>
          </div>
          <div className="12u$ copyright">
            <i className="fab fa-creative-commons"></i> <i className="fab fa-creative-commons-by"></i> <i className="fab fa-creative-commons-sa"></i>
            <small>{t("This work is licensed under a ")}<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</small>
          </div>
        </div>
      </footer>
    )
  }
}

export default translate("translations")(Footer)
