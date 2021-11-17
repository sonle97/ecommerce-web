import React from "react"

import { WhyChooseUsStyled } from "./styled"
import { data } from "./data"

import { ContainerPage, WrapperPage } from "../../../components/ui/layout"
import bg from "../../../images/why_choose_us_bg.jpg"
import SectionTitle from "../../../components/SectionTitle"

const Item = (props: any) => {
  const { item } = props
  return (
    <div className="text-white text-start w-full md:w-1/2 lg:1/4 px-3 pb-5">
      <img src={item.icon} className="icon" />
      <div className="text-white font-bold text-xl uppercase my-4">
        {item.title}
      </div>
      <div className="text-white">{item.description}</div>
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <ContainerPage
      className="text-center w-full h-full bg-cover bg-center bg-no-repeat relative bg-fixed"
      style={{ backgroundImage: "url(" + bg + ")" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(59, 58, 58, 0.72)" }}
      />
      <WrapperPage>
        <WhyChooseUsStyled>
          <SectionTitle title="LÝ DO KHÁCH HÀNG CHỌN CHÚNG TÔI" colorWhite />
          <div className="flex items-start flex-wrap pt-7">
            {data.map((item: any, idx: number) => (
              <Item item={item} key={idx} />
            ))}
          </div>
        </WhyChooseUsStyled>
      </WrapperPage>
    </ContainerPage>
  )
}

export default WhyChooseUs
