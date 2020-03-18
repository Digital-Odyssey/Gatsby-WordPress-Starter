import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import { HeroSlider } from "../components/sliders";
import { Header, Footer } from "../components";
import { CTABoxes } from "../components/global/cta";
import { NewsPosts } from "../components/global/news_posts";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpSidebarsSidebars(
            filter: { parent_sidebar: { eq: "footer-sidebar" } }
          ) {
            edges {
              node {
                id
                name
                rendered
                parent_sidebar
              }
            }
          }
        }
      `}
      render={props => (
        <Fragment>
          <SEO title={"Home"} />
          <Header />
          <HeroSlider />
          <CTABoxes />
          <NewsPosts />
          <Footer widgets={props.allWordpressWpSidebarsSidebars} />
        </Fragment>
      )}
    />
  );
};

export default IndexPage;
