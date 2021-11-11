import moment from "moment";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "VND",
});

const Item = ({ item, orderDate }) => {
  console.log(item, orderDate);

  return (
    <>
      <br />
      <div className="cart-item">
        <div className="cart-item__overview">
          <a href="###" className="cart-item__overview-img-link">
            <img alt="" className="cart-item__overview-img" src={item.product?.productImages[0].imagePath} />
          </a>
          <a href="###" className="cart-item__overview-name littlebot">
            {item.product.name}
          </a>
        </div>
        <div className="cart-item__variations">
          <div className="cart-item__variation-label">
            Phân loại hàng:
            <button className="cart-item__variation-btn-arrow">
              <i className="cart-item__variation-icon-arrow-down fas fa-sort-down" />
            </button>
          </div>
          <div className="cart-item__variation-model">{item.product?.category.name}</div>
        </div>
        <div className="cart-item__price">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="cart-item__price-current">{formatter.format(item.price)}</div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="shop__qnt-btns">
          <div className="shop__qnt-input shopchuahe">{item.quantity}</div>
        </div>
        <div className="cart-item__price-total funnyboiandfunnygirl">{formatter.format(item.price * item.quantity)}</div>
        <div className="cart-item__actions">
          <p>{moment(orderDate).format()}</p>
        </div>
      </div>
      <br />
    </>
  );
};

export default Item;
