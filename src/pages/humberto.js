import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class HumbertoPage extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title="Humberto - SCENAREXinc" keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <div className="6u 12u(small)">
            <img src="/Scenarex-HumbertoQuintana-Blockchaindev.png" alt=""/>
            <a href="mailto:humberto@scenarex.ca"><i className="fas fa-envelope"></i> humberto@scenarex.ca</a>
          </div>
          <div className="6u 12u(small)">
            <h2 className="big">Humberto Quintana</h2>
            <p>{t("HumbertoLine1")}</p>
            <p>{t("HumbertoLine2")}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(HumbertoPage)
