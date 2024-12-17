import { useEffect, useState } from "react";
import { getAllOrder } from "../../service/API";
import { formatPrice } from "./../../shared/index";
import { deteleorderedProducts } from "../../service/API";
import { toast } from "react-toastify";
import "./index.scss";
import { updateinfoOrderedProduct } from "../../service/API";
import { object } from "framer-motion/client";
import NavQuanLy from "../navquanli";
import DataTable from "react-data-table-component";

const ManageOrder = () => {
  const [listOrders, setListOrders] = useState("");
  let [newOrderStatus, setNewOrderStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let [newPhone, setNewPhone] = useState("");
  let [newAdd, setNewAdd] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const [newListOrders, setNewListOrders] = useState("");
  const fetchData = async () => {
    setIsLoading(true);
    try {
      let result = await getAllOrder();

      setListOrders(result.data.data);
    } catch (err) {
      console.log("Lỗi bên fe lấy thông tin tất cả đơn hàng");
      setIsLoading(false);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  const formattedDateTime = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Sử dụng định dạng 12 giờ
    };

    // Lấy thời gian định dạng
    const formattedTime = new Date(date)?.toLocaleString("vi-VN", options);

    // Lấy giờ để xác định buổi sáng hay tối
    const hours = new Date(date).getHours();
    const period = hours < 12 ? "Sáng" : "Chiều"; // Phân biệt sáng và chiều

    return `${formattedTime} ${period}`; // Kết hợp thời gian và phân biệt
  };
  const changeOrderStatus = (e, id) => {
    // console.log("Giá trị vừa chọn", e.target.value);
    // console.log("id sản phẩm là", id);
    setNewOrderStatus({
      id: id,
      value: e.target.value,
    });
  };

  const handleDeteleorderedProducts = async (id) => {
    setIsLoading(true);
    try {
      console.log("id", id);
      await deteleorderedProducts(id);
      toast.success("Xóa đơn hàng thành công");
      fetchData();
    } catch (err) {
      console.log("Có lỗi khi xóa đơn hàng bên fe", err);
      toast.error("Có lỗi");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleShowScroll=(id)=>{

  // }
  const handleChangeAdd = (value, id) => {
    setNewAdd({ id, value });
  };

  const handleChangePhone = (value, id) => {
    setNewPhone({ id, value });
  };
  const handleUpdate = async (item1) => {
    console.log("a");
    if (!newOrderStatus) {
      newOrderStatus = { id: item1.id, value: item1.orderStatus };
      setNewOrderStatus({ ...newOrderStatus });
    }
    if (!newPhone) {
      newPhone = { id: item1.id, value: item1.customerPhone };
      setNewPhone(item1.customerPhone);
    }
    if (!newAdd) {
      newAdd = { id: item1.id, value: item1.customerAddress };
      setNewAdd({ ...newAdd });
    }
    if (newOrderStatus && newPhone && newAdd) {
      let data = {
        customerPhone: newPhone,
        customerAddress: newAdd,
        orderStatus: newOrderStatus,
      };
      try {
        setIsLoading(true);
        await updateinfoOrderedProduct(data);
        toast.success("Cập nhật thông tin đơn hàng thành công.");
        await fetchData();
        setNewPhone("");
        setNewOrderStatus("");
        setNewAdd("");
      } catch (err) {
        setIsLoading(false);
        console.log("Có lỗi khi cập nhật sản phẩm", err);
        toast.error("Có lỗi.");
      } finally {
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // <th scope="col">Ngày,Tháng,Năm</th>
  // <th scope="col">Tên người nhận</th>
  // <th scope="col">Số điện thoại</th>
  // <th scope="col">Địa chỉ</th>
  // <th scope="col">Hình thức thanh toán</th>
  // <th scope="col">Trạng thái thanh toán</th>
  // <th scope="col">Tình trạng đơn hàng</th>
  // <th scope="col">Tổng tiền</th>
  // <th scope="col">Thời gian đặt</th>
  // <th scope="col">Actions</th>
  const colums = [
    {
      name: "Ngày,Tháng,Năm",
      selector: (row) => row.createdAt[2],
    },
    {
      name: "Tên người nhận",
      selector: (row) => row.customerName,
    },
    {
      name: "Số điện thoại",
      selector: (row) => row.customerPhone,
    },
    {
      name: "Địa chỉ",
      selector: (row) => row.customerAddress,
    },
    {
      name: "Hình thức thanh toán",
      selector: (row) => row.paymentMethod,
    },
    {
      name: "Trạng thái thanh toán",
      selector: (row) => row.paymentStatus,
    },
    {
      name: "Tình trạng đơn hàng",
      selector: (row) => row.orderStatus,
    },
    {
      name: "Tổng tiền",
      selector: (row) => row.totalAmount,
    },
    {
      name: "Thời gian đặt",
      selector: (row) => row.hours[0],
    },
    {
      name: "Actions",
      selector: (row) => {
        return (
          <div className="button-container">
            <button
              // style={{ minWidth: "100px" }}
              onClick={() => handleUpdate(row)}
            >
              Cập nhật
            </button>
            <button
              // style={{ minWidth: "120px" }}
              onClick={() => handleDeteleorderedProducts(row.id)}
            >
              Xóa đơn hàng
            </button>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    if (Object.keys(listOrders).length > 0) {
      let data = Object.keys(listOrders).map((item) => {
        return listOrders[item].map((item1) => {
          return {
            ...item1,
          };
        });
      });
      let newData = data.flatMap((item) => {
        return item.map((item1, index) => {
          console.log("Tháng", formattedDateTime(item1.createdAt).split(" "));
          return {
            ...item1,
            createdAt:
              index === 0 ? formattedDateTime(item1.createdAt).split(" ") : "",
            hours: formattedDateTime(item1.createdAt).split(" "),
          };
        });
      });
      console.log("data", newData);
      setNewListOrders(newData);
    }
  }, [listOrders]);
  return (
    <>
      <NavQuanLy />
      {isLoading ? (
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="spinner-border" role="status"></div>
          <div>Loading...</div>
        </div>
      ) : (
        <>
          {Object.keys(listOrders).length > 0 ? (
            <div className="container">
              <h3>Quản lý đơn hàng</h3>
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">Ngày,Tháng,Năm</th>
                    <th scope="col">Tên người nhận</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Hình thức thanh toán</th>
                    <th scope="col">Trạng thái thanh toán</th>
                    <th scope="col">Tình trạng đơn hàng</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">Thời gian đặt</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listOrders &&
                    Object.keys(listOrders).map((item, index) => {
                      return listOrders[item].map((item1, index) => {
                        return (
                          <>
                            <tr>
                              {index === 0 && (
                                <th rowSpan={listOrders[item].length}>
                                  {item}
                                </th>
                              )}
                              <td className="text-center">
                                {item1.customerName}
                              </td>
                              <td className="text-center">
                                <input
                                  style={{ width: "100px", border: "none" }}
                                  value={
                                    newPhone.id === item1.id
                                      ? newPhone.value
                                      : item1.customerPhone
                                  }
                                  onChange={(e) =>
                                    handleChangePhone(e.target.value, item1.id)
                                  }
                                />
                              </td>
                              <td>
                                <textarea
                                  onChange={(e) =>
                                    handleChangeAdd(e.target.value, item1.id)
                                  }
                                  style={{
                                    border: "none",
                                    minWidth: "170px",

                                    overflowY: `${showScroll && showScroll === item1.id ? "auto" : "hidden"}`,
                                  }}
                                  onMouseEnter={() => setShowScroll(item1.id)}
                                  onMouseLeave={() => setShowScroll("")}
                                >
                                  {newAdd && newAdd.id === item1.id
                                    ? newAdd.value
                                    : item1.customerAddress}
                                </textarea>
                              </td>

                              <td className="text-center">
                                {item1.paymentMethod}
                              </td>
                              <td className="text-center">
                                {item1.paymentStatus}
                              </td>
                              <td className="text-center">
                                <select
                                  value={
                                    (newOrderStatus &&
                                      newOrderStatus.id === item1.id &&
                                      newOrderStatus.value) ||
                                    item1.orderStatus
                                  }
                                  onChange={(e) =>
                                    changeOrderStatus(e, item1.id)
                                  }
                                  style={{ border: "none", outline: "none" }}
                                >
                                  <option value="pending">pending</option>
                                  <option value="completed">completed</option>
                                  <option value="failed">failed</option>
                                </select>
                              </td>
                              <td className="text-center">
                                {formatPrice(item1.totalAmount)}
                              </td>
                              <td className="text-center">
                                {
                                  formattedDateTime(item1.createdAt).split(
                                    " "
                                  )[0]
                                }
                              </td>
                              <td>
                                <div
                                  className="d-flex align-items-center"
                                  style={{ flexGrow: 1 }}
                                >
                                  <button
                                    style={{ minWidth: "100px" }}
                                    onClick={() => handleUpdate(item1)}
                                  >
                                    Cập nhật
                                  </button>
                                  <button
                                    style={{ minWidth: "120px" }}
                                    onClick={() =>
                                      handleDeteleorderedProducts(item1.id)
                                    }
                                  >
                                    Xóa đơn hàng
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      });
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            <h3>Không có đơn hàng nào</h3>
          )}
        </>
      )}
    </>
  );
};

export default ManageOrder;
