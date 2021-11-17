import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import { images } from "./data"

const options = {
  showThumbs: true,
  showStatus: false,
  autoPlay: false,
  infiniteLoop: false,
  thumbWidth: 93,
  showArrows: false,
  dynamicHeight: true,
  selectedItem: 0,
}

const ImageProduct = () => {
  return (
    <div className="carousel-content mr-6">
      {images.length ? (
        <Carousel {...options}>
          {images.map((item: any, idx: number) => (
            <div key={idx} className="relative">
              <img src={item?.image_url} className="image" />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="p-5 rounded-xl bg-gray-2 h-full w-full text-white text-center shadow-10 flex items-center justify-center">
          No image
        </div>
      )}
    </div>
  )
}

export default ImageProduct
