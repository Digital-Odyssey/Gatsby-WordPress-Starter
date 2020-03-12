import React from "react";
import Layout from "../../components/layout";
import { SEO } from "../../components";
import { Pagination } from "../../components/pagination";
import { BlogPost } from "../../components/blog";

const Blog = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="posts-wrapper">
        {pageContext.posts.map(post => (
          <BlogPost post={post} />
        ))}
      </div>
      <Pagination pageContext={pageContext} path={"/blog"} />
    </Layout>
  );
};

export default Blog;
