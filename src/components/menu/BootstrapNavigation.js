import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const BootstrapNavigation = ({ menu }) => (
  <Navbar expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {menu.items.map((item, index) => (
          <Fragment key={index}>
            {item.wordpress_children ? (
              <NavDropdown
                key={index}
                title={item.title}
                id="basic-nav-dropdown"
              >
                {item.wordpress_children.map((child, iChild) => (
                  <NavDropdown.Item key={iChild} href={`/${child.object_slug}`}>
                    {child.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              <Nav.Link key={index} href={`/${item.object_slug}`}>
                {item.title}
              </Nav.Link>
            )}
          </Fragment>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

BootstrapNavigation.propTypes = {
  menu: PropTypes.object,
};

export default BootstrapNavigation;
