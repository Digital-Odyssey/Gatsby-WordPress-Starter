import React, { Fragment } from "react";
import SEO from "../components/seo";
import { HeroSlider } from "../components/sliders";
import { Header, Footer } from "../components";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title={"Home"} />
      <Header />
      <HeroSlider />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
