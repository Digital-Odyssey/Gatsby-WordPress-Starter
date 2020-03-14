import React, { Fragment } from "react";
import SEO from "../components/seo";
import { Header, Footer } from "../components";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title={"Home"} />
      <Header />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
