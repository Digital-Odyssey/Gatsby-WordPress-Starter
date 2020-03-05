import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const LogoImg = styled.img`
  max-width: 50%;
  display: inline-block;
`

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <Link to={"/"}>
        <LogoImg src={props.allWordpressWpLogo.edges[0].node.url.source_url} />
      </Link>
    )}
  />
)

export default SiteLogo
