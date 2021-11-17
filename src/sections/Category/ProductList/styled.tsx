import styled from "@emotion/styled"

export const ProductListStyled = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 960px) {
    max-width: 75%;
    padding: 0 15px 30px 0;
  }

  .product {
    min-width: unset;
    max-width: unset;
    margin: 0 0 15px;
    flex-basis: 49%;
    @media (min-width: 630px) {
      flex-basis: 32%;
    }
    @media (min-width: 768px) {
      flex-basis: 24%;
    }
  }
`
