import styled from "@emotion/styled"

interface LayoutProps {
  isBackgroundWhite?: boolean
  isWidthFull?: boolean
}

interface TitleProps {
  colorWhite?: boolean
}

export const ContainerPage = styled.div<LayoutProps>`
  background-color: ${props =>
    props.isBackgroundWhite ? "white" : "rgb(250, 250, 250)"};
  padding: ${props =>
    props.isWidthFull ? "20px 0px 20px;" : "20px 15px 20px;"};

  @media (min-width: 768px) {
    padding: ${props =>
      props.isWidthFull ? "30px 0px 20px;" : "30px 15px 20px;"};
  }
`
export const WrapperPage = styled.div<LayoutProps>`
  max-width: ${props => (props.isWidthFull ? "100%" : "1185px")};
  margin: 0 auto;
`

export const Row = styled.div`
  flex-wrap: wrap;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
  }
`

export const Title = styled.h2<TitleProps>`
  font-size: 32px;
  color: ${props => (props.colorWhite ? "#ffffff" : "#0e76bc")};
  font-weight: bold;
  position: relative;
  text-transform: capitalize;
  display: inline-block;

  span {
    ::before {
      content: "";
      height: 1.5px;
      width: 30%;
      background-color: #ccc;
      position: absolute;
      margin: 0 auto;
      bottom: -18px;
      left: 0;
      right: 0;
    }
    ::after {
      content: "";
      font: normal normal normal 15px/1 FontAwesome;
      position: absolute;
      margin: 0 auto;
      color: #fff;
      bottom: -30px;
      left: 0;
      right: 0;
      background-color: #2559a1;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
    }
  }
  @media screen and (max-width: 540px) {
    font-size: 26px;
    line-height: 50px;
  }
`
