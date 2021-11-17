import * as React from "react"

import Header from "../components/Header/index"
import Product from "../sections/Product"
import Footer from "../components/Footer"

const IndexPage: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Header />
      <Product />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
