import React from "react";

const ProductDetail = ({ sp: x }) => {
  return (
    <>
      <div className="product-details">
        <div className="product-detail">
          <div className="product-detail__title">Chi tiết sản phẩm</div>
          <div className="product-details__wrapper">
            <div className="product-detail__wrapper">
              <span className="product-detail__label">Danh Mục</span>
              <div className="product-detail__links">
                <a className="product-detail__link" href="/">
                  <span>Chingchong Shop</span>
                </a>
                <svg className="product-detail__icon" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                  <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                </svg>
                <a className="product-detail__link" href="/">
                  <span>Phụ kiện</span>
                </a>
                <svg className="product-detail__icon" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                  <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                </svg>
                <a className="product-detail__link" href="/">
                  <span>{x.danhmuc}</span>
                </a>
              </div>
            </div>
            <div className="product-detail__wrapper">
              <span className="product-detail__label">Thương hiệu</span>
              <a className="product-detail__link" href="/">
                <span>{x.thuonghieu}</span>
              </a>
            </div>
            <div className="product-detail__wrapper">
              <span className="product-detail__label">Chất liệu</span>
              <span className="product-detail__text">{x.chatlieu}</span>
            </div>
            <div className="product-detail__wrapper">
              <span className="product-detail__label">Xuất xứ</span>
              <span className="product-detail__text">{x.xuatxu}</span>
            </div>
            <div className="product-detail__wrapper">
              <span className="product-detail__label">Kho hàng</span>
              <span className="product-detail__text">{x.tonkho}</span>
            </div>
            <div className="product-detail__wrapper">
              <span className="product-detail__label">Gửi từ</span>
              <span className="product-detail__text">{x.guitu}</span>
            </div>
          </div>
        </div>
        <div className="product-description">
          <div className="product-description__title">Mô tả sản phẩm</div>
          <span className="product-description__content">
            {x.mota1}
            <span className="dots"> ...</span>
            <br />
            <br />
            {x.mota2}
            <br />
            <br />
            {x.mota3}
          </span>
          <button className="read-more-btn clear-btn">
            <span className="read-more-btn__text">Xem thêm</span>
            <span className="read-more-btn__icon--down">
              <i className="read-more-btn__icon fas fa-angle-down" />
            </span>
            <span className="read-more-btn__icon--up hidden">
              <i className="read-more-btn__icon fas fa-angle-up" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
