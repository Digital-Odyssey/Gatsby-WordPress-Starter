import React from "react";

import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
  CTAImageOverlay,
} from "./CTAImagesStyles";

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

export default CTA;
