import React, { useState } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";

import ListProduct from "../ListProduct/ListProduct";
import GetListProductByPage from "../../hook/ListProductMain";
import { useEffect } from "react";
import { Pagination } from "@material-ui/lab";
import {
  pagination,
  sortByCategory,
  sortByDiscount,
  sortByPriceDown,
  sortByPriceUp,
  sortBySold,
  sortByStar,
  sortByTrangPhuc,
} from "./SortProductFunction";

const IndexContent = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [lstToAction, setLstToAction] = useState();
  const [lstMain, setLstMain] = useState([]);

  const { data: info, loading } = GetListProductByPage();

  const getMainListProduct = () => {
    const lstOfPro = pagination(info.products.products, pageNumber);
    setLstToAction(lstOfPro.lst);
    setLstMain(info.products.products);
  };

  useEffect(() => {
    if (!loading) {
      getMainListProduct();
    }
  }, [info, loading, pageNumber]);

  // Start sort product - top
  const [isActive1, setIsActive1] = useState(true); // 1
  const [isActive2, setIsActive2] = useState(false); // 2
  const [isActive3, setIsActive3] = useState(false); // 3
  const [displaySortPrice, setDisplaySortPrice] = useState("Giá"); // 4 + 5

  const changeTopFilter = (num) => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setDisplaySortPrice("Giá");
    if (num === 1) {
      if (!loading) {
        getMainListProduct();
      }
      setIsActive1(true);
      removeActiveLeft();
    }
    if (num === 2) {
      setIsActive2(true);
      setLstToAction(sortBySold(lstToAction));
    }
    if (num === 3) {
      setIsActive3(true);
      setLstToAction(sortByStar(lstToAction));
    }
    if (num === 4) {
      setIsActive1(true);
      setDisplaySortPrice("Thấp đến cao");
      setLstToAction(sortByPriceDown(lstToAction));
    }
    if (num === 5) {
      setIsActive1(true);
      setDisplaySortPrice("Cao đến thấp");
      setLstToAction(sortByPriceUp(lstToAction));
    }
  };

  // Start sort product - left
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);
  const [isActive9, setIsActive9] = useState(false);

  const removeActiveLeft = () => {
    setIsActive6(false);
    setIsActive7(false);
    setIsActive8(false);
    setIsActive9(false);
  };

  const changeLeftFilter = (num) => {
    removeActiveLeft();
    if (num === 6) {
      setIsActive6(true);
      setLstToAction(sortByDiscount(lstToAction));
    }

    if (num === 7) {
      setIsActive7(true);
      setLstToAction(sortByTrangPhuc(lstMain));
    }
    if (num === 8) {
      setIsActive8(true);
      setLstToAction(sortByCategory(lstMain, "trangsuc"));
    }
    if (num === 9) {
      setIsActive9(true);
      setLstToAction(sortByCategory(lstMain, "phukien"));
    }
  };
  // End sort product

  const ListProductData = () => {
    if (loading) return <>Loading...</>;
    else {
      const lstOfPro = pagination(info.products.products, pageNumber);
      console.log(lstToAction);
      return (
        <>
          <div className="row sm-gutter">
            <ListProduct data={lstToAction} />
          </div>
          {!(isActive7 || isActive8 || isActive9) && (
            <div className="pagii1">
              <Pagination
                page={pageNumber}
                onChange={(e, page) => paginationProduct(e, page, lstToAction)}
                size="large"
                count={lstOfPro.numOfPage}
                color="secondary"
              />
            </div>
          )}
        </>
      );
    }
  };

  const paginationProduct = (e, page, lstOfProduction) => {
    e.preventDefault();
    setPageNumber(page);
  };

  return (
    <>
      <div className="grid wide">
        <div className="row sm-gutter app__content">
          <div className="col l-2 m-0 c-0">
            <div className="category-pc">
              <nav className="category">
                <div className="category__heading-wrapper">
                  <AppsIcon className="category__heading-icon fas fa-th-large" />
                  <div className="category__heading">Danh Mục</div>
                </div>
                <ul className="category-list">
                  {/* --- */}
                  <li onClick={() => changeLeftFilter(6)} className={`listspColorMain`}>
                    <Button className={`listspColor ${isActive6 ? "heheOrange" : ""}`} variant="contained">
                      Sale Hot
                    </Button>
                  </li>
                  {/* --- */}
                  <li onClick={() => changeLeftFilter(7)} className="listspColorMain">
                    <Button className={`listspColor ${isActive7 ? "heheOrange" : ""}`} variant="contained">
                      Trang Phục
                    </Button>
                  </li>
                  {/* --- */}
                  <li onClick={() => changeLeftFilter(8)} className="listspColorMain">
                    <Button className={`listspColor ${isActive8 ? "heheOrange" : ""}`} variant="contained">
                      Làm đẹp
                    </Button>
                  </li>
                  {/* --- */}
                  <li onClick={() => changeLeftFilter(9)} className="listspColorMain">
                    <Button className={`listspColor ${isActive9 ? "heheOrange" : ""}`} variant="contained">
                      Phụ kiện
                    </Button>
                  </li>
                  {/* --- */}
                </ul>
                <ul className="category-list"></ul>
              </nav>
            </div>
          </div>
          <div className="col l-10 m-12 c-12">
            <div className="home-filter hide-on-mobile-tablet">
              <span className="home-filter__label">Sắp xếp theo</span>
              <button className={`home-filter__btn btn ${isActive1 ? "btn--primary" : ""}`}>
                <a href="#pb" onClick={() => changeTopFilter(1)}>
                  Phổ biến
                </a>
              </button>
              <button className={`home-filter__btn btn ${isActive2 ? "btn--primary" : ""}`}>
                <a href="#bc" onClick={() => changeTopFilter(2)}>
                  Bán chạy
                </a>
              </button>
              <button className={`home-filter__btn btn ${isActive3 ? "btn--primary" : ""}`}>
                <a href="#tn" onClick={() => changeTopFilter(3)}>
                  Tốt nhất
                </a>
              </button>
              <div className="select-input">
                <span className="select-input__label">{displaySortPrice}</span>
                <ExpandMoreIcon className="select-input__icon fas fa-angle-down" />
                <ul className="select-input__list alittlebot">
                  <li onClick={() => changeTopFilter(4)} className="select-input__item">
                    <div>Thấp đến cao</div>
                  </li>
                  <li onClick={() => changeTopFilter(5)} className="select-input__item">
                    <div>Cao đến thấp</div>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="mobile-category">
              <ul className="mobile-category__list">
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Hộp bút chì màu
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Áo phông Skeleton
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Túi Gucci 100%
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Quần công sở siêu mềm
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Villager Lego
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Lợn nhồi bông Pigy
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Bóng ném in hình Alex
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Bình giữ nhiệt mùa đông
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href className="mobile-category__link">
                    Túi giữ ẩm cho gia đình
                  </a>
                </li>
              </ul>
            </nav>
            <div className="home-product">
              <ListProductData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexContent;
