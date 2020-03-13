import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Navigation = ({ menu }) => (
  <nav className="main-menu">
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {menu.items.map((item, i) => (
        <li key={i}>
          <Link to={`/${item.object_slug}`} activeClassName="nav-active">
            {item.title}
          </Link>
          {item.wordpress_children ? (
            <>
              <span>&#8964;</span>
              <ul>
                {item.wordpress_children.map((child, iChild) => (
                  <li key={iChild}>
                    <Link
                      to={`/${child.object_slug}`}
                      activeClassName="nav-active"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  menu: PropTypes.object,
};

export default Navigation;
