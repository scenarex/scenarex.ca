import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class SPPage extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title="Simon-Pierre - SCENAREXinc" keywords={[`gatsby`, `application`, `react`]} />

        <div className="row">
          <div className="6u 12u(small)">
            <img src="/sp-500x500.jpg" alt=""/>
            <a href="mailto:spmarion@scenarex.ca"><i className="fas fa-envelope"></i> spmarion@scenarex.ca</a>
          </div>
          <div className="6u 12u(small)">
            <h2 className="big">Simon-Pierre Marion</h2>
            <p>{t("SPLine1")}</p>
            <p>{t("SPLine2")}</p>
            <p>{t("SPLine3")}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(SPPage)
