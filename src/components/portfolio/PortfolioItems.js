import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";

const PortfolioItem = styled.div`
  width: 100%;
  border: 1px solid #efefef;
  padding: 24px;
  background-color: white;
  box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 100%;
`;

const PortfolioTitle = styled.h2`
  font-size: 1.5rem;
`;

const PortfolioImage = styled.img`
  max-width: 100% !important;
  margin: 12px 0;
  border-radius: 6px;
`;

const ReadMoreBtn = styled(Link)`
  background-color: #ffb400;
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s;
  margin: 10px 0 0;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    color: white;
    background-color: #ff9600;
  }
`;

const PortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                title
                content
                slug
                excerpt
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div className="container body">
          <div className="row">
            {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
              <div className="col-lg-4 mb-30">
                <PortfolioItem key={portfolioItem.node.id}>
                  <PortfolioTitle>{portfolioItem.node.title}</PortfolioTitle>
                  <PortfolioImage
                    src={portfolioItem.node.featured_media.source_url}
                    alt="Thumbnail"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: portfolioItem.node.excerpt,
                    }}
                  />
                  <ReadMoreBtn to={`/portfolio/${portfolioItem.node.slug}`}>
                    Read More
                  </ReadMoreBtn>
                </PortfolioItem>
              </div>
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default PortfolioItems;
