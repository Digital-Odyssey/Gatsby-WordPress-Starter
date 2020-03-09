import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import { SiteInfo } from "../site"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: #2b2c30;
  padding: 10px 0;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 12px;
  font-size: 13px;
  text-decoration: none;
`

const MainMenuInner = styled.div`
  max-width: 990px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(
            filter: { name: { eq: "Main Menu" } }
          ) {
            edges {
              node {
                name
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
      `}
      render={props => (
        <MainMenuWrapper>
          <MainMenuInner>
            <SiteInfo />
            <MenuItem to={"/"}>Home</MenuItem>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <MenuItem to={`/${item.object_slug}`} key={item.title}>
                  {item.title}
                </MenuItem>
              )
            )}
          </MainMenuInner>
        </MainMenuWrapper>
      )}
    />
  )
}

export default MainMenu
