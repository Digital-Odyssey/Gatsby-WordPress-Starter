import React from "react"
import Layout from "../../components/layout"
import { Link, StaticQuery, graphql } from "gatsby"
import { SEO } from "../../components"
import { Pagination } from "../../components/pagination"
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

const CatLink = styled(Link)`
  text-decoration: none;
  color: blue;
`

const Archive = ({ pageContext }) => {
  const { catId, catName, catSlug, catCount, categories } = pageContext
  console.log(catName)
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={props => (
        <div>
          <Layout>
            <PostsWrapper>
              {props.allWordpressPost.edges.map(post => (
                <PostDetails key={post.node.id}>
                  <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                </PostDetails>
              ))}
            </PostsWrapper>
          </Layout>
        </div>
      )}
    />
  )
}

export default Archive
