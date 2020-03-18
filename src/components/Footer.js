import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FatFooter = styled.div`
  background-color: #202123;
  margin-bottom: 0;
`;

const Footer = ({ widgets }) => {
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
    </>
  );
};

Footer.propTypes = {
  widgets: PropTypes.object,
};

export default Footer;
