import { useHistory } from "react-router-dom";
import { countingStar, formatVND } from "../../Helper";

const ListProduct = ({ data }) => {
  const history = useHistory();
  return (
    <>
      {data?.map((x) => (
        <div onClick={() => history.push(`/product/${x.id}`)} key={x.id} style={{ cursor: "pointer" }} className="col l-2-4 m-4 c-6">
          <div href="product-info.html" id={0} className="home-product-item">
            <img alt="" src={x?.productImages[0]?.imagePath} className="home-product-item__img" />
            <div className="home-product-item__name">{x.name}</div>
            <div className="home-product-item__price">
              <span className="home-product-item__price-old"> {formatVND(x.oldPrice)} </span>
              <span className="home-product-item__price-current"> {formatVND(x.price)} </span>
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
    </>
  );
};

export default ListProduct;
