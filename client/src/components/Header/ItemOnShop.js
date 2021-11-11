import React from "react";
import orderStore from "../../store/orderStore";
import { formatVND } from "../../Helper";

const ItemOnShop = () => {
  const { products } = orderStore();
  console.log(products);

  return (
    <>
      {products.map((x) => {
        return (
          <li key={x.id} title="Mũ chụp ngược Minecraft Dungeons" className="header__cart-item">
            <div className="header__cart-img-wrapper">
              <img alt="" src={x.picture} className="header__cart-img" />
            </div>
            <div className="header__cart-item-info">
              <div className="header__cart-item-head">
                <div className="header__cart-item-name">{x.productName}</div>
                <div className="header__cart-item-price-wrap">
                  <span className="header__cart-item-price">{formatVND(x.price)}</span>
                  <span className="header__cart-item-multiply">x</span>
                  <span className="header__cart-item-qnt">{x.quantity}</span>
                </div>
              </div>
              <div className="header__cart-item-body">
                <span className="header__cart-item-description">Phân loại: {x.category}</span>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ItemOnShop;
