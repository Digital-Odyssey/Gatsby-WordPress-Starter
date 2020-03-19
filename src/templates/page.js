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

const Page = ({ data: { currentPage, parentChildren, parent, children } }) => {
  return (
    <Layout>
      <SEO title={currentPage.title} />
      {currentPage.featured_media ? (
        <PageHero
          img={currentPage.acf.page_hero_img.source_url}
          title={currentPage.title}
        />
      ) : null}
      <Breadcrumbs parent={parent} />
      <div className="container">
        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="col-lg-3">
            <Sidebar
              parentChildren={parentChildren}
              currentPage={currentPage}
              parent={parent}
            >
              {children}
            </Sidebar>
          </div>

          <PageContent className="col-lg-9">
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <p dangerouslySetInnerHTML={{ __html: currentPage.content }} />
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
