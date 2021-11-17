import React from "react"
import styled from "@emotion/styled"
import { AiFillStar } from "react-icons/ai"

import { Label, FormRow } from "../../../components/ui"
import { TextArea } from "../../../components/ui/Input/TextArea"
import { Input } from "../../../components/ui/Input"
import { ButtonBlue } from "../../../components/ui/Button"

const ReviewsProductStyled = styled.div`
  .form-wrapper {
    margin-top: 30px;
    border: 2px solid #0f7cb6;
    padding: 15px 30px 30px;
    .star-wrapper {
      .star {
        padding: 0 0.3em;
        border-left: 1px solid #ececec;
        cursor: pointer;
        svg {
          color: #ddd;
          font-size: 22px;
        }
        &:hover {
          svg {
            color: #d26e4b;
          }
        }
        &.star-1 {
          border-left: none;
          padding-left: 0;
        }
      }
    }
    @media (max-width: 530px) {
      .star-wrapper {
        justify-content: space-around;
        .star {
          display: block;
          padding: 0;
          border: none;
        }
      }
    }
  }
`

const ReviewsProduct = () => (
  <ReviewsProductStyled>
    <p className="font-medium text-xl	mb-2">Đánh giá</p>
    <p>Chưa có đánh giá nào.</p>
    <div className="form-wrapper">
      <p className="font-medium text-xl	mb-2">
        Hãy là người đầu tiên nhận xét “Cửa lùa nhôm kính cao cấp”
      </p>
      <Label>Đánh giá của bạn</Label>
      <div className="flex items-center pb-2 star-wrapper">
        <div className="star star-1 flex items-center">
          <AiFillStar />
        </div>
        <div className="star star-2 flex items-center">
          <AiFillStar /> <AiFillStar />
        </div>
        <div className="star star-3 flex items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="star star-4 flex items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="star star-5 flex items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      <div>
        <div>
          <Label>Nhận xét của bạn *</Label>
          <TextArea rows="5" />
        </div>
        <FormRow className="mt-4 mb-2">
          <div className="w-full md:mr-4 mb-4">
            <Label>Tên *</Label>
            <Input />
          </div>
          <div className="w-full mb-4">
            <Label>Email *</Label>
            <Input />
          </div>
        </FormRow>
        <ButtonBlue>Gửi đi</ButtonBlue>
      </div>
    </div>
  </ReviewsProductStyled>
)

export default ReviewsProduct
