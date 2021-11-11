import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { addSuccess } from "../../popup";
import { countingStar, formatVND } from "../../Helper";

import FacebookIcon from "@material-ui/icons/Facebook";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Button } from "@material-ui/core";
import orderStore from "../../store/orderStore";

const ProductMain = ({ sp: x }) => {
  const history = useHistory();
  const { addProduct } = orderStore();
  const [quantityBuy, setQuantityBuy] = useState(1);

  const addToCart = () => {
    const pro = {
      quantity: quantityBuy,
      oldPrice: x.oldPrice,
      price: x.price,
      productId: x.id,
      productName: x.name,
      category: x.category.name,
      picture: x.productImages[0].imagePath,
    };
    addProduct(pro);
  };

  const addToCartAndNavigate = () => {
    addToCart();
    history.push("/shoping/cart");
  };

  return (
    <>
      <div className="grid wide">
        {/* Product slide & content */}
        <div className="row sm-gutter product">
          <div className="col l-5 c-12">
            <div className="product-slide">
              <img alt="" src={x.productImages[0].imagePath} className="product__img" />
              <div className="product__cards product__cards-mobile">
                <button className="product__cards-btn product__cards-btn--prev">
                  <i className="fas fa-chevron-left" />
                </button>
                <button className="product__cards-btn product__cards-btn--next">
                  <i className="fas fa-chevron-right" />
                </button>
                <div className="product__cards-container">
                  <div className="product__card-wrapper">
                    <div className="product__card">
                      <img alt="" src={x.productImages[0].imagePath} className="product__card-img" />
                    </div>
                  </div>
                  <div className="product__card-wrapper">
                    <div className="product__card">
                      <img alt="" src={x.productImages[0].imagePath} className="product__card-img" />
                    </div>
                  </div>
                  <div className="product__card-wrapper">
                    <div className="product__card">
                      <img alt="" src={x.productImages[0].imagePath} className="product__card-img" />
                    </div>
                  </div>
                  <div className="product__card-wrapper">
                    <div className="product__card">
                      <img alt="" src={x.productImages[0].imagePath} className="product__card-img" />
                    </div>
                  </div>
                  <div className="product__card-wrapper">
                    <div className="product__card">
                      <img alt="" src={x.productImages[0].imagePath} className="product__card-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__actions hide-on-mobile-tablet">
                <div className="product__sharing-icons hide-on-mobile-tablet">
                  <div className="text">Chia sẻ với bạn bè</div>
                  <a href="#" className="product__action-icon messenger">
                    <FacebookIcon className="fab fa-facebook-messenger" />
                  </a>
                  <a href="#" className="product__action-icon facebook">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="product__action-icon google">
                    <i className="fab fa-google-plus" />
                  </a>
                  <a href="#" className="product__action-icon pinterest">
                    <i className="fab fa-pinterest" />
                  </a>
                  <a href="#" className="product__action-icon twitter">
                    <i className="fab fa-twitter-square" />
                  </a>
                </div>
                <div className="product__liking">
                  <i className="product__action-icon product__action-icon--liking far fa-heart" />
                  <div className="text">Đã thích ({Math.floor(Math.random() * 1000)})</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-7 c-12">
            <div className="product-content">
              <div className="product__title">
                <div className="label-loving">Yêu Thích</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{x.name}</span>
              </div>
              <div className="product__status">
                <div className="product__status-rating">
                  <div className="product__status-rating-point underscore">{x.star}</div>
                  <div className="product__status-rating-stars">{countingStar(x.star)}</div>
                </div>
                <div className="product__status-reviewing hide-on-mobile">
                  <span className="product__status-reviewing-qnt underscore">{Math.floor(Math.random() * 100)}</span>
                  <span className="product__status-text pr-text">Đánh Giá</span>
                </div>
                <div className="product__status-sold">
                  <span className="product__status-sold-qnt">{x.sold} </span>
                  <span className="product__status-text pr-text">Đã Bán</span>
                </div>
                <div className="product__liking">
                  <i className="product__action-icon product__action-icon--liking far fa-heart" />
                  <div className="text hide-on-mobile">Đã thích ({Math.floor(Math.random() * 3000)})</div>
                </div>
              </div>
              <div className="product__price">
                <div className="product__price-main">
                  <span className="product__price-old">{formatVND(x.oldPrice)}</span>
                  <div className="product__price-current">
                    <span className="product__price-new">{formatVND(x.price)}</span>
                    <span className="product__price-label bgr-orange"> {Math.round(x.discount * 100)}% GIẢM</span>
                  </div>
                </div>
                <div className="product__price-slogan hide-on-mobile-tablet">
                  <i className="product__price-icon-tag fas fa-tags" />
                  <span className="product__price-slogan-text">Ở đâu rẻ hơn, cho luôn không bán ! ! !</span>
                  <i className="product__price-icon-question far fa-question-circle" />
                </div>
              </div>
              <div className="product__info">
                <div className="product__codes hide-on-mobile-tablet moreLeft">
                  <label className="product__codes-label width-label">Mã Giảm Giá Của Shop</label>
                  <div className="product__codes-wrapper">
                    <div className="product__code">Giảm ₫3k</div>
                    <div className="product__code">Giảm ₫5k</div>
                    <div className="product__code">Giảm ₫8k</div>
                  </div>
                </div>
                <div className="product__combo hide-on-mobile-tablet">
                  <label className="product__combo-label width-label">Combo Khuyến Mãi</label>
                  <div className="product__combo-note">Mua 2 &amp; giảm 5%</div>
                </div>
                <div className="product__shipping">
                  <label className="product__shipping-label width-label">Vận Chuyển</label>
                  <div className="product__shipping-wrapper">
                    <div className="product__shipping-free">
                      <div className="product__shipping-free-icon-wrapper">
                        <i className="product__shipping-free-icon fas fa-truck-loading" />
                      </div>
                      <div className="product__shipping-free-wrapper">
                        <div className="product__shipping-free-title">Miễn Phí Vận Chuyển</div>
                        <div className="product__shipping-free-note">Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu</div>
                      </div>
                    </div>
                    <div className="product__shipping-to">
                      <i className="product__shipping-to-icon-truck fas fa-truck" />
                      <div className="product__shipping-to-wrapper">
                        <div className="product__shipping-to-destination">
                          <label className="product__shipping-to-label">Vận Chuyển Tới</label>
                          <div className="product__shipping-to-cities">
                            <span className="product__shipping-to-city">Huyện Ba Vì, Hà Nội</span>
                            <i className="product__shipping-to-icon fas fa-chevron-down" />
                          </div>
                        </div>
                        <div className="product__shipping-to-fee">
                          <label className="product__shipping-to-label">Phí Vận Chuyển</label>
                          <div className="product__shipping-to-fee-wrapper">
                            <div className="product__shipping-to-fees">₫10.500</div>
                            <i className="product__shipping-to-icon fas fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__options">
                  <label className="product__options-label width-label">Chọn loại hàng</label>
                  <Button size="small" color="primary" variant="outlined">
                    Một mẫu duy nhất, không đẹp hoàn tiền !!!
                  </Button>
                  <div className="product__options-items-wrapper">
                    <div className="product__options-items"></div>
                    <div className="product__options-items-error-message">Vui lòng chọn Phân loại hàng</div>
                  </div>
                </div>
                <div className="product__qnt hide-on-mobile">
                  <label className="product__qnt-label width-label">Số Lượng</label>
                  <div className="shop__qnt-btns">
                    <button onClick={() => setQuantityBuy(quantityBuy - 1)} className="shop__qnt-btn shop__qnt-btn--dec">
                      -
                    </button>
                    <input onChange={(e) => setQuantityBuy(parseInt(e.target.value))} className="shop__qnt-input" type="text" value={quantityBuy} />
                    <button onClick={() => setQuantityBuy(quantityBuy + 1)} className="shop__qnt-btn shop__qnt-btn--inc">
                      +
                    </button>
                  </div>
                  <div className="product__qnt-note">
                    <span className="product__qnt-note-num">{x.stock} </span>
                    sản phẩm có sẵn
                  </div>
                </div>
                <div className="product-btns-main">
                  <button className="product-btn-main product-btn-main__msg clear-btn hide-on-tablet">
                    <QuestionAnswerIcon className="product-btn-main__msg-icon far fa-comment-dots" />
                  </button>
                  <button onClick={addToCart} className="product-btn-main product-btn-main__adding">
                    <span className="product-btn-main__text product-btn-main__adding-text hide-on-mobile">Thêm Vào Giỏ Hàng</span>
                  </button>
                  <button onClick={addToCartAndNavigate} className="product-btn-main product-btn-main__buying">
                    Mua Ngay
                  </button>
                </div>
              </div>
              <div className="product__guarantee-container">
                <a href="*" className="product__guarantee">
                  <div className="product__guarantee-wrapper">
                    <span>
                      <i className="product__guarantee-icon fas fa-clipboard-check" />
                    </span>
                    <div className="product__guarantee-text">Cam kết chính hãng</div>
                  </div>
                  <span className="product__guarantee-note">3 Ngày Trả Hàng / Hoàn Tiền</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMain;
