import styled from "@emotion/styled"

export const BlogStyled = styled.div`
  text-align: center;
`
export const BlogItemStyled = styled.div`
  width: 100%;
  flex-basis: 24%;
  min-height: 310px;
  text-align: left;
  position: relative;
  cursor: pointer;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  background: white;
  /* margin: 0 5px 10px 5px; */
  margin-bottom: 10px;
  position: relative;
  padding: 10px;

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

  .title {
    margin: 5px 0px 10px;
    font-size: 16px;
    color: #2a2a2a;
    font-weight: bold;
    &:hover {
      color: #0e76bc;
    }
  }
  .date {
    font-size: 12px;
  }
  .description {
    margin-top: 6px;
    font-size: 14px;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
  }

  @media (max-width: 768px) {
    flex-basis: 49%;
  }

  @media (max-width: 414px) {
    .title {
      font-size: 14px;
    }
    .description {
      font-size: 12px;
      -webkit-line-clamp: 3;
    }
  }

  /* @media (min-width: 960px) {
    margin: 0 28px 10px 0px;
    &:last-child {
      margin: 0px 0px 10px;
    }
  } */
`
