import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaAngleUp } from "react-icons/fa";
import scrollTo from "gatsby-plugin-smoothscroll";

const FatFooter = styled.div`
  background-color: #202123;
  margin-bottom: 0;
`;

const Footer = ({ widgets }) => {
  const [scrolled, setScrolled] = useState(false);

  //change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      console.log("scrolling");
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <FatFooter>
        <div className="container fat-footer">
          <div className="row">
            {widgets.edges.map((node, index) => (
              <div
                key={index}
                className="col-lg-4"
                dangerouslySetInnerHTML={{ __html: node.node.rendered }}
              />
            ))}
          </div>
        </div>
      </FatFooter>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              © 2020 | Gatsby Starter Project by Pulsar Media
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => scrollTo("#main-header")}
        className={`return-to-top ${scrolled ? " active" : ""}`}
      >
        <FaAngleUp />
      </button>
    </>
  );
};

Footer.propTypes = {
  widgets: PropTypes.object,
};

export default Footer;
