import React, {Component} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class LBF2019 extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title={this.props.lng === "fr" ? "LBF 2019 - SCENAREX" : "LBF 2019 - SCENAREX"} keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <h2 className="biggest">{t("LBF2019-Long")}</h2>
        </div>
        <div className="row">
          <a href="#agenda" className="more">{t("Book a meeting with us")}<br/><i className="fas fa-arrow-down fa-2x"></i></a>
        </div>

        <div className="upper-border">
          <h2 className="big mtd" id="agenda">{t("Agenda")}</h2>
          <div className="row">
            <iframe src="https://team-scenarex.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframeteam-scenarex" style="width:100%;height:1000px;border:0px;background-color:transparent;" frameborder="0" allowtransparency="true"></iframe>
            <script window.addEventListener && window.addEventListener("message", function(event){if (event.origin === "https://team-scenarex.youcanbook.me"){document.getElementById("ycbmiframeteam-scenarex").style.height = event.data + "px";}}, false);></script>
            <a href="https://team-scenarex.youcanbook.me/" data-ycbm-modal="true"><img src="https://youcanbook.me/resources/pics/ycbm-button.png" alt=""/></a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(LBF2019)
