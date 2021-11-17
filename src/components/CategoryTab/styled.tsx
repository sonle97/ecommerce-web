import styled from "@emotion/styled"

export const CategoryTabStyled = styled.div`
  max-width: 300px;
  width: 100%;
  .title {
    background: #0f7cb6;
    display: block;
    padding: 10px 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    letter-spacing: 0;
    color: white;
    font-size: 14px;
    font-weight: normal;
  }
  .tab-wrapper {
    border-right: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
    .tab-item {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .active {
    font-weight: bold;
    color: #000000;
  }

  @media (min-width: 960px) {
    max-width: 25%;
    padding: 0 0 10px 15px;
  }
`

export const SubTabStyled = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  border-bottom: 1px solid #fff;
  padding: 0.5rem 40px;
  width: 100%;
  font-size: 14px;
`
