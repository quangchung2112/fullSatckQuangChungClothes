import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalAddCategory({ category, setCategory, handleCreate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    await handleCreate();
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Thêm danh mục
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm danh mục sản phẩm mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group w-100">
            <label for="danhmuc">Tên danh mục</label>
            <input
              type="text"
              id="danhmuc"
              class="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-row">
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddCategory;
