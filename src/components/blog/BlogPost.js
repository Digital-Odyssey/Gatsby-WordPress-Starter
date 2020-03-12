import React from "react";
import { Link } from "gatsby";

const BlogPost = ({ post }) => {
  return (
    <article key={post.node.wordpress_id}>
      <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
      <small className="post-date">
        {post.node.date} | Author:{" "}
        <Link to={post.node.author.path}>{post.node.author.name}</Link>
      </small>
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
        {post.node.tags && "Tagged in: "}
        {post.node.tags &&
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
