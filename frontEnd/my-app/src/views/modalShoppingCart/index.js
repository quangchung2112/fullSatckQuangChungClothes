import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./index.scss";
import { FaCheckCircle } from "react-icons/fa";
import { formatPrice } from "./../../shared/index";
import { Link } from "react-router-dom";

const ModalShoppingCart = ({
  showModalShoppingCart,
  setShowModalShoppingCart,
  timer,
  setTimer,
  addProductToCart,
}) => {
  // console.log("nhận sản phẩm thêm giỏ hàng", addProductToCart);
  let result = JSON.parse(localStorage.getItem("infoShoppingCart"));
  let count =
    result &&
    result.find((i) => {
      return i?.productVariantsId === addProductToCart?.productVariantsId;
    });

  const handleClose = () => setShowModalShoppingCart(false);
  // const handleShow = () => setShow(true);
  const handleMouseEnter = () => {
    clearTimeout(timer);
    setTimer(null);
    setShowModalShoppingCart(true);
  };
  return (
    <>
      <Modal
        show={showModalShoppingCart}
        onHide={handleClose}
        className="modal-shopping-cart"
        onMouseEnter={() => handleMouseEnter()} // Khi chuột di chuyển vào
        onMouseLeave={() => setShowModalShoppingCart(false)} // Khi chuột di chuyển ra
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center first-header">
            <FaCheckCircle className="icon-check" />
            <strong style={{ marginLeft: "10px" }}>Đã thêm vào giỏ hàng</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="part-body">
          <div className="d-flex">
            <div className="image-product">
              <img
                src={addProductToCart?.mainImage}
                alt={addProductToCart?.name}
              />
            </div>

            <div className="info-product">
              <p>{addProductToCart?.name}</p>
              <p style={{ color: "gray" }}>
                <span>{addProductToCart?.color}, </span>
                <span>{addProductToCart?.size}</span>
              </p>
              <p
                style={{ marginTop: "18px" }}
                className="d-flex justify-content-between"
              >
                <span>
                  {addProductToCart &&
                    addProductToCart?.price &&
                    formatPrice(addProductToCart?.price)}
                </span>
                <span>x {count && count?.quantity}</span>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100">
            <Button
              style={{
                backgroundColor: "#f5ac00",
                color: "black",
                border: "none",
                width: "100%",
              }}
              // onClick={handleClose}
            >
              Đặt hàng
            </Button>
          </div>
          <Link to="/shoppingCart">
            <div className="w-100">
              <span
                style={{
                  color: "black",
                  border: "none",
                  width: "100%",
                  textAlign: "center",
                  display: "inline-block",
                }}
                // onClick={handleClose}
              >
                Xem giỏ hàng
              </span>
            </div>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalShoppingCart;
