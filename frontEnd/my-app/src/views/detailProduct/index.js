import Navigation from "../Home/Navbar";
import "./index.scss";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getAllProductsById } from "../../service/API";
import { formatPrice } from "../../shared";
import { useDispatch } from "react-redux";
import { countInShoppingCart } from "../../config/redux/slice/productSlice";
import { useSelector } from "react-redux";
import ListProducts from "../listProducts";
const DetailProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const color = searchParams.get("color");
  const [mainImage, setMainImage] = useState("");
  const [count, setCount] = useState(1);
  const [infoProduct, setInfoProduct] = useState("");
  const [allProductColor, setAllProductColor] = useState("");
  const [sizeOfEachColor, setSizeOfEachColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [showModalShoppingCart, setShowModalShoppingCart] = useState(false);
  const [timer, setTimer] = useState(null);
  const [addProductToCart, setAddProductToCart] = useState("");
  const [allProductAttributes, setAllProductAttributes] = useState("");
  const categoryName = useSelector(
    (state) => state.infoInShoppingCart.categoryName
  );
  const gender = useSelector((state) => state.infoInShoppingCart.gender);

  const handleChooseImage = (item) => {
    setMainImage(item);
  };

  const handleChangeCount = (value) => {
    if (value === "increase") {
      setCount((count) => count + 1);
    } else {
      setCount((count) => count - 1);
    }
  };

  const handleChangeColor = (item) => {
    navigate({
      pathname: "/detail/product",
      search: `?productId=${productId}&color=${item.nameColor}`,
    });
  };

  const handleChangeSize = (item) => {
    setSelectedSize(item);
  };

  const handleAddProduct = async () => {
    let infoProductToCartInLocal = localStorage.getItem("infoShoppingCart");
    setShowModalShoppingCart(true);
    let timer = setTimeout(() => {
      setShowModalShoppingCart(false);
    }, 3000);
    setTimer(timer);
    let result = await getAllProductsById(productId);
    const infoProductAddToCart = result.data.data.find(
      (item) =>
        item.infoProduct.color === color &&
        item.infoProduct.infoSize.name === selectedSize
    );

    // lưu vào loacal
    if (infoProductToCartInLocal) {
      let result = JSON.parse(infoProductToCartInLocal);
      let isExist = result.findIndex(
        (item) => item.productVariantsId === infoProductAddToCart.infoProduct.id
      );

      if (isExist !== -1) {
        result[isExist] = {
          ...result[isExist],
          quantity: result[isExist].quantity + count,
        };
        // console.log("nhận sản phẩm khi đã có", result);
        localStorage.setItem("infoShoppingCart", JSON.stringify(result));
      } else {
        result.push({
          productVariantsId: infoProductAddToCart?.infoProduct?.id,
          quantity: count,
        });
        // console.log("sản phẩn ko có", result);
        localStorage.setItem("infoShoppingCart", JSON.stringify(result));
      }
    } else {
      localStorage.setItem(
        "infoShoppingCart",
        JSON.stringify([
          {
            productVariantsId: infoProductAddToCart?.infoProduct?.id,
            quantity: count,
          },
        ])
      );
    }
    // lưu vào loacal
    let data = {
      productVariantsId: infoProductAddToCart.infoProduct.id,
      name: infoProductAddToCart.name,
      color: infoProductAddToCart.infoProduct.color,
      size: infoProductAddToCart.infoProduct.infoSize.name,
      price: infoProductAddToCart.price,
      mainImage: infoProductAddToCart.infoProduct.mainImage,
    };
    setAddProductToCart(data);

    let toatalAllProductInShoppingCart = JSON.parse(
      localStorage.getItem("infoShoppingCart")
    );

    toatalAllProductInShoppingCart = toatalAllProductInShoppingCart.reduce(
      (acc, i) => {
        return acc + i.quantity;
      },
      0
    );
    dispatch(countInShoppingCart({ count: toatalAllProductInShoppingCart }));
    console.log(
      "toatalAllProductInShoppingCart",
      toatalAllProductInShoppingCart
    );
  };
  const fetchData = async () => {
    let result = await getAllProductsById(productId); //lấy thông tin sản phẩm
    let result1 = result.data.data.map((item) => {
      return {
        name: item.name,
        mainImage: item.infoProduct.mainImage,
        listImages: item.infoProduct.images,
        nameColor: item.infoProduct.color,
        size: item.infoProduct.infoSize.name,
        price: item.price,
        stock_quantity: item.infoProduct.stock_quantity,
      };
    }); //lặp lấy ra thông tin cẩn thiết

    let allColorProduct = result1.map((item) => {
      return {
        nameColor: item.nameColor,
        color: item.mainImage,
      };
    }); //lấy ra tất cả các màu
    let uniqueColor = Array.from(
      new Set(allColorProduct.map((item) => item.nameColor))
    ).map((nameColor) => {
      return allColorProduct.find((item) => item.nameColor === nameColor);
    }); //lặp để lấy màu duy nhất ko bị trùng

    let hoverColorProduct = result1.find((item) => {
      return item.nameColor === color;
    }); //lấy thông tin sản phẩm mà màu hover phía bên kia

    let getSizeOfEachColor = result1.reduce((acc, item) => {
      if (!acc[item.nameColor]) {
        acc[item.nameColor] = [];
      }
      acc[item.nameColor].push(item.size);
      return acc;
    }, {}); //lấy size tương ứng vs từng màu

    // let totaltonkho;

    // console.log("giá ");
    setSizeOfEachColor(getSizeOfEachColor[color]);
    setSelectedSize(getSizeOfEachColor[color][0]);
    setAllProductColor(uniqueColor);
    setMainImage(hoverColorProduct.mainImage);
    setInfoProduct(hoverColorProduct);
    setAllProductAttributes(result1);
  };
  useEffect(() => {
    fetchData();
  }, [color]);

  const handleMuaNgay = () => {
    console.log("id sản phẩm", productId);
    console.log("Màu sản phẩm", color);
    console.log("Số lượng đặt", count);
    console.log("size", selectedSize);
    console.log(infoProduct);
    let data = {
      id: productId,
      color: color,
      size: selectedSize,
      name: infoProduct.name,
      totalAmount: infoProduct.price * count,
      item: infoProduct,
      count: count,
    };
    console.log(data);
    navigate("/order", { state: { data, from: "muangay" } });
  };

  return (
    <>
      <Navigation
        showModalShoppingCart={showModalShoppingCart}
        setShowModalShoppingCart={setShowModalShoppingCart}
        timer={timer}
        setTimer={setTimer}
        addProductToCart={addProductToCart}
      />
      <div className="container" style={{ marginTop: "54px" }}>
        <div>
          <p>
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
        </div>

        <div className="row" style={{ padding: "20px 0px" }}>
          {/* phần xem hình ảnh */}

          <div className="col-5">
            <div className="row">
              <div className="col-1 list-images">
                {infoProduct &&
                  JSON.parse(infoProduct.listImages).length > 0 &&
                  (() => {
                    let listImages = JSON.parse(infoProduct.listImages);
                    listImages.unshift(infoProduct.mainImage);
                    return listImages.map((item) => {
                      return (
                        <span>
                          <img
                            src={item}
                            alt="anh"
                            className={`${mainImage === item && "active"}`}
                            onClick={() => handleChooseImage(item)}
                          />
                        </span>
                      );
                    });
                  })()}
              </div>

              <div className="col-11 main-image">
                <span>
                  <img src={mainImage} alt="anhchinh" />
                </span>
              </div>
            </div>
          </div>
          {/* phần xem hình ảnh */}

          {/* Phần thông tin sản phẩm */}
          <div className="col-7 info-product">
            <p>
              <strong>{infoProduct && infoProduct?.name}</strong>
            </p>
            <p>
              {infoProduct &&
                infoProduct?.price &&
                formatPrice(infoProduct?.price)}
            </p>

            {/* SỐ lượng còn trong kho */}
            {/* <p>Chỉ còn 10 sản phẩm</p> */}
            <div style={{ marginBottom: "10px" }} className="choose-color">
              <div>
                Chỉ còn
                {allProductAttributes &&
                  allProductAttributes.length > 0 &&
                  allProductAttributes.map((item) => {
                    return (
                      <span>
                        {color === item.nameColor &&
                          selectedSize === item.size && (
                            <strong> {item.stock_quantity} </strong>
                          )}
                      </span>
                    );
                  })}
                sản phẩm trong kho!
              </div>
            </div>
            {/* SỐ lượng còn trong kho */}

            {/* Chọn màu sắc     */}
            <div style={{ marginBottom: "10px" }} className="choose-color">
              <div style={{ marginBottom: "6px" }}>
                <span>Màu sắc: </span>
                <span>{color}</span>
              </div>

              <div>
                {allProductColor &&
                  allProductColor.length > 0 &&
                  allProductColor.map((item) => {
                    return (
                      <span
                        style={{ marginRight: "10px" }}
                        className={`color ${color === item.nameColor && "active"}`}
                        onClick={() => handleChangeColor(item)}
                      >
                        <img src={item.color} alt="mausac" />
                      </span>
                    );
                  })}
              </div>
            </div>

            {/* Chọn màu sắc     */}

            {/* Chọn size số sản phẩm */}
            <div className="info-size">
              <div style={{ marginBottom: "6px" }}>
                <span>Kích thước: </span>
                <span>{selectedSize}</span>
              </div>

              <div className="d-flex gap-2">
                {sizeOfEachColor &&
                  sizeOfEachColor.length > 0 &&
                  sizeOfEachColor.map((item) => {
                    // console.log(selectedSize);
                    return (
                      <span
                        className={`size ${selectedSize === item && "active"} `}
                        onClick={() => handleChangeSize(item)}
                      >
                        {item}
                      </span>
                    );
                  })}
              </div>
            </div>
            {/* Chọn size số sản phẩm */}

            {/* Chọn số lượng cần mua */}
            <div style={{ margin: "10px 0" }} className="count">
              <p>Số lượng:</p>

              <span style={{ display: "inline-block" }}>
                <div className="item-count">
                  <button
                    className="icon-btn"
                    disabled={count <= 1 ? true : false}
                    onClick={() => handleChangeCount("decrease")}
                  >
                    <FaMinus />
                  </button>

                  {count}
                  <button
                    className="icon-btn"
                    onClick={() => handleChangeCount("increase")}
                  >
                    <FaPlus />
                  </button>
                </div>
              </span>

              <button
                className="shopping-cart"
                style={{ marginLeft: "20px" }}
                onClick={handleAddProduct}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
            {/* Chọn số lượng cần mua */}

            {/* <button
              style={{
                backgroundColor: "#fcaf17",
                border: "none",
                padding: "10px",
                width: "79%",
                borderRadius: "10px",
              }}
              // onClick={handleMuaNgay}
            >
              Mua ngay
            </button> */}
          </div>
          {/* Phần thông tin sản phẩm */}
        </div>
      </div>
    </>
  );
};
export default DetailProduct;
