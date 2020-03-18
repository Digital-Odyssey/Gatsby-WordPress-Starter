import styled from "styled-components";
import Img from "gatsby-image";

export const StyledImg = styled(Img)`
  img {
    -moz-transition: all 0.3s !important;
    -webkit-transition: all 0.3s !important;
    transition: all 0.3s !important;
    z-index: 1;
  }
`;

export const CTAImage = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;

  :hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }

  :hover span {
    opacity: 0.7;
    width: 100%;
  }

  @media (min-width: 768px) {
    height: auto;
  }
`;

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
`;

export const CTAImageOverlay = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0;
  z-index: 10;
  transition: all 0.3s;
`;

export const CTAImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: "Open Sans";
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
