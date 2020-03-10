import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import styled from "styled-components"

const LinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 30px 0 0;
`
const LinkBtn = styled(Link)`
  border: 1px solid #ccc;
  padding: 6px 12px;
  text-decoration: none;
  color: #aaa;

  :hover {
    background-color: #ccc;
    color: white;
  }
`

const Post = ({ pageContext }) => {
  const { next, prev } = pageContext
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <LinksWrapper>
        {prev && (
          <LinkBtn className="post-prev-link" to={`/post/${prev.slug}`}>
            Prev
          </LinkBtn>
        )}
        {next && (
          <LinkBtn className="post-next-link" to={`/post/${next.slug}`}>
            Next
          </LinkBtn>
        )}
      </LinksWrapper>
    </Layout>
  )
}

export default Post
