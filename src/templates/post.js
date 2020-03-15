import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import styled from "styled-components";

const LinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 30px 0 0;
`;
const LinkBtn = styled(Link)`
  border: 1px solid #ccc;
  padding: 6px 12px;
  text-decoration: none;
  color: #aaa;

  :hover {
    background-color: #ccc;
    color: white;
  }
`;

const Post = ({ pageContext }) => {
  const { next, prev } = pageContext;
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <div className="container body">
        <div className="row">
          <div className="col-lg-12">
            <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
            <small className="post-date">
              Posted: {pageContext.date} | Author:{" "}
              <Link to={pageContext.author.path}>
                {pageContext.author.name}
              </Link>
            </small>
            <img
              src={pageContext.source_url}
              alt={pageContext.title}
              className="mt-10 mb-30"
            />
            <p>
              Posted in:{" "}
              {pageContext.categories.map((cat, index) => (
                <Link
                  className="cat-link"
                  key={index}
                  to={`/archive/${cat.slug}`}
                >
                  {cat.name}{" "}
                </Link>
              ))}
            </p>
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            <p>
              {pageContext.tags && "Tagged in: "}
              {pageContext.tags &&
                pageContext.tags.map((tag, index) => (
                  <Link
                    className="tag-link"
                    key={index}
                    to={`/tags/${tag.slug}`}
                  >
                    {tag.name}{" "}
                  </Link>
                ))}
            </p>
            <LinksWrapper>
              {prev && (
                <LinkBtn className="post-prev-link" to={`/post/${prev.slug}`}>
                  Prev
                </LinkBtn>
              )}
              {next && (
                <LinkBtn className="post-next-link" to={`/post/${next.slug}`}>
                  Next
                </LinkBtn>
              )}
            </LinksWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
