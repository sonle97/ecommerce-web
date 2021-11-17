import React from "react"

import Slide from "./Slide"
import WhyChooseUs from "./WhyChooseUs"
import Blog from "./Blog"
import ProductList from "../../components/ProductList"

const HomePage = () => {
  return (
    <React.Fragment>
      <Slide />
      <ProductList title="Sản phẩm nổi bật" />
      <ProductList isBackgroundWhite title="Sản phẩm" />
      <ProductList isBackgroundWhite title="Sản phẩm" />
      <ProductList isBackgroundWhite title="Sản phẩm" />
      <WhyChooseUs />
      <Blog />
    </React.Fragment>
  )
}

export default HomePage
