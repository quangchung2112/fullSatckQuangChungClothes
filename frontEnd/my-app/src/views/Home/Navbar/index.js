import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "./navbar.scss";
import menuNam from "../../../assets/images/menunam.webp";
import menuWoman from "../../../assets/images/menu_woman.webp";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ModalShoppingCart from "../../modalShoppingCart";
import { useSelector } from "react-redux";
import Logo1 from "../../../assets/logo3.png";
const Navigation = ({
  showModalShoppingCart,
  setShowModalShoppingCart,
  timer,
  setTimer,
  addProductToCart,
}) => {
  const countInShoppingCart = useSelector(
    (state) => state.infoInShoppingCart.count
  );

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <div className="d-flex  justify-content-between gap-3">
            {/* ảnh logo */}

            <Navbar.Brand href="#home" className="mx-4">
              <Link to="/home">
                <img style={{ height: "50px" }} src={Logo1} alt="logo" />
              </Link>
            </Navbar.Brand>
            {/* ảnh logo */}

            {/* phần menu nam */}
            <div
              className="d-flex align-items-center category"
              style={{ color: "black" }}
            >
              <span
                className=" h-100 d-flex align-items-center"
                style={{ fontWeight: "600" }}
              >
                <Link
                  to={{
                    pathname: "/home",
                    state: {
                      productName: "Nam",
                    },
                  }}
                >
                  Nam
                </Link>
              </span>

              <div className=" sub-menu-nam ">
                <div className="container d-flex ">
                  <ul>
                    <li>
                      <strong>
                        <Link
                          to={`/product?productName=${encodeURIComponent("áo nam")}&gender=${encodeURIComponent("nam")}`}
                        >
                          Áo Nam
                        </Link>
                      </strong>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("Áo polo")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Áo polo nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("Áo Thun")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Áo thun nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo sơ mi")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Áo sơ mi nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo khoác")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Áo khoác nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent(" Áo hoodile - Áo nỉ")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Áo hoodile - Áo nỉ nam
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <strong>
                      <li>
                        <Link
                          to={`/product?productName=${encodeURIComponent("quần nam")}&gender=${encodeURIComponent("nam")}`}
                        >
                          Quần Nam
                        </Link>
                      </li>
                    </strong>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần jeans")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Quần jeans nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần âu")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Quần âu nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần kaki")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Quần kaki nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần dài")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Quần dài nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần short")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Quần short nam
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần nỉ")}&gender=${encodeURIComponent("nam")}`}
                      >
                        Quần nỉ nam
                      </Link>
                    </li>
                  </ul>

                  <ul className="d-flex justify-content-end align-items-center w-100">
                    <img src={menuNam} alt="backgroundNam" />
                  </ul>
                </div>
                <div className="overlay"></div>
              </div>
            </div>
            {/* phần menu nam */}

            {/* phần menu nữ */}
            <div
              className="d-flex align-items-center category "
              style={{ color: "black" }}
            >
              <span
                className=" h-100 d-flex align-items-center"
                style={{ fontWeight: "600" }}
              >
                <Link to="/product/nu"> Nữ</Link>
              </span>

              <div className=" sub-menu-nu ">
                <div className="container d-flex ">
                  <ul>
                    <li>
                      <strong>
                        <Link
                          to={`/product?productName=${encodeURIComponent("áo nữ")}&gender=${encodeURIComponent("nữ")}`}
                        >
                          Áo nữ
                        </Link>
                      </strong>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo polo")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Áo polo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo thun")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Áo thun
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo sơ mi")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Áo sơ mi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo chống nắng")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Áo chống nắng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo khoác")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Áo khoác
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo hoodile - áo nỉ")}&gender=${encodeURIComponent("nữ")}`}
                      ></Link>
                      Áo hoodile - Áo nỉ
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("áo len")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Áo len
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <strong>
                      <li>
                        <Link
                          to={`/product?productName=${encodeURIComponent("quần nữ")}&gender=${encodeURIComponent("nữ")}`}
                        >
                          Quần Nữ
                        </Link>
                      </li>{" "}
                    </strong>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần jeans")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        {" "}
                        Quần jeans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần âu")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Quần âu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần kaki")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        {" "}
                        Quần kaki
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần dài")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        Quần dài
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần short")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        {" "}
                        Quần short
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/product?productName=${encodeURIComponent("quần nỉ")}&gender=${encodeURIComponent("nữ")}`}
                      >
                        {" "}
                        Quần nỉ nữ
                      </Link>
                    </li>
                  </ul>

                  <ul className="d-flex justify-content-end align-items-center w-100">
                    <img src={menuWoman} alt="backgroundWomen" />
                  </ul>
                </div>
                <div className="overlay"></div>
              </div>
            </div>
            {/* phần menu nữ */}
          </div>

          <Nav className="d-flex align-items-center">
            <Nav.Item>
              <Col className="ms-auto position-relative">
                <MdOutlineSearch className="icon-search" />
                <Form.Control
                  type="text"
                  placeholder="Tìm kiếm"
                  className="input-search"
                />
              </Col>
            </Nav.Item>
            <Nav.Item>
              <div className="cart-icon mx-3" style={{ color: "black" }}>
                <Link to="/shoppingCart">
                  <FaShoppingCart />
                </Link>

                {/* {numberInCart > 0 && (
                  <span className="cart-count">{numberInCart}</span>
                )} */}

                <ModalShoppingCart
                  showModalShoppingCart={showModalShoppingCart}
                  setShowModalShoppingCart={setShowModalShoppingCart}
                  timer={timer}
                  setTimer={setTimer}
                  addProductToCart={addProductToCart}
                />

                <span>
                  {countInShoppingCart > 0 ? countInShoppingCart : ""}
                </span>
              </div>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
