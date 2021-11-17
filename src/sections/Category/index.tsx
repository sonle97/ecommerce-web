import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

import ProductList from "./ProductList"
import { CategoryWrapperStyled, CategoryTabMobile } from "./styled"

import { ContainerPage, WrapperPage } from "../../components/ui/layout"
import Breadcrumb from "../../components/Breadcrumb"
import CategoryTab from "../../components/CategoryTab"

const Category = () => {
  const [tabCategory, setTabCategory] = useState(false)
  return (
    <ContainerPage isBackgroundWhite>
      <WrapperPage>
        <CategoryWrapperStyled className="text-center mdx:text-left">
          <div className="name">Cửa lưới trượt</div>
          <Breadcrumb />
        </CategoryWrapperStyled>

        <CategoryTabMobile
          className="flex mdx:hidden"
          onClick={() => setTabCategory(!tabCategory)}
        >
          <AiOutlineMenu size={17} className="mr-2" />
          DANH MỤC DỊCH VỤ
        </CategoryTabMobile>
        {tabCategory && <CategoryTab className="mx-auto" />}

        <div className="flex item-start justify-between w-full mt-5">
          <ProductList />
          <CategoryTab className="hidden mdx:block" />
        </div>
      </WrapperPage>
    </ContainerPage>
  )
}

export default Category
