import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const PortfolioItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 24px;
  margin: 16px;
  background-color: white;
  box-shadow: 2px 2px 10px rgb(0, 0, 0, 0.1);
  border-radius: 4px;
`

const PortfolioImage = styled.img`
  max-width: 100%;
`

const ReadMoreBtn = styled(Link)`
  background-color: blue;
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s;
  margin: 10px 0 0;
  display: inline-block;
  :hover {
    background-color: red;
  }
`

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
                guid
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
        <PortfolioItemsWrapper>
          {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <PortfolioItem key={portfolioItem.node.id}>
              <h2>{portfolioItem.node.title}</h2>
              <PortfolioImage
                src={portfolioItem.node.featured_media.source_url}
                alt="Thumbnail"
              />
              <div
                dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }}
              />
              <ReadMoreBtn to={`/portfolio/${portfolioItem.node.slug}`}>
                Read More
              </ReadMoreBtn>
            </PortfolioItem>
          ))}
        </PortfolioItemsWrapper>
      )}
    />
  )
}

export default PortfolioItems
