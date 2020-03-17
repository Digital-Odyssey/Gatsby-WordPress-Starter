import styled from "styled-components";

export const SidebarWrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: "Montserrat";

  div.tagcloud {
    margin-bottom: 30px;
  }

  div.wp-video {
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    margin: 5px 0 30px;

    li {
      display: inline;
    }

    li a {
      font-size: 14px !important;
      border: 1px solid #ccc;
      padding: 10px 14px;
      display: inline-block;
      margin: 5px 0 0;
      font-weight: 400;
      transition: all 0.3s;
    }

    li a:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
  }

  div.tagcloud a {
    border: 1px solid #ccc;
    padding: 10px 14px;
    margin: 5px 0 0;
    font-size: 14px !important;
    display: inline-block;
    font-family: "Open sans";
    font-weight: 400;
    transition: all 0.3s;
  }

  div.tagcloud a:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }

  div.textwidget {
    font-size: 0.8rem;
    font-weight: 400;
    font-family: "Open sans";
  }
`;
