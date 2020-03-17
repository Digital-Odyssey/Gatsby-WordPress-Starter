import React from "react";
import PropTypes from "prop-types";
import { HeaderTitle } from "./PageHeroStyles";

const PageHero = ({ img, title }) => {
  const divStyle = {
    height: "250px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: "url(" + img + ")",
  };

  return (
    <div style={divStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
          </div>
        </div>
      </div>
    </div>
  );
};

PageHero.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default PageHero;
