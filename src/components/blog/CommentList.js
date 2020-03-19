import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// Create a GraphQL query for the comment list.
const commentQuery = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId, contentStatus: PUBLISH }) {
      nodes {
        ...CommentFields
      }
    }
  }

  fragment CommentFields on Comment {
    content
    author {
      ...AuthorFields
    }
  }

  fragment AuthorFields on CommentAuthor {
    name
    url
  }
`;

const CommentList = ({ postId }) => {
  return (
    <Query query={commentQuery} variables={{ postId }}>
      {({ loading, error, data }) => {
        // Loading and error messages.
        if (loading) return "Loading comments...";
        if (error) return "Error loading comments...";

        // Display message if there are no comments to show.
        if (data.comments.nodes.length < 1) return "No comments found.";

        return (
          // Display the comment list.
          <div className="comment-list">
            <h3>Recent Comments</h3>
            {data.comments.nodes.map((comment, index) => (
              <div key={index} className="comment">
                <div className="comment-author">
                  <a href={comment.author.url} rel="noopener noreferrer">
                    {comment.author.name}
                  </a>{" "}
                  says:
                </div>
                <div
                  className="comment-content"
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                />
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default CommentList;
