import React from "react";
import { graphql } from "gatsby";
import { SEO } from "../../components";
import { GatsbyPagination } from "../../components/pagination";
import { BlogPost } from "../../components/blog";
import Layout from "../../components/layout";

const Archive = ({ data, pageContext }) => {
  const { catSlug, humanPageNumber, numberOfPages } = pageContext;
  const { allWordpressPost } = data;

  return (
    <>
      <Layout>
        <SEO title="Archive" />
        <h4>Archived posts in "{pageContext.catName}"</h4>
        <div className="posts-wrapper">
          {allWordpressPost.edges.map(post => (
            <BlogPost post={post} />
          ))}
        </div>
        <GatsbyPagination
          path={"archive"}
          slug={catSlug}
          page={humanPageNumber}
          totalPages={numberOfPages}
        />
      </Layout>
    </>
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
          featured_media {
            source_url
          }
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
