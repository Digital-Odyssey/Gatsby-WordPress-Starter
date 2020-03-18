import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import styled from "styled-components";
import SEO from "../../components/seo";
import { PageHero } from "../../components/global/pagehero";
import { Breadcrumbs } from "../../components/global/breadcrumbs";
import PropTypes from "prop-types";

const FeaturedImage = styled.img`
  margin: 16px 0;
`;

const BodyContent = styled.div`
  font-size: 14px;
  line-height: 2;
  margin-top: 20px;
`;

const Portfolio = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      {data.currentPage.acf.page_hero_img.source_url !== "" ? (
        <PageHero
          img={data.currentPage.acf.page_hero_img.source_url}
          title={pageContext.title}
        />
      ) : null}
      <Breadcrumbs parent={{ title: "Portfolio", path: "/portfolio" }} />
      <div className="container body">
        <div className="row">
          <div className="col-lg-12">
            <h1>{pageContext.title}</h1>
            <div>
              <FeaturedImage src={pageContext.featured_media.source_url} />
            </div>
            <strong>Website URL: </strong>
            <a
              href={pageContext.acf.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pageContext.acf.portfolio_url}
            </a>

            <BodyContent
              dangerouslySetInnerHTML={{ __html: pageContext.content }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

Portfolio.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default Portfolio;

export const pageQuery = graphql`
  query($id: String) {
    currentPage: wordpressWpPortfolio(id: { eq: $id }) {
      acf {
        page_hero_img {
          source_url
        }
      }
    }
  }
`;
