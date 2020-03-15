import React, { Fragment } from "react";
import SEO from "../components/seo";
import { HeroSlider } from "../components/sliders";
import { Header, Footer } from "../components";
import { CTABoxes } from "../components/global/cta";
import { NewsPosts } from "../components/global/news_posts";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title={"Home"} />
      <Header />
      <HeroSlider />
      <CTABoxes />
      <NewsPosts />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
