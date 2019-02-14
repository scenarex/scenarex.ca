import React, {Component} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import "../sass/main.scss"
import { translate } from "react-i18next"

class IndexPage extends Component{
  render (){
  const { t } = this.props
    return (
      <Layout location={this.props.location}>
        <SEO title="SCENAREXinc - A blockchain company" keywords={[`gatsby`, `application`, `react`]} />
        <section className="masthead">
          <p>{t("We partner with talented people to build blockchain publishing solutions")}</p>
        </section>

        <section className="masthead upper-border">
          <h2 className="big">{t("Our Partners & Advisor")}</h2>
          <div className="row flex 50%">
            <div className="25u 12u$(small) flex">
              <Link to="https://www.cmf-fmc.ca/">
                <img className="grey" src="/cmf.png" style={{maxHeight: "60px"}} alt=""/>
              </Link>
            </div>
            <div className="25u 12u$(small) flex">
              <Link to="https://www.copibec.ca">
                <img className="grey" src="/copibec.png" style={{maxHeight: "70px"}} alt=""/>
              </Link>
            </div>
            <div className="25u 12u$(small) flex">
              <Link to="http://www.bcf.ca/en">
                <img className="grey" src="/bcf.png" style={{maxHeight: "70px"}} alt=""/>
              </Link>
            </div>
            <div className="25u 12u$(small) flex">
              <Link to="https://www.nrc-cnrc.gc.ca/">
                <img className="grey" src="/cnrc.png" style={{maxHeight: "70px"}} alt=""/>
              </Link>
            </div>
            <div className="25u 12u$(small) flex">
              <Link to="https://www.w3.org/">
                <img className="grey" src="/w3c.png" style={{maxHeight: "70px"}} alt=""/>
              </Link>
            </div>
          </div>
        </section>

        <section className="masthead upper-border">
          <h2 className="big">{t("Our Tools & Technologies")}</h2>
          <div className="row inline flex">
            <div className="3u 12u$(small) flex">
              <span className="fa-layers fa-fw fa-8x">
                <i className="fa fa-circle icon-background"></i>
                <i className="fab fa-ethereum" data-fa-transform="shrink-6"></i>
              </span>
              <h2><Link to="https://www.ethereum.org/">Ethereum</Link></h2>
              <p>{t("blockchain")}</p>
            </div>
            <div className="3u 12u$(small) flex">
              <span className="fa-layers fa-fw fa-8x">
                <i className="fa fa-circle icon-background"></i>
                <i className="fab fa-aws" data-fa-transform="shrink-6"></i>
              </span>
              <h2><Link to="https://serverless.com/">Serverless AWS</Link></h2>
              <p>{t("Scalable architecture and simplified deployment and infrastructure")}</p>
            </div>
            <div className="3u 12u$(small) flex">
              <span className="fa-layers fa-fw fa-8x">
                <i className="fa fa-circle icon-background"></i>
                <i className="fab fa-node" data-fa-transform="shrink-6"></i>
              </span>
              <h2><Link  to="https://nodejs.org/">Node.js® + Javascript</Link></h2>
              <p>{t("Lightweight client-side development and an efficient server environment")}</p>
            </div>
            <div className="3u 12u$(small) flex">
              <span className="fa-layers fa-fw fa-8x">
                <i className="fa fa-circle icon-background"></i>
                <i className="fab fa-python" data-fa-transform="shrink-6"></i>
              </span>
              <h2><Link to="https://www.python.org/">Python</Link></h2>
              <p>{t("Consistent workhorse for developing complex multi-protocol applications")}</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default translate("translations")(IndexPage)
