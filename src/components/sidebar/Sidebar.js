import React, { Fragment } from "react";
import { Link } from "gatsby";
import { FaEnvelope, FaReact } from "react-icons/fa";
import { SidebarWrapper, SidebarMenu } from "./SidebarStyles";

const Sidebar = ({ children, parentChildren, currentPage, parent }) => {
  const getParentContent = () => {
    //page with no children, show default text
    return children.edges.length === 0 ? (
      <Fragment>
        <li className="sidebar-menu-header">
          <FaEnvelope />
          <span>Did you know?</span>
        </li>
      </Fragment>
    ) : (
      //page with children
      <Fragment>
        <li className="sidebar-menu-header">
          <FaReact />{" "}
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </li>
        {children.edges.map(child => (
          <li key={child.node.id}>
            <Link to={child.node.path}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          </li>
        ))}
      </Fragment>
    );
  };

  const getChildContent = () => {
    return (
      <Fragment>
        <li className="sidebar-menu-header">
          <FaReact />{" "}
          <span dangerouslySetInnerHTML={{ __html: parent.title }} />
        </li>
        {parentChildren.edges.map(child => (
          <li
            key={child.node.id}
            className={
              currentPage.id === child.node.id ? "sidebar-highlighted" : ""
            }
          >
            {currentPage.id === child.node.id ? (
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            ) : (
              <Link to={child.node.path}>
                <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
              </Link>
            )}
          </li>
        ))}
      </Fragment>
    );
  };

  return (
    <SidebarWrapper>
      <SidebarMenu>
        {currentPage.wordpress_parent === 0
          ? getParentContent()
          : getChildContent()}
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;
