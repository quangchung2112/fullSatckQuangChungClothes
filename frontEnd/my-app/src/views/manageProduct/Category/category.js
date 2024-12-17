import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createCategory, getAllCategory } from "../../../service/API";
import NavQuanLy from "../../navquanli";
import ModalAddCategory from "./modalAddCategory";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteCategory, updateCategory } from "../../../service/API";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DataTable from "react-data-table-component";
function capitalizeWords(str) {
  return str
    .toLowerCase() // Chuyển toàn bộ chuỗi về chữ thường
    .split(" ") // Tách chuỗi thành mảng các từ
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Chuyển chữ cái đầu mỗi từ thành chữ hoa
    .join(" "); // Gộp các từ lại thành chuỗi
}
const ManageCategories = () => {
  const [category, setCategory] = useState("");
  const [listCategories, setListCategories] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleClose = () => {
    setShow(false);
    setCategory("");
  };
  const handleShow = () => setShow(true);

  const handleCreate = async (e) => {
    // e.preventDefault();

    let result = capitalizeWords(category);
    if (result) {
      try {
        let data = await createCategory(result);
        setCount((preCount) => preCount + 1);
        toast.success(data.data.errMess);
        fetchData();
      } catch (err) {
        toast.error(err.response.data.errMess);
      }
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin.");
    }
  };

  const fetchData = async () => {
    let result = await getAllCategory();
    console.log("kq", result.data.data);
    setListCategories(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  const handleDeleteCategory = async (item) => {
    try {
      await deleteCategory(item.id);
      fetchData();
      toast.success("Xóa thành công");
    } catch (err) {
      console.log("có lỗi khi xóa danh mục bên fe", err);
      toast.error("Có lỗi.Vui lòng thử lại sau.");
    }
  };

  const handleEdit = async () => {
    try {
      await updateCategory(id, capitalizeWords(category));
      toast.success("Cập nhật thành công");
      fetchData();
      handleClose();
    } catch (err) {
      console.log("Có lỗi bên Fe khi cập nhật danh mục sản phẩm", err);
      toast.error("Có lỗi.Vui lòng thử lại sau");
    }
  };

  const colums = [
    {
      name: "STT",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Actions",
      cell: (row) => {
        return (
          <div>
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                marginRight: "10px",
              }}
              onClick={() => {
                setCategory(row.name);
                handleShow();
                setId(row.id);
              }}
            >
              <RiEdit2Fill style={{ backgroundColor: "white" }} />
            </button>
            <button
              style={{ backgroundColor: "white", border: "none" }}
              onClick={() => handleDeleteCategory(row)}
            >
              <MdDelete style={{ backgroundColor: "white" }} />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <NavQuanLy />
      <div className="container">
        <ModalAddCategory
          category={category}
          setCategory={setCategory}
          handleCreate={handleCreate}
        />

        <DataTable
          columns={colums}
          data={listCategories}
          highlightOnHover
          pointerOnHover
          pagination
        />

        {/* 
                        modal cập nhật sản phẩm */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cập nhật danh mục sản phẩm</Modal.Title>
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
          <Modal.Footer className="flex-row">
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Cập nhật
            </Button>
          </Modal.Footer>
        </Modal>

        {/* 
                        modal cập nhật sản phẩm */}
      </div>
    </>
  );
};

export default ManageCategories;
