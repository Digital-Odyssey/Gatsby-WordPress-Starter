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

const TagLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;

const Archive = ({ data, pageContext }) => {
  const { catSlug, humanPageNumber, numberOfPages } = pageContext;
  const { allWordpressPost } = data;

  return (
    <div>
      <Layout>
        <SEO title="Archive" />
        <h4>Archived posts in "{pageContext.catName}"</h4>
        <PostsWrapper>
          {allWordpressPost.edges.map(post => (
            <PostDetails key={post.node.id}>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              <small className="post-date">
                {post.node.date} | Author:{" "}
                <Link to={post.node.author.path}>{post.node.author.name}</Link>
              </small>
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
        <GatsbyPagination
          path={"archive"}
          slug={catSlug}
          page={humanPageNumber}
          totalPages={numberOfPages}
        />
      </Layout>
    </div>
  );
};

export default Archive;

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
