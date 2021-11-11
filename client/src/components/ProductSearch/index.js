import React from "react";

import { useHistory } from "react-router-dom";

import { countingStar } from "../../Helper";

const ProductSearch = ({ data }) => {
  const history = useHistory();

  const goToDetail = (tieude) => {
    history.push(`/product/${tieude}`);
  };

  return (
    <>
      {data?.map((x) => (
        <div onClick={() => goToDetail(x.tieude)} style={{ cursor: "pointer" }} className="col l-2-4 m-4 c-6">
          <div href="product-info.html" id={0} className="home-product-item">
            <img alt="" src={x.img} className="home-product-item__img" />
            <div className="home-product-item__name">{x.tieude}</div>
            <div className="home-product-item__price">
              <span className="home-product-item__price-old"> đ{x.gia_goc} </span>
              <span className="home-product-item__price-current"> đ{x.gia_moi} </span>
            </div>
            <div className="home-product-item__action">
              <div className="home-product-item__rating">
                {countingStar(x.sao)}
                <i className="fas fa-star" />
              </div>
              <span className="home-product-item__sold"> {x.daban} đã bán </span>
            </div>
            <div className="product-favourite">
              <i className="fas fa-check" />
              <span> Yêu thích </span>
            </div>
            <div className="product-sale-off">
              <span className="product-sale-off__percent"> {x.discount} </span>
              <span className="product-sale-off__label"> GIẢM </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSearch;
