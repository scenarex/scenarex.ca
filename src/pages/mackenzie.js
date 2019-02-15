import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class MackPage extends Component  {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title="Mackenzie - SCENAREXinc" keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <div className="6u 12u(small)">
            <img src="/Scenarex-MackenzieSheridan-Frontend.png" alt=""/>
            <a href="mailto:mackenzie@scenarex.ca"><i className="fas fa-envelope"></i> mackenzie@scenarex.ca</a>
          </div>
          <div className="6u 12u(small)">
            <h2 className="big">Mackenzie Sheridan</h2>
            <p>{t("MackLine1")}</p>
            <p>{t("MackLine2")}</p>
            <p>{t("MackLine3")}</p>
          </div>
        </div>
      </Layout>
    )
  }
}


export default translate("translations")(MackPage)
