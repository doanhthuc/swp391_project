import React from "react";

const ProductSuggest = () => {
  return (
    <>
      <div id="c-c-i-1" className="products-combo__card">
        <a href="/" className="products-combo__card-link">
          <div className="products-combo__card-img-wrapper">
            <img
              alt=""
              className="products-combo__card-img"
              src="https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCJM-CHCKN-100011-MF_1800x1800.png?v=1614028694"
            />
          </div>
          <span className="products-combo__card-name">Áo thun tay ngắn cho người lớn </span>
        </a>
        <div className="products-combo__card-wrapper">
          <div className="products-combo__card-price">
            <span className="products-combo__card-price-old hide-on-mobile">₫780.000</span>
            <span className="products-combo__card-price-new">₫230.000</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div id="c-c-i-1" className="products-combo__card">
        <a href="/" className="products-combo__card-link">
          <div className="products-combo__card-img-wrapper">
            <img
              alt=""
              className="products-combo__card-img"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <span className="products-combo__card-name">Áo sơ mi cho người trưởng thành</span>
        </a>
        <div className="products-combo__card-wrapper">
          <div className="products-combo__card-price">
            <span className="products-combo__card-price-old hide-on-mobile">₫999.000</span>
            <span className="products-combo__card-price-new">₫850.000</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div id="c-c-i-1" className="products-combo__card">
        <a href="/" className="products-combo__card-link">
          <div className="products-combo__card-img-wrapper">
            <img alt="" className="products-combo__card-img" src="https://jysk.vn/Data/Sites/1/media/1-san-pham/17-tu-quan-ao/tu-quan-ao.jpg" />
          </div>
          <span className="products-combo__card-name">Tủ gỗ dành cho dân chơi, số lượng có hạn</span>
        </a>
        <div className="products-combo__card-wrapper">
          <div className="products-combo__card-price">
            <span className="products-combo__card-price-new hide-on-mobile">₫4.250.000</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div id="c-c-i-1" className="products-combo__card">
        <a href="/" className="products-combo__card-link">
          <div className="products-combo__card-img-wrapper">
            <img
              alt=""
              className="products-combo__card-img"
              src="https://www.inabata.vn/wp/wp-content/uploads/2021/03/Coca-cola-co-chuyen-tu-su-dung-chai-nhua-sang-cac-loai-vat-lieu-tai-che.jpg"
            />
          </div>
          <span className="products-combo__card-name">Coca-cola, sức hấp dẫn không thể chối từ</span>
        </a>
        <div className="products-combo__card-wrapper">
          <div className="products-combo__card-price">
            <span className="products-combo__card-price-old hide-on-mobile">₫15.000</span>
            <span className="products-combo__card-price-new">₫10.000</span>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default ProductSuggest;
