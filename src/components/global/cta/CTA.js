import React from "react";

import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
  CTAImageOverlay,
} from "./CTAImagesStyles";
import PropTypes from "prop-types";

const CTA = ({ image, link, text }) => (
  <CTAImage>
    <CTAImageOverlay />
    <StyledImg fluid={image} />
    <a href={link} target="_blank" rel="noopener noreferrer">
      <CTAImageTextWrapper>
        <CTAImageText>{text}</CTAImageText>
      </CTAImageTextWrapper>
    </a>
  </CTAImage>
);

CTA.propTypes = {
  image: PropTypes.object,
  link: PropTypes.string,
  text: PropTypes.string,
};

export default CTA;
