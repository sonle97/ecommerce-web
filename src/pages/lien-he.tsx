import * as React from "react"

import Header from "../components/Header/index"
import Contact from "../sections/Contact"
import Footer from "../components/Footer"

const IndexPage: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Header />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
