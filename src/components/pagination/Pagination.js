import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PageNumberWrapper = styled.div`
  display: flex;
  background: ${props => (props.isCurrentPage ? "red" : "white")};
  color: white;
`;

const PageNumber = styled(Link)`
  padding: 8px 12px;
  text-decoration: none;
  border: 1px solid #eee;
  font-size: 10px;
  color: ${props => (props.isCurrentPage ? "white" : "black")};
  transition: all 0.3s;
  :hover {
    background: red;
    color: white;
  }
`;

const pagination = ({ pageContext, path }) => {
  return (
    <PaginationWrapper>
      {pageContext.currentPage > 1 ? (
        <PageNumber to={path}>{"<<"}</PageNumber>
      ) : (
        ""
      )}
      {pageContext.currentPage > 1 ? (
        <PageNumber
          to={
            pageContext.currentPage === 2
              ? path
              : `${path}/${pageContext.currentPage - 1}`
          }
        >
          {"<"}
        </PageNumber>
      ) : (
        ""
      )}
      {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
        <PageNumberWrapper
          key={index}
          isCurrentPage={index + 1 === pageContext.currentPage}
        >
          {index + 1 > pageContext.currentPage - pageContext.pagingDisplay &&
            index + 1 < pageContext.currentPage + pageContext.pagingDisplay && (
              <PageNumber
                key={index}
                to={index === 0 ? path : `${path}/${index + 1}`}
                className={`page-number${
                  index === pageContext.currentPage - 1 ? " white" : ""
                }`}
              >
                {index + 1}
              </PageNumber>
            )}
        </PageNumberWrapper>
      ))}

      {pageContext.currentPage < pageContext.numberOfPages ? (
        <PageNumber to={`${path}/${pageContext.currentPage + 1}`}>
          {">"}
        </PageNumber>
      ) : (
        ""
      )}

      {pageContext.currentPage < pageContext.numberOfPages ? (
        <PageNumber to={`${path}/${pageContext.numberOfPages}`}>
          {">>"}
        </PageNumber>
      ) : (
        ""
      )}
    </PaginationWrapper>
  );
};

export default pagination;
