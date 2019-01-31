import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class ChristinePage extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title="Christine" keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <div className="6u 12u(small)">
            <img src="/assets/images/chris-500x500.jpg" alt=""/>
            <a href="mailto:christine@scenarex.ca"><i className="fas fa-envelope"></i> christine@scenarex.ca</a>
          </div>
          <div className="6u 12u(small)">
            <h2 className="big">Christine Joly</h2>
            <p>{t("ChrisLine1")}</p>
            <p>{t("ChrisLine2")}</p>
            <p>{t("ChrisLine3")}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(ChristinePage)
