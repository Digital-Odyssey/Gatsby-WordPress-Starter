import React from "react";
import { Link } from "gatsby";

const BlogPost = ({ post }) => {
  return (
    <article key={post.node.wordpress_id}>
      <h1 dangerouslySetInnerHTML={{ __html: post.node.title }} />
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
          <Link className="cat-link" key={index} to={`/archive/${cat.slug}`}>
            {cat.name}{" "}
          </Link>
        ))}
      </p>
      <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
      <p>
        {post.node.tags[0].id !== "undefined" ? "Tagged in: " : ""}
        {post.node.tags[0].id !== "undefined" &&
          post.node.tags.map((tag, index) => (
            <Link className="tag-link" key={index} to={`/tags/${tag.slug}`}>
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

export default BlogPost;
