import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title={"Home"} />
      <p>Gatsby starter build for WordPress.</p>
      <p>
        Be sure to checkout the <a href="#">portfolio</a> page, which is a
        custom post type and the blog page which features a full fledged
        pagination system running in React.
      </p>
      <p>
        Mobile hamburger menu, comment system and hero slider will be coming
        soon!
      </p>
    </Layout>
  )
}

export default IndexPage
