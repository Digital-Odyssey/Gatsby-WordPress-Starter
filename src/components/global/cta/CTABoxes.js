import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CTA } from "./";

const CTABoxes = () => {
  const {
    cta: { acf: cta },
  } = useStaticQuery(graphql`
    fragment ctaImage on wordpress__wp_media {
      localFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }

    query {
      cta: wordpressPage(slug: { eq: "home" }) {
        acf {
          cta_box_1_title
          cta_box_2_title
          cta_box_3_title
          cta_box_1_link
          cta_box_2_link
          cta_box_3_link
          cta_box_1_image {
            ...ctaImage
          }
          cta_box_2_image {
            ...ctaImage
          }
          cta_box_3_image {
            ...ctaImage
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CTA
              image={cta.cta_box_1_image.localFile.childImageSharp.fluid}
              link={cta.cta_box_1_link}
              text={cta.cta_box_1_title}
            />
          </div>
          <div className="col-md-4">
            <CTA
              image={cta.cta_box_2_image.localFile.childImageSharp.fluid}
              link={cta.cta_box_2_link}
              text={cta.cta_box_2_title}
            />
          </div>
          <div className="col-md-4">
            <CTA
              image={cta.cta_box_3_image.localFile.childImageSharp.fluid}
              link={cta.cta_box_3_link}
              text={cta.cta_box_3_title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTABoxes;
