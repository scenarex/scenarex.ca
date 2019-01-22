import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
            <meta charset="utf-8" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={title} />
            <meta name="description" content={metaDescription[lang]} />
            <meta property="og:description" content={metaDescription[lang]} />
            <meta property="og:site_name" content={title} />
            {data.site.siteMetadata.date ? <meta property="og:type" content="article" /> : null}
            {data.site.siteMetadata.date ? <meta property="article:published_time" content={data.site.siteMetadata.date} />: null}
            <link defer rel="stylesheet" href="https://cloud.typography.com/7431656/6204392/css/fonts.css" />
            <script defer src="https://use.fontawesome.com/releases/v5.0.12/js/all.js" integrity="sha384-Voup2lBiiyZYkRto2XWqbzxHXwzcm4A5RfdfG6466bu5LqjwwrjXCMBQBLMWh7qR" crossorigin="anonymous"></script>
            <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-87468806-1"></script>
            <script>
            {`  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${process.env.google_analytics}');
            `}
            </script>
            {data.site.siteMetadata.ref === "index" ? <link rel="alternate" hreflang="en" href="/en/" /> : null}
            {data.site.siteMetadata.ref === "index" ? <link rel="alternate" hreflang="fr" href="/fr/" /> : null}
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
