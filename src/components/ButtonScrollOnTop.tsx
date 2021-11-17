import React from "react"
import styled from "@emotion/styled"
import { FaAngleDoubleUp } from "react-icons/fa"

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const ButtonScrollOnTop = styled((props: any) => {
  const { className } = props
  return (
    <div className={className && className} onClick={scrollToTop}>
      <FaAngleDoubleUp className="icon-double-up" />
    </div>
  )
})`
  opacity: 0.5;
  background-color: #0e76bc;
  width: 40px;
  height: 35px;
  position: fixed;
  bottom: 10px;
  right: 20px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  .icon-double-up {
    font-size: 17px;
    color: #fff;
  }
`

export default ButtonScrollOnTop
