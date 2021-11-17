import React from "react"
import { Link } from "gatsby"

import { BlogStyled, BlogItemStyled } from "./styled"
import { ContainerPage, WrapperPage } from "../../../components/ui/layout"
import SectionTitle from "../../../components/SectionTitle"
import product from "../../../images/product.jpg"

const BlogItem = () => {
  return (
    <BlogItemStyled>
      <Link to={`/blog`}>
        <div className="image">
          <img src={product} alt="" />
        </div>
        <div className="title">
          Thi công vách ngăn phòng ngủ nhôm kính tại HCM
        </div>
        <div className="date italic opacity-80">19/03/2019</div>
        <div className="description truncate font-normal">
          Có rất nhiều không gian phòng có thể sử dụng vách ngăn nhôm kính. Tuy
          nhiên cũng tùy vào những không gian phù hợp với vách ngăn nhôm phù hợp
          với vách ngăn nhôm
        </div>
      </Link>
    </BlogItemStyled>
  )
}

const Blog = () => {
  return (
    <ContainerPage isBackgroundWhite>
      <WrapperPage>
        <BlogStyled>
          <SectionTitle title="TIN TỨC – HƯỚNG DẪN" />
          <div className="flex item-center flex-wrap justify-between mt-4">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
          </div>
        </BlogStyled>
      </WrapperPage>
    </ContainerPage>
  )
}

export default Blog
