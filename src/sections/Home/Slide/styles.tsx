import styled from "@emotion/styled"

export const SlideWrapper = styled.div`
  .image {
    max-height: 500px;
  }
  .text-box {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    .description {
      font-size: 36px;
      margin-top: 0.6em;
      margin-bottom: 0.6em;
      text-transform: uppercase;
      font-weight: 700;
      color: #ff6600;
    }
    .content {
      font-size: 22px;
    }
    /* .hot-line {
      animation-delay: 0.1s;
      transform: translate3d(0, 0, 0) scale(1);
      border-radius: 99px;
      background-color: #fff;
      color: #666;
      position: relative;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-size: 0.97em;
      letter-spacing: 0.03em;
      cursor: pointer;
      font-weight: bolder;
      text-align: center;
      border: 1px solid transparent;
      min-height: 2.5em;
      padding: 0 1.2em;
      max-width: 242px;
      margin: 0 auto;
      .icon-phone {
        margin-right: 5px;
      }
    } */
    @media screen and (max-width: 768px) {
      top: 40%;
      padding: 0 65px;
      .description {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 490px) {
      .content {
        display: none;
      }
    }
    @media screen and (max-width: 380px) {
      top: 35%;
      .description {
        font-size: 10px;
      }
    }
  }
  .carousel .slide .legend {
    width: auto;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    opacity: 1;
    margin-left: 0;
    font-size: 16px;
    background: #fff;
    color: #fd3c1d;
    font-weight: bold;
    cursor: pointer;
    .icon-phone {
      margin-right: 5px;
      border-radius: 50%;
      border: 1px solid;
      padding: 2px;
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);
      animation: pulse-orange 2s infinite;
    }
    @media screen and (max-width: 600px) {
      font-size: 12px;
      padding: 5px 10px;
    }
    @media screen and (max-width: 324px) {
      bottom: 30px;
      font-size: 10px;
    }

    @keyframes pulse-orange {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);
      }
    }
  }
`
