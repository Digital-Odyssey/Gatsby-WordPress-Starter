/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MainMenu } from "./menu"
import styled, { createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body {
    font-family:'Open Sans', sans-serif;
  }
  a:hover {
    color:yellow;
  }
  .post-date {
    margin:10px 0;
    display:inline-block;
    font-size:11px;
  }
  p {
    margin-bottom:10px;
  }
  h1 {
    margin-bottom:20px;
  }
  .page-number.white {
    color:white !important;
  }

`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 30px auto;
`

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpFavicon {
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
        <div>
          <Helmet>
            <link
              rel="icon"
              type="image/png"
              href={props.allWordpressWpFavicon.edges[0].node.url.source_url}
              sizes="16x16"
            />
          </Helmet>
          <GlobalStyles />
          <MainMenu />
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      )}
    />
  )
}

export default Layout
