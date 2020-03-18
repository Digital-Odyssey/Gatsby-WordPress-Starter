import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { SEO } from "../../components";
import { Pagination } from "../../components/pagination";
import { BlogPost } from "../../components/blog";
import { PageHero } from "../../components/global/pagehero";
import { GlobalSidebar } from "../../components/global/sidebar";
import PropTypes from "prop-types";

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      {data.blogHeroImage.source_url !== "" ? (
        <PageHero img={data.blogHeroImage.source_url} title={"Blog"} />
      ) : null}
      <div className="container body">
        <div className="row">
          <div className="col-lg-9">
            {pageContext.posts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
            <Pagination pageContext={pageContext} path={"/blog"} />
          </div>
          <div className="col-lg-3">
            <GlobalSidebar widgets={data.widgets} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default Blog;

export const pageQuery = graphql`
  query {
    blogHeroImage: wordpressWpApiCustomizerCustomizer(
      name: { eq: "blog_hero_image" }
    ) {
      source_url
      name
    }
    widgets: allWordpressWpSidebarsSidebars(
      filter: { parent_sidebar: { eq: "blog-sidebar" } }
    ) {
      edges {
        node {
          id
          name
          rendered
          parent_sidebar
        }
      }
    }
  }
`;
