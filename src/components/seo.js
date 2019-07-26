/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const SEO = () => {

  return (
    <Helmet defaultTitle={"Mackenzie"}>
      <script defer src="https://kit.fontawesome.com/dbe50f6069.js"></script>
      <script>
        {`window.prismic = {
          endpoint: 'https://scenarex.cdn.prismic.io/api/v2'
        };`}
      </script>
      <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js"></script>
    </Helmet>
  )
}


export default SEO
