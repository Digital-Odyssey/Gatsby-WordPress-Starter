import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { PortfolioItems } from "../../components/portfolio";
import { PageHero } from "../../components/global/pagehero";
import { Breadcrumbs } from "../../components/global/breadcrumbs";

const PortfolioTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <PageHero
        img={data.currentPage.acf.page_hero_img.source_url}
        title={pageContext.title}
      />
      <Breadcrumbs parent={data.parent} />
      <PortfolioItems />
    </Layout>
  );
};

PortfolioTemplate.propTypes = {
  pageContext: PropTypes.object,
};

export default PortfolioTemplate;

export const pageQuery = graphql`
  query($id: String, $parent: Int) {
    currentPage: wordpressPage(id: { eq: $id }) {
      acf {
        page_hero_img {
          source_url
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
      slug
      path
    }
  }
`;
