import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { MdPhone } from "react-icons/md"

import { SlideWrapper } from "./styles"
import { slides } from "../data"

const index = () => {
  const options = {
    showThumbs: false,
    showStatus: false,
    autoPlay: true,
    infiniteLoop: true,
  }
  return (
    <SlideWrapper>
      <Carousel {...options}>
        {slides.map((item: any, idx: number) => (
          <div key={idx} className="relative">
            <img src={item.img} className="image" />
            <p className="legend">
              <MdPhone size={25} className="icon-phone" /> Hotline: 0347366345
            </p>
            <div className="text-box">
              <p className="description">{item.description}</p>
              <p className="content">{item.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </SlideWrapper>
  )
}

export default index
