import React from "react";
import Layout from "../../components/layout";
import { SEO } from "../../components";
import styled from "styled-components";

const Profile = styled.div`
  margin: 20px 0 0;
`;
const ProfileImage = styled.img`
  border-radius: 100%;
`;

const Author = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Author" />
      <div className="container body">
        <div className="row">
          <div className="col-lg-12">
            <ProfileImage
              src={pageContext.largeAvatar}
              alt={pageContext.name}
            />
            <h3 dangerouslySetInnerHTML={{ __html: pageContext.name }} />
            <Profile>
              <p
                dangerouslySetInnerHTML={{ __html: pageContext.description }}
              />
            </Profile>

            <a
              href={pageContext.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pageContext.website}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Author;
