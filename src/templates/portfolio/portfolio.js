import React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import SEO from "../../components/seo";

const FeaturedImage = styled.img`
  max-width: 400px;
  margin: 16px 0;
`;

const BodyContent = styled.div`
  font-size: 14px;
  line-height: 2;
  margin-top: 20px;
`;

export default ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} />
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
