import styled from "@emotion/styled"

export const AdminContainerStyled = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  .pro-sidebar-content {
    overflow-y: auto;
  }

  .btn-toggle {
    cursor: pointer;
    width: 35px;
    height: 35px;
    background: #353535;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    display: none;
  }

  .sidebar-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    .sidebar-btn {
      padding: 1px 15px;
      border-radius: 40px;
      background: rgba(255, 255, 255, 0.05);
      color: #adadad;
      text-decoration: none;
      margin: 0 auto;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-overflow: ellipsis;
      overflow: hidden;
      span {
        margin-left: 5px;
        font-size: 13px;
      }
      &:hover {
        color: $highlight-color;
      }
    }
  }

  .collapsed {
    .sidebar-btn {
      display: inline-block;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      line-height: 40px;
      padding: 0;
    }
  }

  main {
    padding: 24px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    header {
      margin-bottom: 40px;
      border-bottom: 1px solid #efefef;
      h1 {
        display: flex;
        align-items: center;
        transform: translateX(-20px);
      }
    }

    footer {
      margin-top: auto;
      color: #888;
      text-align: center;
      a {
        text-decoration: none;
        color: #888;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .social-bagdes {
    margin-top: 10px;
    img {
      margin: 5px;
    }
  }

  .block {
    display: flex;
    margin-bottom: 24px;
    font-size: 14px;
    color: #545454;
    > span {
      margin-left: 10px;
    }
  }

  &.rtl {
    direction: rtl;
    text-align: right;

    header {
      h1 {
        transform: translateX(20px);
      }
    }
    .block {
      direction: rtl;
      > span {
        margin-left: 0;
        margin-right: 10px;
      }
    }
    .sidebar-btn-wrapper {
      .sidebar-btn {
        span {
          margin-left: 0;
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 767.98px) {
    overflow-x: hidden;
    header {
      h1 {
        font-size: 24px;
      }
    }
  }
  @media (max-width: $breakpoint-md) {
    .btn-toggle {
      display: flex;
    }

    &.rtl {
      .btn-toggle {
        margin-left: auto;
      }
    }
  }
`
