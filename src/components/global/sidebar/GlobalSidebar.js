import React from "react";
import { SidebarWrapper } from "./GlobalSidebarStyles";
import PropTypes from "prop-types";

const GlobalSidebar = ({ widgets }) => {
  return widgets.edges.map((node, index) => (
    <SidebarWrapper
      key={index}
      dangerouslySetInnerHTML={{ __html: node.node.rendered }}
    />
  ));
};

GlobalSidebar.propTypes = {
  widgets: PropTypes.object,
};

export default GlobalSidebar;
