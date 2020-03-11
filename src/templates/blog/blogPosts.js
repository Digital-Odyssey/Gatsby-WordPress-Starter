import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"
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

const TagLink = styled(Link)`
  text-decoration: none;
  color: blue;
`

const BlogPosts = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <PostsWrapper>
        {pageContext.posts.map(post => (
          <PostDetails key={post.node.wordpress_id}>
            <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
            <small className="post-date">{post.node.date}</small>
            <p>
              Posted in:{" "}
              {post.node.categories.map((element, index) => (
                <CatLink key={index} to={`/archive/${element.slug}`}>
                  {element.name}{" "}
                </CatLink>
              ))}
              | Author: {post.node.author.name}
            </p>
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />

            <div>
              <Link className="read-more" to={`/post/${post.node.slug}`}>
                Read More
              </Link>
            </div>
          </PostDetails>
        ))}
      </PostsWrapper>
      <Pagination pageContext={pageContext} path={"/blog"} />
    </Layout>
  )
}

export default BlogPosts
