import React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import { SEO } from "../../components";
import styled from "styled-components";
import { GatsbyPagination } from "../../components/pagination";

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0;
`;
const PostDetails = styled.div`
  margin: 0 0 40px;
  display: block;
`;

const CatLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;

const Tags = ({ data, pageContext }) => {
  const { tagSlug, humanPageNumber, numberOfPages } = pageContext;
  const { allWordpressPost } = data;
  console.log("numberOfPages", numberOfPages);
  return (
    <div>
      <Layout>
        <SEO title="Archive" />
        <h4>Posts tagged in "{pageContext.tagName}"</h4>
        <PostsWrapper>
          {allWordpressPost.edges.map(post => (
            <PostDetails key={post.node.id}>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              <small className="post-date">
                {post.node.date} | Author:{" "}
                <Link to={post.node.author.path}>{post.node.author.name}</Link>
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
              <div>
                <Link className="read-more" to={`/post/${post.node.slug}`}>
                  Read More
                </Link>
              </div>
            </PostDetails>
          ))}
        </PostsWrapper>
        <GatsbyPagination
          path={"tags"}
          slug={tagSlug}
          page={humanPageNumber}
          totalPages={numberOfPages}
        />
      </Layout>
    </div>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tagId: String, $skip: Int, $limit: Int) {
    allWordpressPost(
      filter: { tags: { elemMatch: { id: { eq: $tagId } } } }
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
          tags {
            id
            name
            slug
          }
          categories {
            id
            name
            slug
          }
          author {
            name
            url
            link
            slug
            path
          }
        }
      }
    }
  }
`;
