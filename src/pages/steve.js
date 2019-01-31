import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"
import "../sass/main.scss"

class StevePage extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title="Steve - SCENAREXinc" keywords={[`gatsby`, `application`, `react`]} />
        <div className="row">
          <div className="6u 12u(small)">
            <img src="/assets/images/steve-500x500.jpg" alt=""/>
            <a href="https://www.twitter.com/whyisthosething"><i className="fab fa-twitter"></i> @whyisthosething</a><br/>
            <a href="https://github.com/stevebreault"><i className="fab fa-github"></i> stevebreault</a>
          </div>
          <div className="6u 12u(small)">
            <h2 className="big">Steve Breault</h2>
            <p>{t("SteveLine1")}</p>
            <p>{t("SteveLine2")}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(StevePage)
