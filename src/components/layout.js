/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MainMenu } from "./menu"
import { Footer } from "./"
import styled from "styled-components"
import Helmet from "react-helmet"
import "./styles/layout.scss"

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
          <MainMenu />
          <LayoutWrapper>
            {children}
            <Footer />
          </LayoutWrapper>
        </div>
      )}
    />
  )
}

export default Layout
