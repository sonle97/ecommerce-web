import React from "react"
import styled from "@emotion/styled"

export const BreadcrumbStyled = styled.div`
  text-transform: none;
  color: rgba(102, 102, 102, 0.7);
  font-weight: normal;
  font-size: 14px;
  span {
    cursor: pointer;
    &:hover {
      color: #222222;
    }
  }
`

const Breadcrumb = ({ className }: any) => {
  return (
    <BreadcrumbStyled className={className && className}>
      <span>Trang chủ</span> / <span>Cửa lưới chống muỗi</span> /{" "}
      <span>Cửa lưới trượt</span>
    </BreadcrumbStyled>
  )
}

export default Breadcrumb
