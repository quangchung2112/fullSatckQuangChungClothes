import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createSize, getAllSizes } from "../../../service/API";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavQuanLy from "../../navquanli";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import DataTable from "react-data-table-component";
const ManageSize = () => {
  const [size, setSize] = useState("");
  const [listSizes, setListSizes] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCreate = async (e) => {
    // e.preventDefault();
    handleClose();
    const converToUpperCase = (sizeName) => sizeName.toUpperCase();

    let result = converToUpperCase(size);

    if (result) {
      try {
        let data = await createSize(result);

        setCount((preCount) => preCount + 1);
        toast.success(data.data.errMess);
      } catch (err) {
        toast.error(err.response.data.errMess);
      }
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin.");
    }
  };

  const fetchData = async () => {
    let result = await getAllSizes();
    console.log("Các size", result.data.data);
    setListSizes(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, [count]);
  const colums = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => {
        return (
          <div className="d-flex">
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                marginRight: "10px",
              }}
            >
              <RiEdit2Fill style={{ backgroundColor: "white" }} />
            </button>
            <button style={{ backgroundColor: "white", border: "none" }}>
              <MdDelete style={{ backgroundColor: "white" }} />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="">
            <div className="row">
              <div className="col-12">
                <div class="form-group">
                  <label for="size">Kích thước</label>
                  <input
                    type="text"
                    id="size"
                    class="form-control"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="flex-row">
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Tạo
          </Button>
        </Modal.Footer>
      </Modal>
      <NavQuanLy />
      <div className="container">
        <Button variant="primary" onClick={handleShow}>
          Tạo mới
        </Button>
        {/* <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listSizes && listSizes.length > 0
              ? listSizes.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>
                        <button
                          style={{
                            backgroundColor: "white",
                            border: "none",
                            marginRight: "10px",
                          }}
                        >
                          <RiEdit2Fill style={{ backgroundColor: "white" }} />
                        </button>
                        <button
                          style={{ backgroundColor: "white", border: "none" }}
                        >
                          <MdDelete style={{ backgroundColor: "white" }} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "Không có dữ liệu"}
          </tbody>
        </table> */}
        <DataTable
          title="Danh sách sizes"
          columns={colums}
          data={listSizes}
          pagination
          highlightOnHover
          pointerOnHover
          customStyles={{
            rows: {
              style: {
                "&:hover": {
                  backgroundColor: "#d8d8d8",
                },
              },
            },
            headCells: {
              style: {
                fontWeight: "bold",
                backgroundColor: "#343a40",
                color: "#fff",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default ManageSize;
