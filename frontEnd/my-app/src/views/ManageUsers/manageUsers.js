// import { Container } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import { getAllUsers, deleteUser } from "../../service/API";
// import { useCallback, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logout } from "../../config/redux/slice/userSlice";
// import Spinner from "react-bootstrap/Spinner";
// const ManageUsres = () => {
//   const [listUsers, setListUsers] = useState([]);
//   const [isError, setIsError] = useState(false);
//   const navigate = useNavigate();
//   const dispathch = useDispatch();
//   const [loading, setLoading] = useState(true); // Trạng thái loading

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     try {
//       let result = await getAllUsers();
//       setListUsers(result.data);
//       setIsError(false);
//     } catch (err) {
//       setListUsers([]);
//       setIsError(true);
//       navigate("/login");
//       toast.warning("Vui lòng đăng nhập lại");
//       dispathch(logout());
//     } finally {
//       setLoading(false);
//     }
//   }, [dispathch, navigate]);

//   const handelDeleteUser = async (user) => {
//     try {
//       await deleteUser(user);
//       toast.success("User deleted successfully.");
//       await fetchData();
//     } catch (error) {
//       if (error.data.errCode === 1) {
//         toast.warning(error.data.errMess);
//       } else {
//         toast.error(error.data.errMess);
//       }
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);
//   return (
//     <>
//       <Container className="my-5">
//         {loading ? (
//           <div className="text-center">
//             <Spinner animation="border" />
//             <p>Đang tải dữ liệu...</p>
//           </div>
//         ) : (
//           <>
//             {isError && (
//               <h2 className="text-danger text-center">
//                 Bạn không có quyền truy cập
//               </h2>
//             )}
//             <h2 className="text-center">Danh sách quản lý người dùng</h2>
//             {listUsers.length === 0 ? (
//               <h2 className="text-center">
//                 Không có người dùng nào trong danh sách
//               </h2>
//             ) : (
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Email</th>
//                     <th>Name</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {listUsers.map((item, index) => (
//                     <tr key={item.id}>
//                       <td>{index + 1}</td>
//                       <td>{item.email}</td>
//                       <td>{item.name}</td>
//                       <td>
//                         <button onClick={() => handelDeleteUser(item)}>
//                           Xóa
//                         </button>
//                         <button>Chỉnh sửa</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             )}
//           </>
//         )}
//       </Container>
//     </>
//   );
// };

// export default ManageUsres;
