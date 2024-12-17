import "./index.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmDeleteProductInShopping = ({
  show,
  handleClose,
  selectedProductDelete,
  setSelectedProductDelete,
}) => {
  // console.log("Xóa", selectedProductDelete);
  const handleConfirmDeleteProduct = async (selectedProductDelete) => {
    try {
      let infoInCart = JSON.parse(localStorage.getItem("infoShoppingCart"));
      infoInCart = infoInCart.filter((i) => {
        return i.productVariantsId !== selectedProductDelete;
      });

      localStorage.setItem("infoShoppingCart", JSON.stringify(infoInCart));
      handleClose(false);
      setSelectedProductDelete(0);
    } catch (err) {
      console.log("Có lỗi ở phía fe khi xóa sản phẩm", err);
    }
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal
        show={show}
        onHide={() => handleClose(false)}
        className="custom-modal"
        // onMouseLeave={setConfirmDeleteProduct(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xóa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm không</Modal.Body>
        <Modal.Footer className="d-flex flex-row">
          <Button
            style={{
              backgroundColor: "white",
              border: "none",
              color: "#366ae2",
              fontWeight: "600",
            }}
            variant="secondary"
            onClick={() => handleClose(false)}
          >
            Không
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              border: "none",
              color: "#366ae2",
              fontWeight: "600",
            }}
            variant="primary"
            onClick={() => handleConfirmDeleteProduct(selectedProductDelete)}
          >
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmDeleteProductInShopping;
