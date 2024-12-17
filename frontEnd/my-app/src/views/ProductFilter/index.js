import React, { useEffect, useState } from "react";
import "./index.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { converName } from "../../shared/index";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductByCategory } from "../../service/API/index";
import { handleFilter } from "../../config/redux/slice/productSlice";

const ProductFilter = () => {
  const [isShowColor, setIsShowColor] = useState(true);
  let [selectedColor, setSelectedColor] = useState([]);
  const [isShowSize, setIsShowSize] = useState(true);
  let [selectedSize, setSelectedSize] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [isShowPrice, setIsShowPrice] = useState(true);
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  // const productName = converName(searchParams.get("productName") || "");
  // const genderName = converName(searchParams.get("gender") || "");

  const categoryName = useSelector(
    (state) => state.infoInShoppingCart.categoryName
  );
  const gender = useSelector((state) => state.infoInShoppingCart.gender);
  // console.log("giá trị bên lọc", categoryName, gender);

  const color = useSelector((state) => state.infoInShoppingCart.filter.color);
  const size = useSelector((state) => state.infoInShoppingCart.filter.size);

  const handleShowHideColor = () => {
    setIsShowColor((preShow) => !preShow);
  };

  const handleChange = (e) => {
    let color = e.target.value;
    setSelectedColor((preSelected) => {
      if (selectedColor.includes(color)) {
        selectedColor = [...preSelected.filter((c) => c !== color)];
        dispatch(handleFilter({ color: [...selectedColor] }));
        return [...selectedColor];
      } else {
        selectedColor = [...preSelected, color];
        dispatch(handleFilter({ color: [...selectedColor] }));
        return [...selectedColor];
      }
    });
  };

  const handleShowHideSize = () => {
    setIsShowSize((preShow) => !preShow);
  };

  const handleChangeSize = (e) => {
    let size = e.target.value;
    setSelectedSize((preSelected) => {
      if (preSelected.includes(size)) {
        selectedSize = preSelected.filter((s) => s !== size);
        dispatch(handleFilter({ size: [...selectedSize] }));
        return [...selectedSize];
      } else {
        selectedSize = [...selectedSize, size];
        dispatch(handleFilter({ size: [...selectedSize] }));
        return [...selectedSize];
      }
    });
  };

  const handleChangePrice = (e) => {
    const price = e.target.value;
    setSelectedPrice((prePrice) => {
      if (selectedPrice.includes(price)) {
        return selectedPrice.filter((p) => p !== price);
      } else {
        return [...selectedPrice, price];
      }
    });
  };

  const handleShowHidePrice = () => {
    setIsShowPrice((pre) => !pre);
  };

  useEffect(() => {
    setSelectedColor(color);
    setSelectedSize(size);
  }, [color, size]);
  return (
    <>
      <div className="">
        <p style={{ marginTop: "10px" }}>
          <Link
            to="/home"
            style={{
              "text-decoration": "none",
              color: "#212529",
              marginRight: "10px",
            }}
          >
            Trang chủ
          </Link>

          <span style={{ marginRight: "10px" }}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id=":S1:"
              class="text-[0.5rem] md:text-yd-button-text-5 text-yd-typo-subtitle"
            >
              <path
                d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
                fill="currentcolor"
              ></path>
            </svg>
          </span>

          <Link
            to={`/product?productName=${encodeURIComponent(categoryName)}&gender=${encodeURIComponent(gender)}`}
            style={{
              "text-decoration": "none",
              color: "#212529",
              marginRight: "10px",
            }}
          >
            {categoryName}
          </Link>
        </p>
        <p>Bộ lọc</p>
        {/* Lọc màu sắc */}
        <div className="filterColor">
          <p
            className="d-flex justify-content-between title-color"
            onClick={handleShowHideColor}
          >
            <span className="">Màu sắc</span>
            <span className={`arrow-icon ${isShowColor ? "up" : "down"}`}>
              {/* {isShow ? <IoIosArrowUp /> : <MdKeyboardArrowDown />} */}
              <IoIosArrowUp />
            </span>
          </p>
          <div className={`row ${isShowColor ? "show" : ""}`}>
            {/* đen */}
            <div className="col-4 item-color">
              <div className="color color4">
                {selectedColor.includes("đen") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="đen">
                Đen
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="đen"
                value={"đen"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* trắng */}
            <div className="col-4 item-color">
              <div className="color color1">
                {selectedColor.includes("trắng") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="trang">
                Trắng
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="trang"
                value={"trắng"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* đỏ */}
            <div className="col-4 item-color">
              <div className="color color2">
                {selectedColor.includes("đỏ") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="do">
                Đỏ
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="do"
                value={"đỏ"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* cam */}
            <div className="col-4 item-color">
              <div className="color color3">
                {selectedColor.includes("cam") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="cam">
                Cam
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="cam"
                value={"cam"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* vàng */}
            <div className="col-4 item-color">
              <div
                className="color "
                style={{ backgroundColor: "rgb(254, 213, 51)" }}
              >
                {selectedColor.includes("vàng") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="vàng">
                Vàng
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="vàng"
                value={"vàng"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* xám */}
            <div className="col-4 item-color">
              <div
                className="color "
                style={{ backgroundColor: "rgb(179, 179, 179)" }}
              >
                {selectedColor.includes("xám") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="xám">
                Xám
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="xám"
                value={"xám"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* hồng */}
            <div className="col-4 item-color">
              <div
                className="color "
                style={{ backgroundColor: "rgb(240, 114, 143)" }}
              >
                {selectedColor.includes("hồng") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="hồng">
                Hồng
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="hồng"
                value={"hồng"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            {/* tím */}
            <div className="col-4 item-color">
              <div
                className="color "
                style={{ backgroundColor: "rgb(141, 66, 159)" }}
              >
                {selectedColor.includes("tím") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="tím">
                Tím
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="tím"
                value={"tím"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* tím */}

            {/* nâu */}
            <div className="col-4 item-color">
              <div
                className="color "
                style={{ backgroundColor: "rgb(130, 93, 65)" }}
              >
                {selectedColor.includes("nâu") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="nau">
                Nâu
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="nau"
                value={"nâu"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* nâu */}

            {/* màu khác */}
            <div className="col-4 item-color">
              <div className="color color-khac">
                {selectedColor.includes("khác") && <IoCheckmarkOutline />}
              </div>

              <label className="form-check-label" htmlFor="khác">
                Khác
              </label>
              <input
                type="checkbox"
                className="form-check-input d-none"
                id="khác"
                value={"khác"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* màu khác */}
          </div>
        </div>
        {/* Lọc màu sắc */}
        <hr></hr>
        {/* Lọc kích thước     */}
        <div className="filterSize">
          <div className="filterSize-item1">
            <p onClick={handleShowHideSize}>
              <span>Kích thước</span>
              <span className={`arrow-icon ${isShowSize ? "up" : "down"}`}>
                <IoIosArrowUp />
              </span>
            </p>
          </div>

          <div className="filterSize-item2">
            <div className={`row ${isShowSize ? "show" : ""}`}>
              <div
                className={`col-3 item ${selectedSize.includes("s") ? "outline" : ""}`}
              >
                <label className="form-check-label" htmlFor="s">
                  S
                </label>
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  value="s"
                  id="s"
                  onChange={(e) => handleChangeSize(e)}
                />
              </div>

              <div
                className={`col-3 item ${selectedSize.includes("m") ? "outline" : ""}`}
              >
                <label className="form-check-label" htmlFor="m">
                  M
                </label>
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  value="m"
                  id="m"
                  onChange={(e) => handleChangeSize(e)}
                />
              </div>

              <div
                className={`col-3 item ${selectedSize.includes("l") ? "outline" : ""}`}
              >
                <label className="form-check-label" htmlFor="l">
                  L
                </label>
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  value="l"
                  id="l"
                  onChange={(e) => handleChangeSize(e)}
                />
              </div>

              <div
                className={`col-3 item ${selectedSize.includes("xl") ? "outline" : ""}`}
              >
                <label className="form-check-label" htmlFor="xl">
                  XL
                </label>
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  value="xl"
                  id="xl"
                  onChange={(e) => handleChangeSize(e)}
                />
              </div>

              <div
                className={`col-3 item ${selectedSize.includes("2xl") ? "outline" : ""}`}
              >
                <label className="form-check-label" htmlFor="2xl">
                  2XL
                </label>
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  value="2xl"
                  id="2xl"
                  onChange={(e) => handleChangeSize(e)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Lọc kích thước     */}
        <hr></hr>
        {/* Lọc theo giá */}
        <div className="filterPrice">
          <div className="filterPrice-item1">
            <p onClick={handleShowHidePrice}>
              <span>Theo giá</span>
              <span className={`arrow-icon ${isShowPrice ? "up" : "down"}`}>
                <IoIosArrowUp />
              </span>
            </p>
          </div>

          <div className="filterPrice-item2">
            <div className={`row ${isShowPrice ? "show" : ""}`}>
              <div className={`col-12 item `}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="350000"
                  id="price1"
                  onChange={(e) => handleChangePrice(e)}
                />
                <label className="form-check-label mx-2" htmlFor="price1">
                  Dưới 350.000đ
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Lọc theo giá */}
      </div>
    </>
  );
};

export default ProductFilter;
