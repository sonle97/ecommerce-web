import * as React from "react"

import Header from "../components/Header/index"
import AboutUs from "../sections/AboutUs"
import Footer from "../components/Footer"

const IndexPage: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Header />
      <AboutUs />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
