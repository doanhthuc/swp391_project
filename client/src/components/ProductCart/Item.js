import React from "react";
import Fab from "@material-ui/core/Fab";
import orderStore from "../../store/orderStore";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "VND",
});

const Item = ({ item: x }) => {
  console.log(x);
  const { deleteProduct } = orderStore();
  return (
    <>
      <div className="cart-item">
        <div className="cart-item__overview">
          <a href="###" className="cart-item__overview-img-link">
            <img alt="" className="cart-item__overview-img" src={x.picture} />
          </a>
          <a href="###" className="cart-item__overview-name littlebot">
            {x.productName}
          </a>
        </div>
        <div className="cart-item__variations">
          <div className="cart-item__variation-label">
            Phân loại hàng:
            <button className="cart-item__variation-btn-arrow">
              <i className="cart-item__variation-icon-arrow-down fas fa-sort-down" />
            </button>
          </div>
          <div className="cart-item__variation-model">{x.category}</div>
        </div>
        <div className="cart-item__price">
          <div className="cart-item__price-old">{formatter.format(x.oldPrice)}</div>
          <div className="cart-item__price-current">{formatter.format(x.price)}</div>
        </div>

        <Fab className="soluong" aria-label="heheboi">
          {x.quantity}
        </Fab>

        <div className="cart-item__price-total">{formatter.format(x.price)}</div>
        <div className="cart-item__actions">
          <button onClick={() => deleteProduct(x.productId)} className="cart-item__action-remove">
            Xóa
          </button>
          <button className="cart-item__action-search">
            <span className="cart-item__action-search-title">Tìm sản phẩm tương tự</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
