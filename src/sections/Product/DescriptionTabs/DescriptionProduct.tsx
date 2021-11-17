import React, { useState } from "react"

const ReadMore = ({ children }: any) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <div className="text">
      {isReadMore ? text.slice(0, 300) + "..." : text}{" "}
      <span onClick={toggleReadMore} className="cursor-pointer text-blue-1">
        {isReadMore ? <span>Đọc thêm</span> : <div>Thu gọn</div>}
      </span>
    </div>
  )
}

const DescriptionProduct = () => (
  <ReadMore>
    Thật tiện lợi khi sử dụng hệ tủ đồ bằng nhôm kính, chẳng hạn như tủ thuốc,
    tủ kệ chứa điện thoại, hay các tủ kệ cho các cửa hàng thời trang. Với sản
    phẩm này khách hàng có thể yên tâm sử dụng mà không lo bị ẩm mốc, cong vênh
    hay mối mọt như các sản phẩm gỗ thông thường, Một ưu điểm nữa khi sử dụng tủ
    nhôm kính là giá thành rẻ hơn rất nhiều so với sản phẩm làm từ các chất liệu
    khác và độ bền thậm chí còn hơn hẳn. Còn rất nhiều sản phẩm từ nhôm kính
    khác mà chúng tôi chưa thể giới thiệu trong bài viết này ngay được, quý
    khách nào có những ý tưởng và giải pháp muốn sử dụng hệ nhôm kính cho không
    gian gia đình mình có thể liên hệ với chúng tôi, chúng tôi sẽ đến tận nơi để
    tư vấn và đưa gia ý tưởng kết hợp cùng với tính năng hợp lý.
  </ReadMore>
)
export default DescriptionProduct
