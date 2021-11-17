import * as React from "react"

import Header from "../components/Header/index"
import Category from "../sections/Category"
import Footer from "../components/Footer"

const IndexPage: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Header />
      <Category />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
