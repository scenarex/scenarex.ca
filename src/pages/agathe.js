import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class AgathePage extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title="Agathe - SCENAREXinc" keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <div className="6u 12u(small)">
            <img src="/assets/images/agathe-500x500.jpg" alt=""/>
            <a href="mailto:agathe@scenarex.ca"><i className="fas fa-envelope"></i> agathe@scenarex.ca</a>
          </div>
          <div className="6u 12u(small)">
            <h2 className="big">Agathe Cavanagh</h2>
            <p>{t("AgatheLine1")}</p>
            <p>{t("AgatheLine2")}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(AgathePage)
