import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Sidebar } from "../components/global/sidebar";
import { PageHero } from "../components/global/pagehero";
import { Breadcrumbs } from "../components/global/breadcrumbs";

const PageContent = styled.article`
  margin: 20px 0 0 0;
`;

const Page = ({ data }) => (
  <Layout>
    <SEO title={data.currentPage.title} />
    {data.currentPage.featured_media ? (
      <PageHero
        img={data.currentPage.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null}
    <Breadcrumbs parent={data.parent} />
    <div className="container">
      <div className="row" style={{ marginBottom: "40px" }}>
        <Sidebar
          parentChild={data.parentChildren}
          currentPage={data.currentPage}
          parent={data.parent}
        >
          {data.children}
        </Sidebar>
        <PageContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
          <p dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
        </PageContent>
      </div>
    </div>
  </Layout>
);

export default Page;

export const pageQuery = graphql`
  query($id: String, $parent: Int, $wpId: Int) {
    currentPage: wordpressPage(id: { eq: $id }) {
      title
      content
      wordpress_parent
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    parentChildren: allWordpressPage(
      filter: { wordpress_parent: { eq: $parent } }
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
    }
  }
`;
