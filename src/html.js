import React from "react"
import { TypographyStyle } from "react-typography"
import * as PropTypes from "prop-types"
import typography from "./utils/typography"

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends React.Component {
  render() {
    const { headComponents, body, postBodyComponents } = this.props
    return (
      <html lang="en" prefix="op: http://media.facebook.com/op#">
        <head>
          {headComponents}
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="Cache-control" content="no-cache, no-store, must-revalidate" /> 
          <meta httpEquiv="Pragma" content="no-cached" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://chocolate-free.com/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" href="https://chocolate-free.com/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="https://chocolate-free.com/favicon-16x16.png" sizes="16x16"/>
          <link rel="manifest" href="https://chocolate-free.com/manifest.json"/>
          <link rel="mask-icon" href="https://chocolate-free.com/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="theme-color" content="#e8e8e8"/>
          <meta property="fb:pages" content="182110772226120" />

          <meta name="author" content="Amal Nasri"/>
          <meta name="p:domain_verify" content="bfdc5a3211578236b01ad516ea662d6b"/>
          <TypographyStyle typography={typography} />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

export default Html
