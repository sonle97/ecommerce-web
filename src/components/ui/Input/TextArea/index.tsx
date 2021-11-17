import styled, { StyledComponent } from "@emotion/styled"

export const TextArea: StyledComponent<any, any, any> = styled.textarea`
  font-size: 14px;
  box-shadow: none;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 8px 0.75em;
  max-width: 100%;
  width: 100%;
  vertical-align: middle;
  background-color: #fff;
  color: #333;
  box-shadow: 0px 0px 2px rgb(0 0 0 / 10%);
  transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
  &:focus {
    box-shadow: 0 0 5px #ccc;
    opacity: 1;
    outline: 0;
  }
`

export default TextArea
