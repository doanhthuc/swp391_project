import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { countingStar, formatVND } from "../../Helper";
import GetListProductByPage from "../../hook/ListProductMain";
import { searchByName } from "../../utilities";

const ListProduct = () => {
  const history = useHistory();
  const { tieude } = useParams();
  const { data: info, loading } = GetListProductByPage();
  let data = [1, 2, 3];

  const goToDetail = (idxx) => {
    history.push(`/product/${idxx}`);
  };

  if (loading) return <>Loading...</>;
  else {
    data = searchByName(info.products.products, tieude);
  }

  return (
    <>
      <div className="home-product">
        <div className="row sm-gutter">
          {data?.map((x) => (
            <div onClick={() => goToDetail(x.id)} style={{ cursor: "pointer" }} className="col l-2-4 m-4 c-6 littlewidth">
              <div href="product-info.html" id={0} className="home-product-item">
                <img alt="" src={x.productImages[0].imagePath} className="home-product-item__img" />
                <div className="home-product-item__name">{x.name}</div>
                <div className="home-product-item__price">
                  <span className="home-product-item__price-old"> {formatVND(x.oldPrice)} </span>
                  <span className="home-product-item__price-current"> đ{formatVND(x.price)} </span>
                </div>
                <div className="home-product-item__action">
                  <div className="home-product-item__rating">
                    {countingStar(x.star)}
                    <i className="fas fa-star" />
                  </div>
                  <span className="home-product-item__sold"> {x.sold} đã bán </span>
                </div>
                <div className="product-favourite">
                  <i className="fas fa-check" />
                  <span> Yêu thích </span>
                </div>
                <div className="product-sale-off">
                  <span className="product-sale-off__percent"> {Math.round(x.discount * 100)}% </span>
                  <span className="product-sale-off__label"> GIẢM </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
