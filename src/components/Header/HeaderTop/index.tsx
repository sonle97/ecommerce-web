import React from "react"
import { IoMdSearch } from "react-icons/io"
import { Link } from "gatsby"

import { HeaderTopStyled } from "./styles"
import logo from "../../../images/logo.png"
import about from "../../../images/icon/about.png"
import duan from "../../../images/icon/duan.png"
import contact from "../../../images/icon/contact.png"
import news from "../../../images/icon/news.png"

const index = () => {
  return (
    <HeaderTopStyled className="relative">
      <div className="container flex justify-between w-full h-full items-center mx-auto">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="search-form relative">
          <input placeholder="Bạn muốn tìm sản phẩm gì?" className="input" />
          <IoMdSearch className="icon-search" size={20} />
        </div>
        <div className="info-wrapper">
          <Link to="/gioi-thieu" className="">
            <img src={about} />
            <p>Giới thiệu</p>
          </Link>
          <Link to="/bao-gia" className="">
            <img src={duan} />
            <p>Báo giá</p>
          </Link>
          <Link to="/tin-tuc" className="">
            <img src={news} />
            <p>Tin Tức</p>
          </Link>
          <Link to="/lien-he" className="">
            <img src={contact} />
            <p>Liên hệ</p>
          </Link>
        </div>
      </div>
    </HeaderTopStyled>
  )
}

export default index
