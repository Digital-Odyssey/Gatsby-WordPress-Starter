import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { NewsPost } from "./";

const NewsPosts = () => {
  const { allWordpressPost } = useStaticQuery(graphql`
    fragment postImage on wordpress__wp_media {
      localFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }

    query {
      allWordpressPost(limit: 3) {
        edges {
          node {
            id
            title
            slug
            wordpress_id
            date(formatString: "Do MMM YYYY")
            excerpt
            featured_media {
              ...postImage
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
              avatar_urls {
                wordpress_24
                wordpress_48
                wordpress_96
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center p-3">
          <h3>Latest Posts</h3>
          <p>Powered by GraphQL queries.</p>
        </div>
        {allWordpressPost.edges.map((post, index) => (
          <div key={index} className="col-lg-4">
            <NewsPost key={post.node.id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPosts;
