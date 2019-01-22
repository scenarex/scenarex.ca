import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import i18n from "./i18n"

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title

          }
        }
      }
    `}
    render={data => (
      <div className="container">
        <Header siteTitle={location ? location.pathname : "SCENAREXinc"}/>
        <div
        >
          {children}
        <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
