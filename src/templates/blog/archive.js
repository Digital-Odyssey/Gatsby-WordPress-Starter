import React from "react";
import { graphql } from "gatsby";
import { SEO } from "../../components";
import { GatsbyPagination } from "../../components/pagination";
import { BlogPost } from "../../components/blog";
import Layout from "../../components/layout";
import { PageHero } from "../../components/global/pagehero";
import PropTypes from "prop-types";

const Archive = ({
  data: { archiveHeroImage, allWordpressPost },
  pageContext,
}) => {
  const { catSlug, humanPageNumber, numberOfPages } = pageContext;

  return (
    <>
      <Layout>
        <SEO title="Archive" />
        {archiveHeroImage.source_url !== "" ? (
          <PageHero
            img={archiveHeroImage.source_url}
            title={`Posts archived in "${pageContext.catName}"`}
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
                path={"archive"}
                slug={catSlug}
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

Archive.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
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
    archiveHeroImage: wordpressWpApiCustomizerCustomizer(
      name: { eq: "archive_hero_image" }
    ) {
      source_url
      name
    }
  }
`;
