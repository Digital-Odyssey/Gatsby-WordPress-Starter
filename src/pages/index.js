import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title={"Home"} />
      <p>Gatsby starter build for WordPress.</p>
      <p>
        Be sure to checkout the <Link to={"/portfolio"}>portfolio</Link> page,
        which is a custom post type and the <Link to={"/blog"}>blog</Link>{" "}
        template which features a full fledged pagination system, categories and
        tags.
      </p>
      <p>
        Mobile hamburger menu, comment system and hero slider will be coming
        soon!
      </p>
    </Layout>
  );
};

export default IndexPage;
