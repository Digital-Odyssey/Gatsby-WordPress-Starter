import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const LinkBtn = styled(Link)`
  border: 1px solid #ccc;
  padding: 6px 12px;
  text-decoration: none;
  color: #aaa;

  :hover {
    background-color: #ccc;
    color: white;
  }
`

const GatsbyPagination = ({ path, slug, page, totalPages }) => {
  return (
    <PaginationWrapper>
      <div>
        {page > 1 ? (
          <LinkBtn
            to={`/${path}/${slug}/${page === 2 ? "" : page - 1}/`}
            className="post-prev-link"
          >
            Previous
          </LinkBtn>
        ) : (
          <div />
        )}
      </div>
      <div>
        Page {page} / {totalPages}
      </div>
      <div>
        {page < totalPages ? (
          <LinkBtn
            to={`/${path}/${slug}/${page + 1}`}
            className="post-next-link"
          >
            Next
          </LinkBtn>
        ) : (
          <div />
        )}
      </div>
    </PaginationWrapper>
  )
}

export default GatsbyPagination
