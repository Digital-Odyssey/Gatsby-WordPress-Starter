import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { SEO, Pagination } from "../components"
import styled from "styled-components"

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0;
`
const PostDetails = styled.div`
  margin: 0 0 40px;
  display: block;
`

const ReadMoreBtn = styled(Link)`
  background-color: blue;
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s;
  margin: 10px 0 0;
  display: inline-block;
  :hover {
    background-color: red;
  }
`

export default ({ pageContext }) => (
  <Layout>
    <SEO title="Blog" />
    <PostsWrapper>
      {pageContext.posts.map(post => (
        <PostDetails key={post.node.wordpress_id}>
          <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
          <small className="post-date">{post.node.date}</small>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          <div>
            <ReadMoreBtn to={`/post/${post.node.slug}`}>Read More</ReadMoreBtn>
          </div>
        </PostDetails>
      ))}
    </PostsWrapper>
    <Pagination pageContext={pageContext} path={"/blog"} />
  </Layout>
)
