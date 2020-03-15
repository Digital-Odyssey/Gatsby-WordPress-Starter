import React from "react";
import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import { BreadCrumbWrapper } from "./BreadCrumbStyles";

const Breadcrumbs = ({ parent }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-9 offset-lg-3">
        <BreadCrumbWrapper>
          <Link to="/">
            <span>Home</span>
          </Link>
          <span className="divider">/</span>
          {parent ? (
            <>
              <Link to={parent.path}>
                <span dangerouslySetInnerHTML={{ __html: parent.title }} />
              </Link>
            </>
          ) : null}
        </BreadCrumbWrapper>
      </div>
    </div>
  </div>
);

Breadcrumbs.propTypes = {
  parent: PropTypes.object,
};

export default Breadcrumbs;
