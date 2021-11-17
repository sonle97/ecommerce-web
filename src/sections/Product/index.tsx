import React from "react"

import { ProductStyled } from "./styled"

import { ContainerPage, WrapperPage } from "../../components/ui/layout"
import CategoryTab from "../../components/CategoryTab"
import ProductList from "../../components/ProductList"
import Breadcrumb from "../../components/Breadcrumb"
import DescriptionTabs from "./DescriptionTabs"
import ImageProduct from "./ImageProduct"

const Category = () => {
  return (
    <ContainerPage isBackgroundWhite>
      <WrapperPage>
        <div className="flex item-start justify-between w-full md:mt-5 mt-2">
          <ProductStyled>
            <div className="flex items-start justify-between flex-col md:flex-row">
              <Breadcrumb className="md:hidden mb-3" />
              <div className="md:w-1/2 w-full">
                <ImageProduct />
              </div>
              <div className="md:w-1/2 md:ml-6 w-full">
                <Breadcrumb className="hidden md:block" />
                <div className="text-2xl font-medium my-2 text-blue-3">
                  Cửa Cổng Đẹp Sắt Kẽm SP-48535
                </div>
                <div>
                  Sắt nhập, sản phẩm được mạ Kẽm, sơn hai thành phần(Loại Sơn
                  Tầu Biển) không sét rỉ ,mầu luôn luôn mới, không phai mầu Sắt
                  nhập, sản phẩm được mạ Kẽm, sơn hai thành phần(Loại Sơn Tầu
                  Biển) không sét rỉ ,mầu luôn luôn mới, không phai mầu…
                </div>
                <div className="mt-2">
                  Liên hệ báo giá:{" "}
                  <span className="text-red-1 text-xl font-bold">
                    0347.366.345
                  </span>
                </div>
                <div className="button">LIÊN HỆ TƯ VẤN</div>
                <div className="category-for-product">
                  Danh mục: <span className="text">Cửa cuốn</span>,{" "}
                  <span>Cửa cuốn trượt</span>
                </div>
              </div>
            </div>

            <DescriptionTabs />
            <ProductList
              className="product-list"
              isBackgroundWhite
              title="Sản phẩm tương tự"
            />
          </ProductStyled>
          <CategoryTab className="hidden mdx:block" />
        </div>
      </WrapperPage>
    </ContainerPage>
  )
}

export default Category
