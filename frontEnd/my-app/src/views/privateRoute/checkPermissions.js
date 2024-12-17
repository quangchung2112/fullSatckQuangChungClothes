import { useEffect, useState } from "react";
import { checkPermissions } from "../../service/API";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../config/redux/slice/userSlice";
import Cookies from "js-cookie";
import { Link, useLocation } from "react-router-dom";
const CheckPermissions = ({ path, children }) => {
  const dispatch = useDispatch();
  const [isAccessed, setIsAccessed] = useState(false);
  //   console.log("token trong cookie", Cookies.get("token"));
  const location = useLocation();
  const pathName = location.pathname;
  // console.log(pathName);
  const fecthData = async () => {
    try {
      let nhan = await checkPermissions(pathName);
      //   if (nhan && nhan.data) {
      // setIsAccessed(nhan.data);
      //   }
      // console.log("nhận", nhan);
      setIsAccessed(nhan.data);
    } catch (err) {
      console.log("có lỗi phần xác thực quyền truy cập", err);
      //   if (err.response.status === 403) {
      toast.warning("Vui lòng đăng nhập lại");
      dispatch(logout());
      //   }
      //   if (err.response.status === 401) {
      //     toast.warning("Không có quyền truy cập");
      //     dispatch(logout());
      //   }
    }
  };
  useEffect(() => {
    fecthData();
  });

  return isAccessed ? children : <h1>Bạn không có quyền truy cập</h1>;
};

export default CheckPermissions;
