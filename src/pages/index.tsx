import * as React from "react"

import Header from "../components/Header/index"
import Home from "../sections/Home"
import ButtonScrollOnTop from "../components/ButtonScrollOnTop"
import Footer from "../components/Footer"

const IndexPage: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
      <ButtonScrollOnTop />
    </React.Fragment>
  )
}

export default IndexPage
