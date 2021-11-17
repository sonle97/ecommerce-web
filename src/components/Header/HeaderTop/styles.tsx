import styled from "@emotion/styled"

export const HeaderTopStyled = styled.div`
  height: 82px;
  .container {
    padding: 0 15px;
    .logo {
      width: 225px;
      margin-right: 30px;
      max-height: 100%;
    }
    .search-form {
      box-sizing: border-box;
      border: 1px solid #ddd;
      padding: 0 0.75em;
      height: 2.507em;
      font-size: 0.97em;
      border-radius: 0;
      max-width: 350px;
      width: 100%;
      vertical-align: middle;
      color: #333;
      box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
      transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
      background-color: rgba(0, 0, 0, 0.03);
      box-shadow: none;
      border-color: rgba(0, 0, 0, 0.09);
      border-radius: 99px;
      .input {
        outline: none;
        background: transparent;
        height: 100%;
        width: 100%;
        padding-right: 30px;
        font-size: 14px;
        ::placeholder {
          color: #333;
        }
      }
      .icon-search {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        height: 100%auto;
        cursor: pointer;
      }
    }
    .info-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        margin: 0 15px;
        line-height: 1.5;
        font-weight: normal;
        font-size: 15px;
        color: #0275d8;
        color: #0275d8;
        &:last-child {
          margin-right: 0px;
        }
        img {
          margin: 0 auto;
          max-width: 20px;
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
    height: 0;
  }
`
