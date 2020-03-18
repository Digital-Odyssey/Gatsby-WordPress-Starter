import styled from "styled-components";

export const SidebarWrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat";

  @media (max-width: 980px) {
    margin-top: 40px;
  }

  ul {
    list-style: none;
    margin: 5px 0 30px;

    li {
      display: inline;
    }

    li a {
      font-size: 14px !important;
      background-color: #ff9600;
      color: white;
      padding: 8px 14px;
      display: inline-block;
      margin: 5px 0 0;
      font-weight: 400;
      border-radius: 50px;
      transition: all 0.3s;
    }

    li a:hover {
      background-color: #ffb400;
      color: white;
    }
  }
`;
