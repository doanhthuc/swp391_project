import { list } from "../../Data/Data.js";
import ProductSuggest from "./ProductSuggest";
import ProductDetail from "./ProductDetail";
import ProductMain from "./ProductMain";
import ProductShop from "./ProductShop.js";
import Comment from "./Comment.js";
import { commentCountdown, magiamgia, muakhuyenmai } from "../../popup";
import { countingStar, checkNameDemo } from "../../Helper.js";

import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import axios from "axios";
import GetProductById from "../../hook/GetProductById.js";
import AddComment from "./AddComment.js";

const Main = () => {
  const history = useHistory();

  const { data, loading } = GetProductById(useParams().id);

  const sp = list[Math.floor(Math.random() * 35)];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [cmt, setCmt] = useState();

  if (loading) return <>Loading...</>;

  return (
    <>
      <div id="product-info-container">
        <ProductMain sp={data.product} />
        <div className="grid wide">
          {/* Product combo cards */}
          <div className="products-combo">
            <div className="products-combo-header">
              <div className="products-combo__title">
                <span className="products-combo__text">Combo khuyến mãi</span>
                <div className="products-combo__note">Mua 2 &amp; giảm 5%</div>
              </div>
              <a href="###" className="products-combo__see-more hide-on-mobile">
                <span>Xem thêm</span>
                <i className="fas fa-chevron-right" />
              </a>
            </div>
            <div className="products-combo-container">
              <div className="products-combo__cards">
                <ProductSuggest />
              </div>
              <div className="products-combo__checkout hide-on-mobile">
                <div className="products-combo__checkout-wrapper">
                  <div className="products-combo__checkout-total">
                    <span className="products-combo__checkout-label">Tổng cộng</span>
                    <span className="products-combo__checkout-total-old">₫6.044.000</span>
                    <span className="products-combo__checkout-total-current">₫5.345.000</span>
                  </div>
                  <div className="products-combo__checkout-save">
                    <div className="products-combo__checkout-label">Tiết kiệm</div>
                    <span className="products-combo__checkout-save-price">₫704.000</span>
                  </div>
                </div>
                <button onClick={muakhuyenmai} className="products-combo__checkout-btn">
                  <i className="fas fa-cart-plus" />
                  <span className="products-combo__checkout-btn-text hide-on-tablet">Bấm để mua khuyến mãi</span>
                  <span className="products-combo__checkout-btn-text products-combo__checkout-btn-tablet">Mua khuyến mãi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid wide">
          {/* Product shop */}
          <ProductShop shop={sp.shop} />
        </div>
        <div className="grid wide">
          <div className="row sm-gutter product-content__side" style={{ paddingBottom: "25px" }}>
            {/* Product left content */}
            <div className="product-content--left">
              {/* Product details */}
              <ProductDetail sp={sp} />
              {/* Product reviews */}
              <div className="product-reviews">
                <div className="product-reviews__header">ĐÁNH GIÁ SẢN PHẨM</div>
                {/* Stars on mobile */}
                <div className="product-reviews__rating-mobile">
                  <div className="product-reviews__rating-stars product-reviews__rating-stars-mobile">{countingStar(sp.sao)}</div>
                  <div className="product-reviews__rating-score-wrapper">
                    <span className="product-reviews__rating-score">{data.product.star}</span>
                    <span className="product-reviews__rating-score-out-of">/5</span>
                  </div>
                  <div className="product-reviews__total">(44 đánh giá)</div>
                </div>
                <div className="product-reviews__container hide-on-mobile">
                  <div className="product-reviews__rating">
                    <div className="product-reviews__rating-score-wrapper">
                      <span className="product-reviews__rating-score">{data.product.star}</span>
                      <span className="product-reviews__rating-score-out-of"> trên 5 </span>
                    </div>
                    <div className="product-reviews__rating-stars">
                      <i className="product-reviews__rating-star fas fa-star" />
                      <i className="product-reviews__rating-star fas fa-star" />
                      <i className="product-reviews__rating-star fas fa-star" />
                      <i className="product-reviews__rating-star fas fa-star" />
                      <i className="product-reviews__rating-star fas fa-star" />
                    </div>
                  </div>
                  <div className="product-reviews__filters">
                    <div className="product-reviews__filter product-reviews__filter--active">tất cả</div>
                    <div className="product-reviews__filter">5 Sao ({Math.floor(Math.random() * (99 - 70)) + 70})</div>
                    <div className="product-reviews__filter">4 Sao ({Math.floor(Math.random() * 10)})</div>
                    <div className="product-reviews__filter">3 Sao ({Math.floor(Math.random() * 10)})</div>
                    <div className="product-reviews__filter">2 Sao (0)</div>
                    <div className="product-reviews__filter">1 Sao (0)</div>
                    <div className="product-reviews__filter product-reviews__filter--comment">Có Bình luận ({Math.floor(Math.random() * 30)})</div>
                    <div className="product-reviews__filter product-reviews__filter--photo">
                      Có hình ảnh / video ({Math.floor(Math.random() * 30)})
                    </div>
                  </div>
                </div>
                <div className="product-reviews__comments">
                  {/* Start Comment */}
                  <Comment />
                  {/* End Comment */}
                  <AddComment />
                </div>
              </div>
            </div>
            <div className="product-content--right hide-on-mobile-tablet">
              {/* Product vouchers */}
              <div className="product-vouchers hide-on-mobile">
                <div className="product-vouchers__header">Mã giảm giá của Shop</div>
                <div className="product-vouchers__list">
                  <div className="product-vouchers__item">
                    <div className="product-vouchers__item-wrapper">
                      <div className="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                      <div className="product-vouchers__item-expiry">HSD:31-03-2021</div>
                    </div>
                    <div className="product-vouchers__btn-wrapper">
                      <button onClick={magiamgia} className="product-vouchers__btn-save">
                        Lưu
                      </button>
                      <div className="product-vouchers__border-dashed" />
                    </div>
                    <div className="product-vouchers__border-circle">
                      <div className="product-vouchers__border-circle-edge" />
                    </div>
                  </div>
                  <div className="product-vouchers__item">
                    <div className="product-vouchers__item-wrapper">
                      <div className="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                      <div className="product-vouchers__item-expiry">HSD:31-03-2021</div>
                    </div>
                    <div className="product-vouchers__btn-wrapper">
                      <button onClick={magiamgia} className="product-vouchers__btn-save">
                        Lưu
                      </button>
                      <div className="product-vouchers__border-dashed" />
                    </div>
                    <div className="product-vouchers__border-circle">
                      <div className="product-vouchers__border-circle-edge" />
                    </div>
                  </div>
                  <div className="product-vouchers__item">
                    <div className="product-vouchers__item-wrapper">
                      <div className="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                      <div className="product-vouchers__item-expiry">HSD:31-03-2021</div>
                    </div>
                    <div className="product-vouchers__btn-wrapper">
                      <button onClick={magiamgia} className="product-vouchers__btn-save">
                        Lưu
                      </button>
                      <div className="product-vouchers__border-dashed" />
                    </div>
                    <div className="product-vouchers__border-circle">
                      <div className="product-vouchers__border-circle-edge" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Product hot sales */}
              <div className="product-hot-sales hide-on-mobile-tablet">
                <div className="product-hot-sales__header">Top Sản Phẩm Bán Chạy</div>
                <a href="#hs" className="product-hot-sales__link">
                  <div>
                    <img
                      alt=""
                      className="product-hot-sales__item-img"
                      src="https://banner2.cleanpng.com/20180301/yow/kisspng-flag-chinese-flag-5a988b7d699489.7328392415199466214325.jpg"
                    />
                  </div>
                  <div className="product-hot-sales__item-wrapper">
                    <div className="product-hot-sales__item-name">Cờ của cường quốc mạnh nhất thế giới</div>
                    <div className="product-hot-sales__item-price">₫999.000</div>
                  </div>
                </a>
                <a href="#hs" className="product-hot-sales__link">
                  <div>
                    <img
                      alt=""
                      className="product-hot-sales__item-img"
                      src="https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCIC-SM-100016-Grey-MF_1800x1800.png?v=1612792144"
                    />
                  </div>
                  <div className="product-hot-sales__item-wrapper">
                    <div className="product-hot-sales__item-name">Áo thun ngắn dành cho fan Minecraft</div>
                    <div className="product-hot-sales__item-price">₫125.900</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
