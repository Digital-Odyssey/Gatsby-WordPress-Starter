import styled from "styled-components";

export const HeaderTitle = styled.div`
  color: white;
  font-size: 30px;
  position: relative;
  font-family: "Open sans";
  display: inline-block;
  z-index: 2;
  padding: 5px 18px;
  top: 100px;

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
