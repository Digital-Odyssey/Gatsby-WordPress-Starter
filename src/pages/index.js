import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title={"Home"} />
      <p>This is the main homepage.</p>
      <p>
        This page is not hooked up to WordPress - please reference index-WP.js
        or page.js to connect this page to WordPress.
      </p>
    </Layout>
  )
}

export default IndexPage
