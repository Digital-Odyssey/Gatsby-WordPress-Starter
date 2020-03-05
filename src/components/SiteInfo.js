import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import SiteLogo from "../components/SiteLogo"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: auto 0;
`

const SiteTitle = styled.div`
  font-weight: bold;
`

const MainLogo = styled.img`
  max-width: 50%;
  display: inline-block;
`

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
              home
            }
          }
        }
        allWordpressWpLogo {
          edges {
            node {
              url {
                id
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteTitle>
          <SiteLogo />
        </SiteTitle>
      </SiteInfoWrapper>
    )}
  />
)

export default SiteInfo
