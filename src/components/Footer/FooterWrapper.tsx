import React from "react"
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"
import { Link } from "gatsby"

import { FooterWrapperStyle } from "./style"
import Logo from "../../images/logo.png"

const FooterWrapper = () => {
  return (
    <FooterWrapperStyle className="flex justify-between text-white">
      <div className="col w-1/2">
        <Link to="/">
          <img src={Logo} alt="logo" className="pb-4 max-w-50" />
        </Link>
        <p className="text-left pb-4 md:pr-12">
          Fusce et sem elementum, mis nibh nec, tincidunt ipsum etiau eu ctor
          turpis. Quisque sitmi elit. Cras vel dui vel orciarel gravida.
          tincidunt ipsum etiau.
        </p>
        <div className="flex">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/diettmoitangoc"
          >
            <FaFacebookF size={15} className="hover:text-yellow-1 mr-3" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/diettmoitangoc"
          >
            <FaYoutube size={15} className=" hover:text-yellow-1 mr-3" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/diettmoitangoc"
          >
            <FaInstagram size={15} className=" hover:text-yellow-1" />
          </a>
        </div>
      </div>
      <div className="col w-1/3 text-left">
        <h4 className="title">Hướng dẫn</h4>
        <ul className="footer-link">
          <Link to="/huong-dan-dat-hang">
            <p> Hướng dẫn đặt hàng</p>
          </Link>
          <Link to="/chinh-sach-van-chuyen-giao-nhan">
            <p>Chính sách vận chuyển, giao nhận</p>
          </Link>
          <Link to="/hinh-thuc-thanh-toan">
            <p>Hình thức thanh toán</p>
          </Link>
          <Link to="/chinh-sach-bao hanh">
            <p>Chính sách bảo hành, đổi trả hàng</p>
          </Link>
        </ul>
      </div>
      <div className="col w-1/3 text-left">
        <h4 className="title">Danh Mục</h4>
        <ul className="footer-link">
          <Link to="/gioi-thieu">
            <p>Giới thiệu</p>
          </Link>
          <Link to="/bao-gia">
            <p>Báo giá</p>
          </Link>
          <Link to="/tin-tuc">
            <p>Tin tức</p>
          </Link>
          <Link to="/lien-he">
            <p>Liên hệ</p>
          </Link>
        </ul>
      </div>
    </FooterWrapperStyle>
  )
}

export default FooterWrapper
