import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
  border-bottom: 1px solid #eee;
`;

export const BreadCrumbWrapper = styled.div`
  font-family: "Teko", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  margin: 20px 0 0;
  padding: 0 0 20px;
  position: relative;

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
