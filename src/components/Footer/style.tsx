import styled from "@emotion/styled"

export const Content = styled.div`
  color: #cacaca;
  .contact-footer {
  }
  @media screen and (max-width: 768px) {
    .contact-footer {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .row {
        padding-bottom: 15px;
      }
    }
  }
`

export const Line = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 50px 0px;
`

export const FooterWrapperStyle = styled.div`
  padding-bottom: 40px;
  .col {
    padding: 0px 15px;
    .title {
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 20px;
      text-transform: capitalize;
      color: #fff;
      line-height: 55px;
    }
    ul p {
      cursor: pointer;
      padding: 5px 0px;
      &:hover {
        color: #ddbb00;
      }
    }
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
    .col {
      width: 100%;
      margin-bottom: 10px;
      .title {
        padding-bottom: 0;
      }
    }
  }
`
