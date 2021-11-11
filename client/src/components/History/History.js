import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

import UserProfile from "../../assets/Images/user.png";
import GetListProductByHistory from "../../hook/OrderHistory";
import { convertToOrder, getAllMoney } from "./HelperHistory";
import Item from "./Item";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "VND",
});

const History = () => {
  const { data: info, loading } = GetListProductByHistory();

  if (loading) return <>Loading...</>;
  else {
    if (!info) return <>Nothing here</>;
  }

  return (
    <>
      <div>
        {/* Cart banner with search */}
        <div className="cart-banner-container hide-on-mobile-tablet">
          <div className="grid wide">
            <div className="cart-banner">
              <a href="##" className="cart-banner__logo">
                <img alt="" src={UserProfile} className="cart-banner__logo-img" />
                <div className="cart-banner__logo-title">Lịch sử mua Hàng</div>
              </a>
              <div className="cart-banner__searchbar">
                <input className="cart-banner__searchbar-input" placeholder="Tìm sản phẩm, thương hiệu, và tên shop trong giỏ hàng" />
                <button className="cart-banner__searchbar-btn">
                  <SearchIcon className="cart-banner__searchbar-icon fas fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Cart main content */}
        <div className="grid wide" style={{ paddingBottom: "25px" }}>
          <br />
          <br />
          {/* Cart product header */}
          <div className="cart-page-product-header hide-on-mobile-tablet littleleft">
            <span className="cart-page-product-header__product littleleft">
              <i className="fas fa-cart-arrow-down" />
              Sản Phẩm (100)
            </span>
            <span className="cart-page-product-header__unit-price">Đơn Giá</span>
            <span className="cart-page-product-header__qnt">Số Lượng</span>
            <span className="cart-page-product-header__total-price">Số Tiền</span>
            <span className="cart-page-product-header__action hehelfet">Ngày mua</span>
          </div>
          {/* Cart shop content*/}
          <div className="cart-page-shop-container">
            <div className="cart-page-shop__container-items">
              <div className="cart-bundle">
                <div className="cart-item-container">
                  {/* Cart Item List */}
                  {info &&
                    convertToOrder(info?.orderHistory).map((x) => {
                      return <Item orderDate={info?.orderHistory[0].orderDate} item={x} />;
                    })}
                  {/* End Cart Item List */}
                </div>
                <div className="cart-item-container-mobile"></div>
              </div>
            </div>
          </div>
          {/* Cart page footer */}
          <div className="cart-page-footer ">
            <div className="cart-page-footer__row3">
              <div className="cart-page-footer__summary moreleft">
                <div className="cart-page-footer__summary-total">
                  <div className="cart-page-footer__summary-total-text">Tổng tiền&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div className="cart-page-footer__summary-total-amount">
                    {/* {info && formatter.format(getAllMoney(info?.orderHistory[0]?.orderDetails))} */}
                    {info && formatter.format(getAllMoney(convertToOrder(info?.orderHistory)))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Empty cart */}
          <div className="empty-cart">
            <div className="empty-cart__img" />
            <div className="empty-cart__msg">Giỏ hàng của bạn còn trống</div>
            <a href="index.html" className="empty-cart__link">
              <button className="empty-cart__link-btn clear-btn">MUA NGAY</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
