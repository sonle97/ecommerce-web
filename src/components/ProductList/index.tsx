import React from "react"
import { IoMdAdd } from "react-icons/io"
import { Link } from "gatsby"

import { ProductListStyled } from "./styled"
import Product from "./Product"

import { ContainerPage, WrapperPage } from "../ui/layout"

interface ProductListProps {
  title: string
  isBackgroundWhite?: boolean
  className?: string
}

const ProductList = (props: ProductListProps) => {
  const { title, isBackgroundWhite, className } = props
  return (
    <ContainerPage
      isBackgroundWhite={isBackgroundWhite}
      className={className && className}
    >
      <WrapperPage>
        <ProductListStyled>
          <div className="flex items-center justify-between title-wrapper">
            <div className="title">{title}</div>
            <Link to="/category">
              <div className="text-blue-1 italic cursor-pointer text-base flex items-center font-medium">
                <IoMdAdd size={15} className="mr-1" />
                {""} Xem tất cả
              </div>
            </Link>
          </div>
          <div className="product-list-wrapper">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </ProductListStyled>
      </WrapperPage>
    </ContainerPage>
  )
}

export default ProductList
