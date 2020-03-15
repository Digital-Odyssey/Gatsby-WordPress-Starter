import React from "react";
import Layout from "../../components/layout";
import { SEO } from "../../components";
import { Pagination } from "../../components/pagination";
import { BlogPost } from "../../components/blog";

const Blog = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container body">
        <div className="row">
          <div className="col-lg-12">
            {pageContext.posts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
            <Pagination pageContext={pageContext} path={"/blog"} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
