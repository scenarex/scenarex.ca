import React, {Component} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class AboutPage extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title={this.props.lng === "fr" ? "À propos - SCENAREXinc" : "About - SCENAREXinc"} keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <div className="6u 12u(small)">
            <h2 className="biggest">{t("About")}</h2>
            <a href="#team" className="more">{t("Check out the team")}<br/><i className="fas fa-arrow-down fa-2x"></i></a>
          </div>
          <div className="6u 12u(small)">
            <p>{t("Scenarex1")}</p><p>{t("Scenarex2")}</p><p>{t("Scenarex3")}</p>
          </div>
        </div>

        <div className="upper-border">
          <h2 className="big mtd" id="team">{t("Team")}</h2>
          <div className="row 32%">
            <div className="4u -1u 12u(small)">
              <Link to="/simon-pierre">
                <img className="grey" src="/sp-500x500.jpg" alt=""/>
              </Link>
              <h3>Simon-Pierre Marion</h3>
              <p>{t("Founder  Chief Executive Officer")}
              <br/>
              <a href="mailto:simon-pierre@scenarex.ca" className="green">spmarion@scenarex.ca</a></p>
            </div>
            <div className="4u 12u(small)">
              <Link to="/christine">
                <img className="grey" src="/chris-500x500.jpg" alt=""/>
              </Link>
              <h3>Christine Joly</h3>
              <p>{t("Chief Commercial Officer")}
              <br/>
              <a href="mailto:christine@scenarex.ca" className="green">christine@scenarex.ca</a></p>
            </div>
            <div className="4u 12u(small)">
              <Link to="/agathe">
                <img className="grey" src="/agathe-500x500.jpg" alt="" />
              </Link>
              <h3>Me. Agathe Cavanagh</h3>
              <p>{t("Legal Director")}
              <br/>
              <a href="mailto:agathe@scenarex.ca" className="green">agathe@scenarex.ca</a></p>
            </div>
          </div>
          <div className="row 32%">
            <div className="4u -1u 12u(small)">
              <Link to="/steve">
                <img className="grey" src="/steve-500x500.jpg" alt=""/>
              </Link>
              <h3>Steve Breault</h3>
              <p>{t("Chief Technology Officer")}
              <br/>
              <a href="https://www.twitter.com/whyisthosething" className="green">@whyisthosething</a></p>
            </div>
            <div className="4u 12u(small)">
              <Link to="/mackenzie">
                <img className="grey" src="/mackenzie-500x500.jpg" alt=""/>
              </Link>
              <h3>Mackenzie Sheridan</h3>
              <p>{t("Frontend Developer")}
              <br/>
              <a href="mailto:mackenzie@scenarex.ca" className="green">mackenzie@scenarex.ca</a></p>
            </div>
            <div className="4u 12u(small)">
              <Link to="/humberto">
                <img className="grey" src="/humberto-500x500.jpg" alt=""/>
              </Link>
              <h3>Humberto Quintana</h3>
              <p>{t("Blockchain Developer")}
              <br/>
              <a href="mailto:humberto@scenarex.ca" className="green">humberto@scenarex.ca</a></p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(AboutPage)
