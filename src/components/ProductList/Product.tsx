import React from "react"
import product from "../../images/product.jpg"
import { Link } from "gatsby"
import { ProductStyled } from "./styled"

const Product = () => {
  return (
    <ProductStyled className="product">
      <Link to={`/product`}>
        <div className="image">
          <img src={product} alt="" />
        </div>
        <div className="name-product">
          Nho Hạ Đen giống 1 năm tuổi Nho Hạ Đen giống 1 năm tuổi
        </div>
        <div className="contact-btn">Liên hệ</div>
      </Link>
    </ProductStyled>
  )
}

export default Product
