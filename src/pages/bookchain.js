import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class BookchainPage extends Component {
  render (){
  const { t } = this.props
    return (
        <Layout location={this.props.location}>
          <SEO title="Bookchain® - SCENAREXinc" keywords={[`gatsby`, `application`, `react`]} />
            <div className="row">
              <div className="6u 12u(small)">
                <img src="/assets/images/Logo-Bookchain-Large-Transparent.png" alt=""/>
                <h2 className="biggest">{t("Bookchain")}</h2>
                <p>{t("Ebooks reimagined")}</p>
                <div className="timeline">
                  <div className="entry">
                    <div className="time">
                      <h5>{t("Feb 2019")}</h5>
                    </div>
                    <div className="body">
                      <h3>{t("General Availability")}</h3>
                      <ul>
                        <li>{t("BETA Rollout to Publishers & Authors")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="entry">
                    <div className="time">
                      <h5>{t("Oct 2018")}</h5>
                    </div>
                    <div className="body">
                      <h3>{t("Version 020")} <span className="label">{t("STABLE")}</span></h3>
                      <ul>
                        <li>{t("Production BETA release")}</li>
                        <li>{t("End-to-end transactions")}</li>
                        <li>{t("Sale and lending in reader")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="entry">
                    <div className="time">
                      <h5>{t("May 2018")}</h5>
                    </div>
                    <div className="body">
                      <h3>{t("Version 010")} <span className="label">{t("BETA 1")}</span></h3>
                      <ul>
                        <li>{t("First beta release")}</li>
                        <li>{t("Publisher and EPUB on-boarding")}</li>
                        <li>{t("End-user on-boarding")}</li>
                        <li>{t("Rights transfer")}</li>
                        <li>{t("Media encryption")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="entry">
                    <div className="time">
                      <h5>{t("Apr 2017")}</h5>
                    </div>
                    <div className="body">
                      <h3>{t("Version 001")} <span className="label">{t("ALPHA 1")}</span></h3>
                      <ul>
                        <li>{t("Prototype")}</li>
                        <li>{t("Blockchain contract")}</li>
                        <li>{t("Manual EPUB encapsulation")}</li>
                        <li>{t("Manual media encryption")}</li>
                        <li>{t("End-user reading")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="smaller">{t("Bookchain will first be available for epubs our team continues to work on the integration to make it available to other formats")}</p>
              </div>
              <div className="6u 12u(small)">
                <div className="12u">
                  <p>{t("new")}</p><p>{t("innovative")}</p><p>{t("protecting")}
                  </p>
                  <h2 className="mt">{t("With it we want to do 3 things")}</h2>
                  <p>
                    <i className="fas fa-child fa-3x fa-pull-left"></i>
                    {t("empower")}
                  </p>
                  <p>
                    <i className="fas fa-chart-pie fa-3x fa-pull-left"></i>
                    {t("allow publishers")}
                  </p>
                  <p>
                    <i className="far fa-money-bill-alt fa-3x fa-pull-left"></i>
                    {t("bring to market")}
                  </p>
                  <h2 className="mt">{t("Who can use Bookchain")}</h2>
                  <p>
                    {t("designed for diffeent needs")}
                  </p>
                  <h2 className="mt">{t("How does it work")}</h2>
                  <p>
                    {t("account creation")}
                  </p>
                </div>
              </div>
            </div>
            <div className="row upper-border mtd">
              <div className="3u 12u(small)">
                <h2><i className="fas fa-lock"></i> {t("SECURITY")}</h2>
                <p className="smaller">{t("security description")}</p>
              </div>
              <div className="3u 12u(small)">
                <h2><i className="fas fa-thumbtack"></i> {t("TRACEABILITY")}</h2>
                <p className="smaller">{t("traceability description")}</p>
              </div>
              <div className="3u 12u(small)">
                <h2><i className="far fa-edit"></i> {t("ATTRIBUTION")}</h2>
                <p className="smaller">{t("attribution description")}</p>
              </div>
              <div className="3u 12u(small)">
                <h2><i className="fas fa-share"></i> {t("DISTRIBUTION")}</h2>
                <p className="smaller">{t("distribution description")}</p>
              </div>
            </div>
            <div className="row upper-border mtd">
                <h2 className="biggest"> {t("BOOKCHAIN SOLUTIONS")}</h2>
                <p className="smaller">{t("Bookchain solutions description")}</p>
            </div>
          </Layout>
        )
      }
  }
export default translate("translations")(BookchainPage)
