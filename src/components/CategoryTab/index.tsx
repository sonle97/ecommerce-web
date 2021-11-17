import React, { useState } from "react"
import { Link } from "gatsby"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

import { CategoryTabStyled, SubTabStyled } from "./styled"

const SubTab = () => {
  return (
    <SubTabStyled>
      <Link to="/" className="text-sm">
        Hộp xốp 1
      </Link>
    </SubTabStyled>
  )
}

const TabItem = () => {
  const [isSubTabOpen, setIsSubTabOpen] = useState(false)
  return (
    <>
      <div
        className="tab-item flex items-center justify-between py-2 
        pl-5 pr-3 text-gray-3 cursor-pointer"
      >
        <Link to="/" className="text-sm">
          Hộp xốp
        </Link>
        <div onClick={() => setIsSubTabOpen(!isSubTabOpen)}>
          {isSubTabOpen ? (
            <BiChevronUp size={20} className="hover:text-black-0" />
          ) : (
            <BiChevronDown size={20} className="hover:text-black-0" />
          )}
        </div>
      </div>
      {isSubTabOpen && (
        <>
          <SubTab />
          <SubTab />
          <SubTab />
        </>
      )}
    </>
  )
}

const CategoryTab = (props: any) => {
  const { className } = props
  return (
    <CategoryTabStyled className={`${className && className}`}>
      <div className="title">DANH MỤC SẢN PHẨM</div>
      <div className="tab-wrapper">
        <TabItem />
        <TabItem />
        <TabItem />
        <TabItem />
        <TabItem />
      </div>
    </CategoryTabStyled>
  )
}

export default CategoryTab
