import styled from "@emotion/styled"

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Label = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 500;
`
