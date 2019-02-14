import React, {Component} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class LBF2019 extends Component {

  async componentDidMount() {
    if(window) {
      window.addEventListener("message", function(event){
        if (event.origin === "https://team-scenarex.youcanbook.me"){
          document.getElementById("ycbmiframeteam-scenarex").style.height = event.data + "px";
        }
        });
    }
  }

  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title={this.props.lng === "fr" ? "LBF 2019 - SCENAREX" : "LBF 2019 - SCENAREX"} keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <h2 className="biggest">{t("LBF2019-Long")}</h2>
          <p className="smaller_close"><a href="https://www.londonbookfair.co.uk/en/Sessions/71968/Blockchain-for-Publishing-Basics-Applications-and-Opportunities">{t("LBF2019-Long no year")}</a>
          {t("LBF2019 description")}</p>
          <h3>{t("LBF2019 dates")}</h3>
          <p className="smaller_close">{t("LBF2019 team")}</p>
        </div>
        <div className="row">
         <h3>
          <a href="#agenda" className="more">{t("Book a meeting with us")}<br/><i className="fas fa-arrow-down fa-2x"></i></a>
         </h3>
        </div>

        <div className="upper-border">
          <h3 className="big mtd">{t("Seminar")}</h3>
          <div className="row">
            <p className="smaller_close">{t("Attend our seminar par 1")}</p>
            <p className="smaller_close">{t("Attend our seminar par 2")}</p>
            <p className="smaller_close">{t("Seminar details")}</p>
            <p className="smaller_close">{t("Seminar details title")}</p>
            <p className="smaller_close">{t("Seminar details dates")}</p>
            <p className="smaller_close">{t("Seminar details location")}</p>
            <p>
            <a href="https://www.londonbookfair.co.uk/en/Sessions/71968/Blockchain-for-Publishing-Basics-Applications-and-Opportunities" className="more">{t("Seminar details link")}<br/></a>
            </p>
          </div>
        </div>


        <div className="upper-border">
          <h2 className="big mtd" id="agenda">{t("Agenda")}</h2>
          <div className="row">
            <p className="smaller_close">{t("Agenda par 1")}</p>
            <p className="smaller_close">{t("Agenda par 2")}</p>
            <p className="smaller_close">{t("Agenda connect")}<a href="mailto:christine@scenarex.ca"><i className="fas fa-envelope"></i> christine@scenarex.ca</a></p>
            <iframe
              src="https://team-scenarex.youcanbook.me/?noframe=true&skipHeaderFooter=true"
              id="ycbmiframeteam-scenarex"
              style={{width: "100%", height: "1000px", border: "0px", backgroundColor: "transparent"}}
              frameborder="0" allowtransparency="true">
            </iframe>
          <a href="https://team-scenarex.youcanbook.me/" data-ycbm-modal="true"><img src="https://youcanbook.me/resources/pics/ycbm-button.png" alt=""/></a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(LBF2019)
