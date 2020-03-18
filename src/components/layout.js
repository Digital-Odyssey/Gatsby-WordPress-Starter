/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Header, Footer } from "./";
import Helmet from "react-helmet";
import "./styles/layout.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
          allWordpressWpSidebarsSidebars(
            filter: { parent_sidebar: { eq: "footer-sidebar" } }
          ) {
            edges {
              node {
                id
                name
                rendered
                parent_sidebar
              }
            }
          }
        }
      `}
      render={props => (
        <div id="site-wrapper">
          <Helmet>
            <link
              rel="icon"
              type="image/png"
              href={props.allWordpressWpFavicon.edges[0].node.url.source_url}
              sizes="16x16"
            />
          </Helmet>
          <Header />
          {children}
          <Footer widgets={props.allWordpressWpSidebarsSidebars} />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
