import styled from "@emotion/styled"

export const SearchFormStyled = styled.div`
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
`
