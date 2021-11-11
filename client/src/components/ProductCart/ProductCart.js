import React from "react";
import { useHistory } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

import UserProfile from "../../assets/Images/user.png";
import Item from "./Item";
import { magiamgia, popupToBuy } from "../../popup";
import axios from "axios";
import orderStore from "../../store/orderStore";
import { checkLengthOrderHeader, checkTotalPriceToOrder } from "../../Helper";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "VND",
});

const ProductCart = () => {
  const history = useHistory();
  const { clearAllProducts, products } = orderStore();

  return (
    <>
      <div>
        {/* Cart banner with search */}
        <div className="cart-banner-container hide-on-mobile-tablet">
          <div className="grid wide">
            <div className="cart-banner">
              <a href="###" className="cart-banner__logo">
                <img alt="" src={UserProfile} className="cart-banner__logo-img minilittle" />
                <div className="cart-banner__logo-title">Giỏ Hàng</div>
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
          <div className="cart-suggestion">
            <i className="fas fa-truck-loading" />
            <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
          </div>
          {/* Cart product header */}
          <div className="cart-page-product-header hide-on-mobile-tablet littleleft">
            <span className="cart-page-product-header__product littleleft">
              <i className="fas fa-cart-arrow-down" />
              Sản Phẩm
            </span>
            <span className="cart-page-product-header__unit-price">Đơn Giá</span>
            <span className="cart-page-product-header__qnt">Số Lượng</span>
            <span className="cart-page-product-header__total-price">Số Tiền</span>
            <span className="cart-page-product-header__action">Thao Tác</span>
          </div>
          {/* Cart shop content*/}
          <div className="cart-page-shop-container">
            <div className="cart-page-shop__header">
              <div className="shop-checkbox shop-checkbox-sup">
                <input className="shop-checkbox__input" type="checkbox" />
                <div className="shop-checkbox__bgc" />
              </div>
              <div className="label-loving">Yêu Thích</div>
              <span className="cart-page-shop__header-name">toykids</span>
              <button className="cart-page-shop__header-btn-chat">
                <i className="cart-page-shop__header-icon fas fa-comment-alt" />
              </button>
            </div>
            <div className="cart-page-shop__container-items">
              <div className="cart-bundle">
                <div className="cart-bundle__header hide-on-mobile">
                  <div className="cart-bundle-header__logo-wrapper">
                    <i className="far fa-thumbs-up" />
                    <div className="cart-bundle-header__logo">Combo khuyến mãi ###</div>
                  </div>
                  <span className="cart-bundle-header__hint">Mua thêm 1 sản phẩm</span>
                  <span className="cart-bundle-header__saving">(để giảm 5%)</span>
                  <a href="#" className="cart-bundle-header__more">
                    Thêm
                    <i className="cart-bundle-header__more-icon fas fa-chevron-right" />
                  </a>
                </div>
                <div className="cart-item-container">
                  {/* Cart Item List */}
                  {products?.map((x) => (
                    <Item item={x} />
                  ))}
                  {/* End Cart Item List */}
                </div>
                <div className="cart-item-container-mobile"></div>
              </div>
            </div>
            <div className="cart-voucher hide-on-mobile">
              <i className="cart-voucher__icon fas fa-archive" />
              <div className="cart-voucher__message">Lưu voucher giảm ₫8k</div>
              <button onClick={magiamgia} className="cart-voucher__btn-save">
                Lưu
              </button>
            </div>
            <div className="cart-shipping">
              <i className="cart-shipping__icon fas fa-shipping-fast" />
              <div className="cart-shipping__message">
                Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa ₫20.000); Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm tối đa ₫70.000)
              </div>
              <div className="cart-shipping__learn-more hide-on-mobile-tablet">Tìm hiểu thêm</div>
            </div>
          </div>
          {/* Cart page footer */}
          <div className="cart-page-footer">
            <div className="cart-page-footer__row1">
              <div className="cart-page-footer__voucher">
                <i className="cart-page-footer__voucher-icon fas fa-box-tissue" />
                <div className="cart-page-footer__voucher-name">Shop Voucher</div>
              </div>
              <div className="cart-page-footer__option"> Chọn hoặc nhập mã (Bạn chưa có mã nào)</div>
            </div>
            <div className="cart-page-footer__row2">
              <div className="cart-page-footer__checkbox hide-on-mobile">
                <div className="shop-checkbox shop-checkbox--disabled">
                  <input className="shop-checkbox__input" type="checkbox" />
                  <div className="shop-checkbox__bgc" />
                </div>
              </div>
              <div className="cart-page-footer__title disabled">
                <i className="cart-page-footer__title-icon-label blur-item fas fa-donate" />
                <div className="cart-page-footer__title-name blur-item hide-on-mobile">0 Xu</div>
                <div className="cart-page-footer__title-message">Bạn chưa có Xu, hãy mua thêm hàng</div>
                <i className="cart-page-footer__title-icon-question far fa-question-circle" />
              </div>
              <div className="cart-page-footer__value hide-on-mobile">-₫0</div>
            </div>
            <div className="cart-page-footer__row3">
              <div className="cart-page-footer__actions">
                <button className="cart-page-footer__actions-btn cart-page-footer__select-all clear-btn">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tất cả&nbsp;
                  <span className="hide-on-mobile-tablet">
                    (<span className="qnt">{checkLengthOrderHeader(products)}</span>)
                  </span>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={clearAllProducts} variant="outlined" color="primary" href="#outlined-buttons">
                  Xóa tất cả
                </Button>
              </div>
              <div className="cart-page-footer__summary">
                <div className="cart-page-footer__summary-total">
                  <div className="cart-page-footer__summary-total-text">
                    Tổng tiền
                    <span className="hide-on-mobile-tablet">
                      &nbsp; (<span className="qnt">{checkLengthOrderHeader(products)}</span> sản phẩm):
                    </span>
                  </div>
                  <div className="cart-page-footer__summary-total-amount">&nbsp;&nbsp;{formatter.format(checkTotalPriceToOrder(products))}</div>
                </div>
                <div className="cart-page-footer__summary-bonus">Nhận {parseInt(checkTotalPriceToOrder(products) / 100)} Xu</div>
              </div>
              <button onClick={() => history.push("/checkout")} className="cart-page-footer__checkout clear-btn">
                Mua hàng
              </button>
            </div>
          </div>
          {/* Confirm deletion */}
          <div className="confirm-deletion-container">
            <div className="confirm-deletion-overlay" />
            <div className="confirm-deletion">
              <div className="confirm-deletion__message">
                Bạn có muốn xóa <span className="qnt">0</span> sản phẩm?
              </div>
              <div className="confirm-deletion__btn-wrapper">
                <button className="confirm-deletion__btn confirm-deletion__btn--back clear-btn">Trở lại</button>
                <button className="confirm-deletion__btn confirm-deletion__btn--agree clear-btn">Có</button>
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

export default ProductCart;
