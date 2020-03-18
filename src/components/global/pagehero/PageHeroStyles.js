import styled from "styled-components";

export const HeaderTitle = styled.div`
  color: white;
  font-size: 1.8rem;
  position: relative;
  font-family: "Open sans";
  display: inline-block;
  z-index: 2;
  padding: 5px 18px;
  top: 100px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align: center;
  }

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;
