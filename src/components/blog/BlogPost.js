import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderTag = styled.h1`
  font-size: 1.8rem;
`;

const HeaderLink = styled.a`
  color: black;

  :hover {
    color: #ff9600;
  }
`;

const BlogPost = ({ post }) => {
  return (
    <article key={post.node.wordpress_id}>
      <HeaderTag>
        <HeaderLink
          href={`/post/${post.node.slug}`}
          dangerouslySetInnerHTML={{ __html: post.node.title }}
        />
      </HeaderTag>
      <small className="post-date">
        Posted: {post.node.date} | Author:{" "}
        <Link to={post.node.author.path}>{post.node.author.name}</Link>
      </small>
      <img
        src={post.node.featured_media.source_url}
        alt={post.node.title}
        className="mt-10 mb-30"
      />

      <p>
        Posted in:{" "}
        {post.node.categories.map((cat, index) => (
          <Link className="cat-link" key={index} to={`/category/${cat.slug}`}>
            {cat.name}{" "}
          </Link>
        ))}
      </p>
      <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
      <p>
        {post.node.tags[0].id !== "undefined" ? "Tagged in: " : ""}
        {post.node.tags[0].id !== "undefined" &&
          post.node.tags.map((tag, index) => (
            <Link className="tag-link" key={index} to={`/tag/${tag.slug}`}>
              {tag.name}{" "}
            </Link>
          ))}
      </p>
      <div>
        <Link className="read-more" to={`/post/${post.node.slug}`}>
          Read More
        </Link>
      </div>
    </article>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object,
};

export default BlogPost;
