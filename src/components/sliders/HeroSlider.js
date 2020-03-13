import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useInterval } from "../useInterval";

import { Slide } from "../../components/sliders";
import {
  SliderWrapper,
  ButtonWrapper,
  Button,
} from "../../components/sliders/HeroSliderStyles";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HeroSlider = () => {
  const {
    slides: { edges: slides },
  } = useStaticQuery(graphql`
    query slider {
      slides: allWordpressWpPortfolio {
        edges {
          node {
            id
            featured_media {
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 4000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            acf {
              slider_pre_header
              slider_header
              slider_text
              slider_button_text
              slider_button_link
            }
          }
        }
      }
    }
  `);

  const [state, setState] = useState({
    slides,
    activeIndex: 0,
    autoSlide: true,
    interval: 10000,
  });

  //by Dan Abramov overreacted.io
  useInterval(
    () => {
      setState(prev => ({
        ...prev,
        activeIndex: (prev.activeIndex + 1) % prev.slides.length,
      }));
    },
    state.autoSlide ? state.interval : null
  );

  const handlePrevClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex:
        (prev.activeIndex - 1 + prev.slides.length) % prev.slides.length,
    }));
  };

  const handleNextClick = () => {
    setState(prev => ({
      ...prev,
      autoSlide: false,
      activeIndex: (prev.activeIndex + 1) % prev.slides.length,
    }));
  };

  return (
    <SliderWrapper>
      {slides.map((slide, i) => (
        <Slide
          key={slide.node.id}
          slide={slide.node}
          active={state.activeIndex === i}
        />
      ))}
      <ButtonWrapper style={{ position: "absolute", left: 0 }}>
        <Button onClick={handlePrevClick}>
          <FaAngleLeft />
        </Button>
      </ButtonWrapper>
      <ButtonWrapper style={{ position: "absolute", right: 0 }}>
        <Button onClick={handleNextClick}>
          <FaAngleRight />
        </Button>
      </ButtonWrapper>
    </SliderWrapper>
  );
};

export default HeroSlider;
