import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
  display: flex;
  background: ${props => (props.isCurrentPage ? "red" : "white")};
  color: white;
`

const PageNumber = styled(Link)`
  padding: 8px 12px;
  text-decoration: none;
  border: 1px solid #eee;
  font-size: 10px;
  color: ${props => (props.isCurrentPage ? "white" : "black")};
  transition: all 0.3s;
  :hover {
    background: red;
  }
`

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

    <Pagination>
      {pageContext.currentPage > 1 ? (
        <PageNumber to={`/blog/`}>{"<<"}</PageNumber>
      ) : (
        ""
      )}
      {pageContext.currentPage > 1 ? (
        <PageNumber
          to={
            pageContext.currentPage === 2
              ? "/blog"
              : `/blog/${pageContext.currentPage - 1}`
          }
        >
          {"<"}
        </PageNumber>
      ) : (
        ""
      )}
      {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
        <PageNumberWrapper
          key={index}
          isCurrentPage={index + 1 === pageContext.currentPage}
        >
          {index + 1 > pageContext.currentPage - pageContext.pagingDisplay &&
            index + 1 < pageContext.currentPage + pageContext.pagingDisplay && (
              <PageNumber
                key={index}
                to={index === 0 ? "/blog" : `/blog/${index + 1}`}
                className={`page-number${
                  index === pageContext.currentPage - 1 ? " white" : ""
                }`}
              >
                {index + 1}
              </PageNumber>
            )}
        </PageNumberWrapper>
      ))}

      {pageContext.currentPage < pageContext.numberOfPages ? (
        <PageNumber to={`/blog/${pageContext.currentPage + 1}`}>
          {">"}
        </PageNumber>
      ) : (
        ""
      )}

      {pageContext.currentPage < pageContext.numberOfPages ? (
        <PageNumber to={`/blog/${pageContext.numberOfPages}`}>
          {">>"}
        </PageNumber>
      ) : (
        ""
      )}
    </Pagination>
  </Layout>
)
