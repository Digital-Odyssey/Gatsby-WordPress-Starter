import React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"
import { SEO } from "../../components"
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

const Archive = ({ data, pageContext }) => {
  const { allWordpressPost } = data

  return (
    <div>
      <Layout>
        <SEO title="Archive" />
        <h4>Archived posts in "{pageContext.catName}"</h4>
        <PostsWrapper>
          {allWordpressPost.edges.map(post => (
            <PostDetails key={post.node.id}>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              <small className="post-date">{post.node.date}</small>

              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              <div>
                <Link className="read-more" to={`/post/${post.node.slug}`}>
                  Read More
                </Link>
              </div>
            </PostDetails>
          ))}
        </PostsWrapper>
      </Layout>
    </div>
  )
}

export default Archive

export const pageQuery = graphql`
  query($catId: String, $skip: Int, $limit: Int) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "DD, MMM, YYYY")
        }
      }
    }
  }
`
