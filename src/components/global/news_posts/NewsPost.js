import React, { Fragment } from "react";

import {
  StyledImg,
  NewsPostArticle,
  NewPostArticleDetails,
  SmallText,
  ReadMoreBtn,
} from "./NewsPostStyles";
import PropTypes from "prop-types";

const NewsPost = ({ post }) => {
  return (
    <Fragment>
      <NewsPostArticle>
        <StyledImg
          fluid={post.node.featured_media.localFile.childImageSharp.fluid}
        />
        <NewPostArticleDetails>
          <img
            src={post.node.author.avatar_urls.wordpress_96}
            alt={post.node.author.name}
          />
          <div>
            <a
              href={`/post/${post.node.slug}`}
              dangerouslySetInnerHTML={{ __html: post.node.title }}
            />
            <SmallText>
              by:{" "}
              <a href={`/author/${post.node.author.slug}`}>
                {post.node.author.name}
              </a>{" "}
              | {post.node.date}
            </SmallText>
            <ReadMoreBtn href={`/post/${post.node.slug}`}>
              Read More
            </ReadMoreBtn>
          </div>
        </NewPostArticleDetails>
      </NewsPostArticle>
    </Fragment>
  );
};

NewsPost.propTypes = {
  post: PropTypes.object,
};

export default NewsPost;
