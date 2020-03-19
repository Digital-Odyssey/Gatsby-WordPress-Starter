import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { SEO } from "../../components";
import { GatsbyPagination } from "../../components/pagination";
import { BlogPost } from "../../components/blog";
import { PageHero } from "../../components/global/pagehero";
import PropTypes from "prop-types";

const Tags = ({ data: { tagHeroImage }, pageContext }) => {
  const { tagSlug, humanPageNumber, numberOfPages } = pageContext;
  const { allWordpressPost } = data;
  return (
    <>
      <Layout>
        <SEO title="Tags" />
        {tagHeroImage.source_url !== "" ? (
          <PageHero
            img={tagHeroImage.source_url}
            title={`Posts tagged in "${pageContext.tagName}"`}
          />
        ) : null}
        <div className="container body">
          <div className="row">
            <div className="col-lg-12">
              <div className="posts-wrapper">
                {allWordpressPost.edges.map((post, index) => (
                  <BlogPost key={index} post={post} />
                ))}
              </div>
              <GatsbyPagination
                path={"tags"}
                slug={tagSlug}
                page={humanPageNumber}
                totalPages={numberOfPages}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

Tags.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
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
    tagHeroImage: wordpressWpApiCustomizerCustomizer(
      name: { eq: "tag_hero_image" }
    ) {
      source_url
      name
    }
  }
`;
