// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { protectedUrl } from "../../service/API";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";
// import { useDispatch } from "react-redux";
// import { logout } from "../../config/redux/slice/userSlice";
// const ProtectUrl = ({ children }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const navigate = useNavigate();
//   const [listUrls, setListUrls] = useState([]);
//   const currentUrl = window.location.pathname;
//   const [loading, setLoading] = useState(true);
//   const dispath = useDispatch();
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     } else {
//       setLoading(true);
//       let fetchProtectedUrl = async () => {
//         try {
//           let result = await protectedUrl();

//           setListUrls(result.data.role_urls);
//         } catch (err) {
//           toast(err.response.data);
//           dispath(logout());

//           navigate("/login");
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchProtectedUrl();
//     }
//   }, [isAuthenticated, navigate, dispath, children]);

//   return (
//     <>
//       {!loading ? (
//         listUrls.some((url) => url.url === currentUrl) ? (
//           children
//         ) : (
//           <h2>Bạn không có quyền truy cập</h2>
//         )
//       ) : (
//         <div className="text-center">
//           <Spinner animation="border" />
//           <p>Đang tải dữ liệu...</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProtectUrl;
