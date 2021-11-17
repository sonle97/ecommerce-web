import styled from "@emotion/styled"

export const ProductListStyled = styled.div`
  .title-wrapper {
    border-bottom: 2px solid #f58634;
    .title {
      background-color: #0e76bc;
      padding: 10px 15px 10px 40px;
      background-image: url(https://bacgiangweb.com/nhomkinh/img/nhomkinh.png);
      color: white;
      background-repeat: no-repeat;
      background-position: left;
      background-position-x: 15px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: normal;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .product-list-wrapper {
    display: flex;
    align-items: center;
    margin-top: 20px;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: white white;

    @media screen and (min-width: 768px) {
      ::-webkit-scrollbar {
        height: 7px;
        width: 5px;
      }

      &:hover {
        scrollbar-color: #90a4ae white;

        &::-webkit-scrollbar-track {
          border-radius: 0.75rem;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 0.75rem;
          background-color: #90a4ae;
        }
        &::-webkit-scrollbar-thumb:hover {
          background-color: #555555;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .title-wrapper {
      .title {
        font-size: 15px;
        padding: 14px 25px 14px 50px;
      }
    }
  }
`

export const ProductStyled = styled.div`
  width: 100%;
  min-width: 187px;
  max-width: 187px;
  min-height: 270px;
  text-align: center;
  position: relative;
  cursor: pointer;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  background: white;
  margin: 0 10px 15px 0px;
  position: relative;
  &:last-child {
    margin: 0px 0px 10px;
  }
  .image {
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: 100%;
    border-top-left-radius: 3%;
    border-top-right-radius: 3%;

    img {
      width: 100%;
      transition: 0.5s;
      display: inline-block;
      max-width: 100%;
      max-height: 200px;
    }
  }

  .name-product {
    margin: 10px 0px 15px;
    font-size: 14px;
    color: #3a3a3a;
    font-weight: normal;
    padding: 0px 5px;
  }
  .contact-btn {
    border-radius: 4px;
    font-weight: 500;
    padding: 4px 20px;
    text-transform: none;
    font-size: 16px;
    /* background: #0e76bc;
    display: inline-block; */
    color: #eb1d21;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
  &:hover {
    box-shadow: 2px 2px 10px #e5e5e5;
    img {
      transform: scale(1.1);
      transition: filter 0.6s, opacity 0.6s, transform 0.6s, box-shadow 0.3s;
    }
  }

  @media (max-width: 413px) {
    min-width: 140px;
    max-width: 140px;
    min-height: 255px;
  }

  @media (min-width: 960px) {
    min-width: 250px;
    max-width: 250px;
    min-height: 310px;
    .name-product {
      font-size: 16px;
    }
  }
`
