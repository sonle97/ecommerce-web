import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { ContainerPage, WrapperPage } from "../ui/layout"
import { Content } from "./style"
import FooterWrapper from "./FooterWrapper"
import { scrollToTop } from "../ButtonScrollOnTop"

const FooterContainerPage = styled(ContainerPage)`
  background-color: rgb(0, 86, 144);
  padding-bottom: 0px !important;
  border-top: 2px solid #f58634;
`

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainerPage
        isWidthFull
        className="text-center w-full h-full bg-blue-2"
      >
        <WrapperPage>
          <Content>
            <FooterWrapper />
          </Content>
        </WrapperPage>
        <div className="bg-black-4 text-gray-1 p-4">
          © Bản quyền thuộc về BANHANG | Thiết kế và duy trì bởi{" "}
          <Link to="/" className="text-yellow-1" onClick={scrollToTop}>
            banhang.com
          </Link>{" "}
        </div>
      </FooterContainerPage>
    </React.Fragment>
  )
}

export default Footer
