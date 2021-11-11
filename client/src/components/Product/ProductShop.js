import React from "react";

import Employer from "../../assets/Images/employer.png";

const ProductShop = ({ shop: x }) => {
  return (
    <>
      <div className="row sm-gutter product-shop">
        <div className="product-shop__contact">
          <a href="#" className="product-shop__contact-img-link">
            <div className="product-shop__contact-avatar-wrapper">
              <img className="product-shop__contact-avatar" src={Employer} />
            </div>
            <span className="label-loving">Yêu Thích</span>
          </a>
          <div className="product-shop__contact-container">
            <div className="product-shop__contact-info">
              <div className="product-shop__contact-name">{x.ten}</div>
              <div className="product-shop__contact-online-time">Online {x.online}</div>
            </div>
            <div className="product-shop__contact-main">
              <button className="product-shop__contact-btn product-shop__contact-message-btn hide-on-mobile">
                <i className="product-shop__contact-icon far fa-comment-alt" />
                <span className="product-shop__contact-message-text">Chat Ngay</span>
              </button>
              <a href="#" className="product-shop__contact-btn product-shop__contact-viewing">
                <i className="product-shop__contact-icon fas fa-store" />
                <div className="product-shop__contact-viewing-text">Xem Shop</div>
              </a>
            </div>
          </div>
        </div>
        <div className="product-shop__side hide-on-mobile-tablet">
          <div className="product-shop__side-container">
            <div className="product-shop__side-wrapper">
              <label className="product-shop__side-label">Đánh giá</label>
              <div className="product-shop__side-qnt">{x.danhgia}</div>
            </div>
            <a href="#" className="product-shop__side-wrapper">
              <label className="product-shop__side-label">Sản phẩm</label>
              <div href="#" className="product-shop__side-qnt product-shop__side-qnt--link">
                {x.sanpham}
              </div>
            </a>
          </div>
          <div className="product-shop__side-container">
            <div className="product-shop__side-wrapper">
              <label className="product-shop__side-label">Tỉ Lệ Phản Hồi</label>
              <div className="product-shop__side-qnt">{x.phanhoi}</div>
            </div>
            <div className="product-shop__side-wrapper">
              <label className="product-shop__side-label">Thời Gian Phản Hồi</label>
              <div className="product-shop__side-qnt">trong vài phút</div>
            </div>
          </div>
          <div className="product-shop__side-container">
            <div className="product-shop__side-wrapper">
              <label className="product-shop__side-label">Tham gia</label>
              <div className="product-shop__side-qnt">{x.thamgia}</div>
            </div>
            <div className="product-shop__side-wrapper">
              <label className="product-shop__side-label">Người theo dõi</label>
              <div className="product-shop__side-qnt">{x.follower}</div>
            </div>
          </div>
        </div>
        {/* Product shop slide on mobile */}
        <div className="product-shop__side-mobile">
          <div className="product-shop__side-wrapper">
            <label className="product-shop__side-label">Đánh giá</label>
            <div className="product-shop__side-qnt">{x.danhgia}</div>
          </div>
          <a href="#" className="product-shop__side-wrapper">
            <label className="product-shop__side-label">Sản phẩm</label>
            <div href="#" className="product-shop__side-qnt product-shop__side-qnt--link">
              {x.sanpham}
            </div>
          </a>
          <div className="product-shop__side-wrapper">
            <label className="product-shop__side-label">Tỉ Lệ Phản Hồi</label>
            <div className="product-shop__side-qnt">{x.phanhoi}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShop;
