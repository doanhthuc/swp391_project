import React from "react";

import FooterLogo from "../../assets/Images/pickaxe.png";
import GPlay from "../../assets/Images/google_play.png";
import AStore from "../../assets/Images/app_store.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="grid wide footer__content">
          <div className="row">
            <div className="col l-2-4 m-4 c-6">
              <div className="footer__heading">Chăm sóc khách hàng</div>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Shop của những danh hài
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Hướng dẫn mua hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6">
              <div className="footer__heading">Giới thiệu</div>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Giới thiệu
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Tuyển dụng
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Điều khoản
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6">
              <div className="footer__heading">Danh mục</div>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Đồ chơi
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Xe đua
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    Gấu bông
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6">
              <div className="footer__heading">Theo dõi chúng tôi</div>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href className="footer-item__link">
                    <i className="footer-item__icon fab fa-facebook" />
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    <i className="footer-item__icon fab fa-instagram" />
                    Instagram
                  </a>
                </li>
                <li className="footer-item">
                  <a href className="footer-item__link">
                    <i className="footer-item__icon fab fa-twitter-square" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-8 c-12">
              <div className="footer__heading">Vào cửa hàng trên ứng dụng</div>
              <div className="footer__download">
                <img src={FooterLogo} alt="Download QR" className="footer__download-qr" />
                <div className="footer__download-apps">
                  <a href className="footer__download-app-link">
                    <img src={GPlay} alt="Google play" className="footer__download-app-img" />
                  </a>
                  <a href className="footer__download-app-link">
                    <img src={AStore} alt="App store" className="footer__download-app-img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="grid wide">
            <p className="footer__text">© 2021 - Bản quyền thuộc về hội học sinh FPT vượt khó</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
