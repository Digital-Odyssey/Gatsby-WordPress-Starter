import styled from "styled-components";

export const BreadCrumbWrapper = styled.div`
  font-family: "Teko", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  margin: 20px 0 20px;
  padding: 0 0 20px;
  position: relative;

  ::after {
    content: "";
    width: 5000%;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: -1000px;
    bottom: 0;
  }

  .divider {
    margin: 0 10px 0 10px;
  }

  a {
    color: grey;
  }

  a:hover {
    color: blue;
  }
`;
