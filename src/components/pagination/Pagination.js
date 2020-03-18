import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from "react-icons/fa";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PageNumberWrapper = styled.div`
  color: white;
  border-radius: 100%;
  transition: all 0.3s;
`;

const PageNumber = styled(Link)`
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 100%;
  overflow: hidden;
  font-size: 10px;
  margin: 0 1px;
  width: 30px;
  height: 30px;
  line-height: 1;
  background-color: ${props => (props.isCurrentPage ? "#ffb400" : "#eee")};
  color: ${props => (props.isCurrentPage ? "white" : "black")};
  :hover {
    color: white;
    background: #ff9600;
  }
`;

const pagination = ({ pageContext, path }) => {
  return (
    <PaginationWrapper>
      {pageContext.currentPage > 1 ? (
        <PageNumber to={path}>
          <FaAngleDoubleLeft />
        </PageNumber>
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
          <FaAngleLeft />
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
          <FaAngleRight />
        </PageNumber>
      ) : (
        ""
      )}

      {pageContext.currentPage < pageContext.numberOfPages ? (
        <PageNumber to={`${path}/${pageContext.numberOfPages}`}>
          <FaAngleDoubleRight />
        </PageNumber>
      ) : (
        ""
      )}
    </PaginationWrapper>
  );
};

export default pagination;
