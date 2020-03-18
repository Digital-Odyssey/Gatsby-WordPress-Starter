import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  margin: 40px 0 0 0;
`;

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0 20px 0 0;
  margin: 0;

  .sidebar-menu-header {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;
    text-transform: uppercase;
  }

  li {
    margin: 0 0 5px 15px;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: "Open sans";
    font-weight: 600;

    a {
      color: #292929;
      background-color: #eee;
      display: block;
      padding: 7px 10px;
      border-radius: 6px 0 6px 0;
    }

    a:hover {
      background-color: #292929;
      color: white;
    }
  }

  .sidebar-highlighted span {
    background-color: #292929;
    color: white;
    border-radius: 6px 0 6px 0;
    display: block;
    padding: 7px 10px;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
      font-family: "Montserrat";
    }
  }

  img {
    float: left;
    padding: 0 10px 0 0;
    width: 38px;
    height: auto;
  }
`;
