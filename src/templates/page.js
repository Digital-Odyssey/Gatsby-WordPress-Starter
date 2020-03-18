import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Sidebar } from "../components/sidebar";
import { PageHero } from "../components/global/pagehero";
import { Breadcrumbs } from "../components/global/breadcrumbs";

const PageContent = styled.article`
  margin: 20px 0 0 0;
`;

const Page = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.currentPage.title} />
      {data.currentPage.featured_media ? (
        <PageHero
          img={data.currentPage.acf.page_hero_img.source_url}
          title={data.currentPage.title}
        />
      ) : null}
      <Breadcrumbs parent={data.parent} />
      <div className="container">
        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="col-lg-3">
            <Sidebar
              parentChildren={data.parentChildren}
              currentPage={data.currentPage}
              parent={data.parent}
            >
              {data.children}
            </Sidebar>
          </div>

          <PageContent className="col-lg-9">
            <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
            <p dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query($id: String, $parent: Int, $wpId: Int) {
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      wordpress_parent
      acf {
        page_hero_img {
          source_url
        }
      }
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
          path
          slug
        }
      }
    }
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      edges {
        node {
          id
          title
          link
          path
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $parent }) {
      title
      link
      slug
      path
    }
  }
`;
