import React from "react";
import {
  StyledImg,
  HeroSlide,
} from "../../components/sliders/HeroSliderStyles";

const Slide = ({ slide, active }) => (
  <HeroSlide className={active ? "active" : ""}>
    <StyledImg fluid={slide.featured_media.localFile.childImageSharp.fluid} />
    <div className="hero-overlay-text">
      <h1 className="hero-header">{slide.acf.slider_header}</h1>
      <p className="hero-text">{slide.acf.slider_text}</p>
      <a
        href={slide.acf.slider_button_link}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-banner-btn"
      >
        {slide.acf.slider_button_text}
      </a>
    </div>
  </HeroSlide>
);

export default Slide;
