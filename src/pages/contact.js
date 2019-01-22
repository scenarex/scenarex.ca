import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { translate } from "react-i18next"

class ContactPage extends Component {
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title={this.props.lng === "fr" ? "Nous joindre - SCENAREXinc" : "Contact - SCENAREXinc"} keywords={[`gatsby`, `application`, `react`]} />
        <h2 className="biggest">{t("Headquarters")}</h2>

        <div className="row">
          <div className="6u 12u(small)">
            <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/kCLmX9JyEcJ2" className="image fit">
              <img src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDC9-VRzuJyogXND0-XR0Iv--Wbe5uAi1w&center=45.502091616181445,-73.56887695&zoom=10&markers=color:gray|45.502091616181445,-73.56887695&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.arterial%7Celement:labels%7Cvisibility:off&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels%7Cvisibility:off&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=640x360" alt="Map" />
            </a>
          </div>
          <div className="6u 12u(small)">
            <h3><i className="fas fa-map-marker-alt"></i> {t("Address")}</h3>
            Scenarex Inc<br/>
            {t("line1")}<br/>
            {t("line2")}
          </div>
        </div>
        <div className="row">
          <div className="4u 12u(small)">
            <h3><i className="fas fa-envelope"></i> {t("Email")}</h3>
            <a href="mailto:info@scenarex.ca">info@scenarex.ca</a>
          </div>
          <div className="4u 12u(small)">
            <h3><i className="fas fa-mobile-alt"></i> {t("Phone")}</h3>
            <a href="tel:+14385581885">CA 1 438-558-1885</a>
          </div>
          <div className="4u 12u(small)">
            <h3><i className="fab fa-slack"></i> Slack</h3>
            {t("Post to our ")}<a href="https://scenarex.slack.com/">{t("public")}</a> {t("channel")}
            <form id="slack">
              <input type="email" id="email" placeholder="Email"/>
              <input type="text" id="message" placeholder="Message"/>
              <button id="post"><i className="fas fa-bullhorn"></i> {t("Post")}</button>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default translate("translations")(ContactPage)
