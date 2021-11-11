import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { Button, Chip } from "@material-ui/core";

import AStore from "../../assets/Images/app_store1.png";
import PStore from "../../assets/Images/google_play.png";
import FooterLogo from "../../assets/Images/pickaxe.png";
import ItemOnShop from "./ItemOnShop";
import userStore from "../../store/userStore";
import orderStore from "../../store/orderStore";
import { checkLengthOrderHeader } from "../../Helper";
import searchStore from "../../store/searchStore";

export const Header = () => {
  const history = useHistory();

  const { user, removeUser } = userStore();
  const { products } = orderStore();
  const { listOfSearch, addSearch } = searchStore();

  const [search, setSearch] = useState("");
  const [auth, setAuth] = useState(false);
  const [focused, setFocused] = useState(false);

  const goToSearchDetail = () => {
    if (search != "") {
      addSearch(search);
    }
    history.push(`/search/${search}`);
    setSearch("");
  };

  const goToSearchSaved = (val) => {
    history.push(`/search/${val}`);
    setSearch(val);
    setFocused(false);
  };

  useEffect(() => {
    if (user.username !== "Guest") {
      setAuth(true);
      localStorage.setItem("token", user.token);
    } else {
      setAuth(false);
    }
  }, [user]);

  const logout = () => {
    setAuth(false);
    localStorage.removeItem("token");
    removeUser();
  };

  return (
    <>
      <header className="header">
        <div className="grid wide">
          <nav className="header__navbar hide-on-mobile-tablet">
            <ul className="header__navbar-list">
              <div className="header__navbar-item header__navbar-item-separate">Kênh người bán</div>
              <li className="header__navbar-item header__navbar-item-has-qr header__navbar-item-separate">
                Tải ứng dụng
                {/* Header QR code */}
                <div className="header__qr">
                  <img src={FooterLogo} alt="QR code" className="header__qr-img" />
                  <div className="header__qr-apps">
                    <div className="header__qr-link">
                      <img src={PStore} alt="Google Play" className="header__qr-dowload-img" />
                    </div>
                    <div className="header__qr-link">
                      <img src={AStore} alt="App Store" className="header__qr-dowload-img" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item">
                <span className="header__navbar-title--no-pointer">Kết nối</span>
                <a href className="header__navbar-icon-link">
                  <i className="header__navbar-icon fab fa-facebook" />
                  <FacebookIcon className="header__navbar-icon fab fa-facebook" />
                </a>
                <a href className="header__navbar-icon-link">
                  <InstagramIcon className="header__navbar-icon fab fa-instagram" />
                </a>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item--has-notify hejadsadas">
                <a href="###" className="header__navbar-item-link">
                  <NotificationsNoneIcon className="header__navbar-icon far fa-bell" />
                  Thông Báo
                </a>
                <div className="header__notify">
                  <header className="header__notify-header">Thông báo mới nhận</header>
                  <ul className="header__notify-list">
                    <li className="header__notify-item header__notify-item--viewed">
                      <a href className="header__notify-link">
                        <img src="https://cdn.europosters.eu/image/750webp/84830.webp" alt="" className="header__notify-img" />
                        <div className="header__notify-info">
                          <span className="header__notify-name">Áo thun China chính hãng</span>
                          <span className="header__notify-description">Đặt hàng nhanh tay, nhận ngay quà khủng</span>
                        </div>
                      </a>
                    </li>
                    <footer className="header__notify-footer">
                      <a href className="header__notify-footer-btn">
                        Xem tất cả
                      </a>
                    </footer>
                  </ul>
                </div>
              </li>
              <li className="header__navbar-item hejadsadas">
                <a href="###" className="header__navbar-item-link">
                  <HelpOutlineIcon className="header__navbar-icon far fa-question-circle" />
                  Trợ Giúp
                </a>
              </li>
              {auth ? (
                <>
                  <div onClick={() => history.push("/checkout")}>
                    &nbsp;
                    <Chip style={{ backgroundColor: "#fc7703", color: "black" }} label="Mua Ngay" clickable color="primary" />
                    &nbsp; &nbsp;
                  </div>
                  <div onClick={() => history.push("history")}>
                    <Chip
                      avatar={<Avatar src={user.picture} />}
                      label={user.username}
                      clickable
                      style={{ backgroundColor: "#fc7703", color: "black" }}
                    />
                  </div>
                  &nbsp;
                </>
              ) : (
                <li
                  id="register-item"
                  className="header__navbar-item header__navbar-item-separate hejadsadas"
                  onClick={() => history.push("/register")}
                >
                  Đăng Ký
                </li>
              )}

              {auth ? (
                <Button className="hehxava" onClick={logout}>
                  <span>Đăng xuất</span>
                </Button>
              ) : (
                <li id="login-item" className="header__navbar-item hejadsadas" onClick={() => history.push("/login")}>
                  Đăng Nhập
                </li>
              )}
            </ul>
          </nav>
          <input type="checkbox" hidden className="nav__input" id="nav-mobile-input" />
          {/* Nav on mobile */}
          <div className="nav__mobile">
            <ul className="nav__mobile-list">
              <div className="category__heading">Danh mục</div>
              <ul className="category-list">
                <li className="category-item category-item--active">
                  <a href className="category-item__link">
                    Đồ bán chạy hôm nay
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Bình giữ nhiệt
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Bộ lắp ghép Minecraft
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Hộp bút chì Creeper
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Túi khăn tắm 3 hộp
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Balo Creeper
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Móc khóa Diamond Word
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Bộ lắp ghép Bàn chế tạo
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Hộp thẻ bài 4 người
                  </a>
                </li>
                <li className="category-item">
                  <a href className="category-item__link">
                    Cốc lạc đà Llama
                  </a>
                </li>
              </ul>
            </ul>
            <label htmlFor="nav-mobile-input" className="nav__mobile-close">
              <i className="nav__mobile-close--icon fas fa-times" />
            </label>
          </div>
          <label htmlFor="nav-mobile-input" className="nav__overlay" />
          {/* Header-with-search */}
          <div className="header-with-search">
            <label htmlFor="nav-mobile-input" className="mobile__menu-btn">
              <i className="mobile__menu-icon fas fa-ellipsis-v" />
            </label>
            <input type="checkbox" hidden className="header__search-checkbox" id="mobile-search-checkbox" />
            <div className="header__logo hide-on-mobile-tablet">
              <div onClick={() => history.push("/")} style={{ cursor: "pointer" }} className="header__logo-link alittle22">
                <img alt="" src={FooterLogo} className="header__logo-img" />
              </div>
            </div>
            <div className="header__search">
              <div className="header__search-input-wrap">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="header__search-input"
                  placeholder="Nhập để tìm kiếm"
                  onFocus={(e) => setFocused(true)}
                  onBlur={(e) => setFocused(false)}
                />
                <i className="header__search-camera fas fa-camera " />
                {/* Search history */}
                <div className={focused ? "header__search-history-focus" : "header__search-history-notfocus"}>
                  <div className="header__search-history-heading">Lịch sử tìm kiếm</div>
                  <ul className="header__search-history-list">
                    {listOfSearch?.map((sss) => (
                      <li key={sss.id} className="header__search-history-item">
                        <a onClick={() => goToSearchSaved(sss)} href="##">
                          {sss}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button onClick={goToSearchDetail} className="header__search-btn hide-on-mobile-tablet">
                <SearchIcon className="header__search-btn-icon fas fa-search" />
              </button>
            </div>
            <button className="header__search-fillter-wrapper clear-btn">
              <i className="header__search-fillter-icon fas fa-filter" />
              <span className="header__search-fillter-text">Lọc</span>
            </button>
            {/* Cart layout */}
            <div className="header__cart hide-on-mobile-tablet">
              <div onClick={() => history.push("/shoping/cart")} className="header__cart-wrap">
                <ShoppingCartIcon className="header__cart-icon fas fa-shopping-cart" />
                <span className="header__cart-wrap-notice">{checkLengthOrderHeader(products)}</span>
                {/* No cart: Header__cart-list--no-cart */}
                <div className="header__cart-list">
                  <img alt="" src="Images/sellout.png" className="header__cart-no-card-img" />
                  <span className="header__cart-list-no-card-msg">Chưa có sản phẩm</span>
                  <div className="header__cart-heading">Sản phẩm đã thêm</div>
                  <ul className="header__cart-list-item">
                    {/*  */}
                    <ItemOnShop item={"x"} />
                    {/*  */}
                  </ul>
                  <button className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
