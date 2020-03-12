import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SiteLogo } from "../components/site";
import { Navigation } from "../components/menu";

const Header = () => {
  const {
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      menu: allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "Main Menu" } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              object_slug
              wordpress_children {
                title
                url
                object_slug
              }
            }
            name
          }
        }
      }
    }
  `);

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <SiteLogo />
          </div>
          <div className="col-md-8 menu">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
