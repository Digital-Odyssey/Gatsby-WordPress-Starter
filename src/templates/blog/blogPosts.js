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
            <small className="post-date">
              {post.node.date} | Author:{" "}
              <a href={post.node.author.path}>{post.node.author.name}</a>
            </small>
            <p>
              Posted in:{" "}
              {post.node.categories.map((cat, index) => (
                <CatLink key={index} to={`/archive/${cat.slug}`}>
                  {cat.name}{" "}
                </CatLink>
              ))}
            </p>
            <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            <p>
              {post.node.tags && "Tagged in: "}
              {post.node.tags &&
                post.node.tags.map((tag, index) => (
                  <TagLink key={index} to={`/tags/${tag.slug}`}>
                    {tag.name}{" "}
                  </TagLink>
                ))}
            </p>
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
