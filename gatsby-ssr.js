/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

exports.onRenderBody = ({ setHtmlAttributes, pathname }) => {
  const spanish = pathname == "/es" || pathname == "/es/" || pathname.search(/es\/([w]*-*)*/i) > 0
  const lang = spanish ? "es" : "en"
  setHtmlAttributes({ lang: lang })
}
