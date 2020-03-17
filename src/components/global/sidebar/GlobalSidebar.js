import React from "react";
import { SidebarWrapper } from "./GlobalSidebarStyles";

const GlobalSidebar = ({ widgets }) => {
  return widgets.edges.map((node, index) => (
    <SidebarWrapper
      key={index}
      dangerouslySetInnerHTML={{ __html: node.node.rendered }}
    />
  ));
};

export default GlobalSidebar;
