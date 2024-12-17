import Navigation from "../Home/Navbar";
import "./shoppingCart.scss";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  getAllProductInShoppingCart,
  updateOrderedProduct,
} from "../../service/API";
import { formatPrice } from "./../../shared/index";
import { getProductsById } from "../../service/API";
import { countInShoppingCart } from "../../config/redux/slice/productSlice";
import ConfirmDeleteProductInShopping from "../modals/confirmDelete";
import { ReactComponent as Logo } from "../../assets/images/kocogiohang.svg";
import { Await, Link, useLocation, useNavigate } from "react-router-dom";
import giohangttrong from "../../assets/images/kocogiohang.svg";
import { object } from "framer-motion/client";
import { toast } from "react-toastify";
const ShoppingCart = () => {
  const location = useLocation();
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedItemd, setSelectedItems] = useState([]);
  const [quantityOfEachProduct, setQuantityOfEachProduct] = useState([]);
  const dispatch = useDispatch();
  const [productInShoppingCart, setProductInShoppingCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductDelete, setSelectedProductDelete] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:8080");

    websocket.onopen = () => {
      console.log("Kết nối đến WebSocket thành công");
      websocket.send("BE ơi tao ko nhận đx thông tin");
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Thông tin thanh toán gửi về từ WebSocket", data);
      setResponse(data);
    };
    websocket.onclose = () => {
      console.log("Kết nối WebSocket đã đóng");
    };

    websocket.onerror = (error) => {
      console.error("Lỗi WebSocket:", error);
    };

    // setWs(websocket);

    return () => {
      websocket.close(); // Đóng kết nối khi component unmount
    };
  }, []);

  const updateProduct = async () => {
    if (response && Object.keys(response).length > 0) {
      console.log("Thỏa mãn");
      let data = {
        paymentStatus: response.resultCode === 0 ? "completed" : "pending",
        orderId: response.orderId,
      };
      try {
        let result = await updateOrderedProduct(data);
        console.log("vào cập nhật", result.data);
        toast.success("Đặt hàng thành công");
      } catch (err) {
        console.log("Có lỗi bên Fe khi cập nhật đơn hàng khi thanh toán", err);
      }
    }
  };
  useEffect(() => {
    console.log("vòa hết");
    updateProduct();
  }, [response]);

  const handleChangeCount = async (value, index, product) => {
    let infoInShoppingCart = JSON.parse(
      localStorage.getItem("infoShoppingCart")
    );
    if (value === "increase") {
      let result = quantityOfEachProduct;
      let existingProduct = infoInShoppingCart.map((item) => {
        if (item.productVariantsId === product.id) {
          return {
            ...item,
            quantity: result[index] + 1,
          };
        }
        return item;
      });
      // console.log("q", quantityOfEachProduct);
      localStorage.setItem("infoShoppingCart", JSON.stringify(existingProduct));
      quantityOfEachProduct[index] = quantityOfEachProduct[index] + 1;
      setQuantityOfEachProduct([...quantityOfEachProduct]);
      let sum = result.reduce((init, i) => {
        return init + i;
      }, 0);
      setRefresh(refresh + 1);
      dispatch(countInShoppingCart({ count: sum }));
    } else {
      let result = quantityOfEachProduct;
      if (infoInShoppingCart[index].quantity <= 1) {
        setSelectedProductDelete(product.id);
        setShowModal(true);
      } else {
        let existingProduct = infoInShoppingCart.map((item) => {
          if (item.productVariantsId === product.id) {
            return {
              ...item,
              quantity: result[index] - 1,
            };
          }
          return item;
        });

        localStorage.setItem(
          "infoShoppingCart",
          JSON.stringify(existingProduct)
        );
        result[index] = result[index] - 1;
        setQuantityOfEachProduct([...result]);
        setRefresh(refresh + 1);
      }
    }
  };
  const handleChangeSelectAll = (e) => {
    let result = selectedItemd.fill(e.target.checked);
    setSelectedItems([...result]);
    setSelectedAll(!selectedAll);

    let total = productInShoppingCart.reduce((init, item, index) => {
      if (result[index]) {
        return init + item.infoProduct.price * quantityOfEachProduct[index];
      }
    }, 0);
    setTotalAmount(total);
  };

  const handleChangeSelectedItem = (index) => {
    let result = selectedItemd;

    result[index] = !result[index];

    let total = productInShoppingCart.reduce((init, item, index) => {
      if (result[index]) {
        return init + item.infoProduct.price * quantityOfEachProduct[index];
      }
      return init;
    }, 0);
    setTotalAmount(total);
    setSelectedItems([...result]);
    setSelectedAll(selectedItemd.every(Boolean));
  };

  const handleSubmit = () => {
    const result = selectedItemd.filter((_, index) => selectedItemd[index]);
    console.log("kq cuối", result);
  };
  // console.log("Sản phẩm trong giỏ hàng", productInShoppingCart);
  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("infoShoppingCart"));
    const fetchData = async () => {
      let result =
        info &&
        info.length > 0 &&
        info.map((i) => {
          return getProductsById(i.productVariantsId);
        });

      let responses =
        result && result.length > 0 ? await Promise.all(result) : [];
      responses = responses.map((item) => {
        return item.data.data;
      });

      let nhan =
        info &&
        info.length > 0 &&
        info.map((item) => {
          return item.quantity;
        });

      let count =
        nhan &&
        nhan.length > 0 &&
        nhan.reduce((init, n) => {
          return init + n;
        }, 0);

      setProductInShoppingCart(responses);
      setSelectedItems(new Array(responses.length).fill(false));
      setQuantityOfEachProduct(nhan);
      dispatch(countInShoppingCart({ count: count }));
      setSelectedAll(false);
    };
    fetchData();
  }, [selectedProductDelete, refresh]);

  const handleBuy = () => {
    let result = productInShoppingCart.map((item, index) => {
      if (selectedItemd[index]) {
        return { item, quantity: quantityOfEachProduct[index] };
      }
      return null;
    });

    let resultnew = result.filter((item1) => item1 !== null);
    navigate("/order", { state: resultnew });
    // console.log("Các phần tử đx chọn", resultnew);
  };

  return (
    <div className="shopping_cart">
      <Navigation />
      <div
        className="container"
        style={{ marginTop: "51px", paddingTop: "18px" }}
      >
        {productInShoppingCart && productInShoppingCart.length > 0 && (
          <div className="first-part">
            <h4>Giỏ hàng</h4>
          </div>
        )}

        <div className="row" style={{ margin: "0" }}>
          {/* Khối bên trái */}
          <div
            className={
              productInShoppingCart && productInShoppingCart.length > 0
                ? "cotainer-left col-8"
                : "empty col-12"
            }
          >
            {productInShoppingCart && productInShoppingCart.length > 0 && (
              <div className="custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked={selectedAll}
                  onChange={(e) => handleChangeSelectAll(e)}
                />
              </div>
            )}
            {productInShoppingCart && productInShoppingCart.length > 0 ? (
              productInShoppingCart.map((product, index) => {
                return (
                  <div className="item-product">
                    <div className="custom-checkbox">
                      <input
                        checked={selectedItemd[index]}
                        type="checkbox"
                        className="custom-control-input"
                        onChange={() => handleChangeSelectedItem(index)}
                      />
                    </div>

                    <div className="img-product" style={{ marginLeft: "10px" }}>
                      <img
                        src={product?.mainImage}
                        alt={product?.infoProduct?.name}
                      />
                    </div>

                    <div className="info-product">
                      <p>{product?.infoProduct?.name}</p>
                      <p>{formatPrice(product?.infoProduct?.price)}</p>

                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <p
                            style={{
                              backgroundColor: "#f2f5f8",
                              display: "inline-block",
                              padding: "6px 6px ",
                              borderRadius: "10px",
                              color: "black",
                              margin: "0",
                            }}
                          >
                            Màu sắc:
                            <span>{product?.color}</span>, Size:
                            <span>{product?.infoSize?.name}</span>
                          </p>
                        </div>

                        <div>
                          <div className="item-count">
                            <button
                              className="icon-btn"
                              // disabled={
                              //   quantityOfEachProduct[index] <= 1 ? true : false
                              // }
                              onClick={() =>
                                handleChangeCount("decrease", index, product)
                              }
                            >
                              <FaMinus />
                            </button>

                            {quantityOfEachProduct[index]}
                            <button
                              className="icon-btn"
                              onClick={() =>
                                handleChangeCount("increase", index, product)
                              }
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "80vh",
                }}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <h3>Giỏ hàng</h3>
                <p>Không có sản phẩm trong giỏ hàng</p>
                <div>
                  <img src={giohangttrong} alt="giohangtrong" />
                </div>
                <Link to="/home">
                  <button>Mua sắm ngay</button>
                </Link>
              </div>
            )}
          </div>
          {/* Khối bên trái */}

          {/* Khối bên phải */}
          {productInShoppingCart && productInShoppingCart.length > 0 && (
            <div className="conatiner-right col-4">
              <>
                <div style={{ borderBottom: "1px solid #f2f5f8" }}>
                  <h5 className="my-4">Chi tiết đơn hàng</h5>
                  {selectedItemd.some((i) => i === true) ? (
                    <>
                      <p className="my-4 d-flex justify-content-between">
                        <span>Tổng giá trị sản phẩm</span>{" "}
                        <span>{formatPrice(totalAmount)}</span>
                      </p>
                      <p className="my-4 d-flex justify-content-between">
                        <span>Vận chuyển</span>{" "}
                        <span>{formatPrice(20000)}</span>
                      </p>
                    </>
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center flex-column"
                      style={{ marginBottom: "20px" }}
                    >
                      <Logo />
                      <p className="text-center">
                        Vui lòng chọn các sản phẩm trong giỏ hàng trước khi
                        thanh toán
                      </p>
                    </div>
                  )}
                </div>

                <div className="pay">
                  {selectedItemd.some((i) => i === true) && (
                    <h5 className="my-4 d-flex justify-content-between">
                      <span>Tổng thanh toán</span>{" "}
                      <span>{formatPrice(totalAmount + 20000)}</span>
                    </h5>
                  )}
                  {/* <Link to="/order"> */}
                  <button
                    className="w-100"
                    disabled={!selectedItemd.some((i) => i === true)}
                    onClick={() => handleBuy()}
                  >
                    <strong>Mua hàng</strong>
                  </button>
                  {/* </Link> */}
                </div>
              </>
            </div>
          )}
          {/* Khối bên phải */}
        </div>
      </div>
      <ConfirmDeleteProductInShopping
        show={showModal}
        handleClose={setShowModal}
        selectedProductDelete={selectedProductDelete}
        setSelectedProductDelete={setSelectedProductDelete}
      />
    </div>
  );
};

export default ShoppingCart;
