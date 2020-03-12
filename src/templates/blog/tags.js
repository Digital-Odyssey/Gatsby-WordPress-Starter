import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { SEO } from "../../components";
import { GatsbyPagination } from "../../components/pagination";
import { BlogPost } from "../../components/blog";

const Tags = ({ data, pageContext }) => {
  const { tagSlug, humanPageNumber, numberOfPages } = pageContext;
  const { allWordpressPost } = data;
  console.log("numberOfPages", numberOfPages);
  return (
    <>
      <Layout>
        <SEO title="Archive" />
        <h4>Posts tagged in "{pageContext.tagName}"</h4>
        <div className="posts-wrapper">
          {allWordpressPost.edges.map(post => (
            <BlogPost post={post} />
          ))}
        </div>
        <GatsbyPagination
          path={"tags"}
          slug={tagSlug}
          page={humanPageNumber}
          totalPages={numberOfPages}
        />
      </Layout>
    </>
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
