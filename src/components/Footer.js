import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  padding: 15px 0;
  margin: 30px 0 0;
  font-size: 12px;
  border-top: 1px solid #ccc;
`

const Footer = () => {
  return <FooterWrapper>© 2020 | Gatsby Starter Build</FooterWrapper>
}

export default Footer
