import React, { Fragment } from "react";
import SEO from "../components/seo";
import { Header, Footer } from "../components";
import { CTABoxes } from "../components/global/cta";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title={"Home"} />
      <Header />
      <CTABoxes />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
