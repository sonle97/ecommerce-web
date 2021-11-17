import styled from "@emotion/styled"

export const ProductStyled = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0;
  .product-list {
    padding-left: 0px;
    padding-right: 0px;
  }
  .button {
    border: 1px solid #006398;
    padding: 7px 20px;
    border-radius: 4px;
    text-transform: uppercase;
    background: #0292dd;
    margin-top: 10px;
    display: inline-block;
    margin-bottom: 13px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  .category-for-product {
    display: block;
    border-top: 1px dotted #ddd;
    padding: 5px 0;
    font-size: 14px;
    span {
      cursor: pointer;
      color: #0f7cb6;
      &:hover {
        color: #003e5f;
      }
    }
  }

  .carousel-content {
    width: 100%;
    height: auto;
    .carousel-slider {
      padding: 5px 5px 20px;
    }
    .control-dots {
      display: none;
    }
    .carousel {
      .slider-wrapper {
        min-height: 320px;
      }
      .slide {
        img {
          height: 320px;
          object-fit: contain;
        }
      }
      .thumbs-wrapper {
        margin: 0;
        padding: 0 5px 10px;
        .thumb {
          max-height: 64px;
          height: 100%;
          border-color: #bebebe;
          padding: 0;
          border-radius: 7px;

          &.selected,
          &:hover {
            border: 2px solid #0f7cb6;
          }
          img {
            height: 50px;
            object-fit: contain;
          }
        }
      }
    }
  }

  @media (min-width: 960px) {
    max-width: 75%;
    padding: 0 15px 30px 0;
  }
`
