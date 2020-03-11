import React from "react"
import Layout from "../../components/layout"
import { SEO } from "../../components"
import styled from "styled-components"

const Profile = styled.div`
  margin: 20px 0 0;
`
const ProfileImage = styled.img`
  border-radius: 100%;
`

const Author = ({ pageContext }) => {
  console.log(pageContext.authorSlug)
  return (
    <Layout>
      <SEO title="Author" />
      <div>
        <ProfileImage src={pageContext.largeAvatar} alt={pageContext.name} />
        <h3 dangerouslySetInnerHTML={{ __html: pageContext.name }} />
        <Profile>
          <p dangerouslySetInnerHTML={{ __html: pageContext.description }} />
        </Profile>

        <a href={pageContext.website} target="_blank">
          {pageContext.website}
        </a>
      </div>
    </Layout>
  )
}

export default Author
