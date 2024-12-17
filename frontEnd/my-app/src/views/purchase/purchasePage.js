// // src/PurchasePage.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PurchasePage.scss";
// import { useLocation } from "react-router-dom";

// const PurchasePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const product = location.state?.product; // Lấy sản phẩm từ state

//   const [quantity, setQuantity] = useState(1); // Trạng thái số lượng
//   const [isProductRemoved, setIsProductRemoved] = useState(false); // Trạng thái xóa sản phẩm

//   const handleBuyNow = () => {
//     if (isProductRemoved) {
//       alert("Sản phẩm đã bị xóa. Không thể đặt hàng.");
//       return;
//     }
//     // Điều hướng đến trang thanh toán với sản phẩm
//     navigate("/checkout", {
//       state: {
//         product: {
//           ...product,
//           quantity, // Thêm số lượng vào thông tin sản phẩm
//         },
//       },
//     });
//   };

//   const handleRemove = () => {
//     // Cập nhật trạng thái xóa sản phẩm
//     setIsProductRemoved(true);
//     alert("Sản phẩm đã được xóa khỏi giỏ hàng.");
//   };

//   if (isProductRemoved) {
//     return <p>Sản phẩm đã bị xóa khỏi giỏ hàng.</p>;
//   }

//   return (
//     <div className="purchase-container">
//       <h1 className="page-title">Trang Mua Ngay</h1>
//       <table className="purchase-table">
//         <thead>
//           <tr>
//             <th>Hình Ảnh</th>
//             <th>Tên Sản Phẩm</th>
//             <th>Giá</th>
//             <th>Số Lượng</th>
//             <th>Tổng</th>
//             <th>Hành Động</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="product-image"
//               />
//             </td>
//             <td>{product.name}</td>
//             <td>${product.price}</td>
//             <td>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 className="quantity-input"
//               />
//             </td>
//             <td>${(product.price * quantity).toFixed(2)}</td>
//             <td>
//               <button className="remove-button" onClick={handleRemove}>
//                 Xóa
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <button className="buy-button" onClick={handleBuyNow}>
//         Xác Nhận Đặt Hàng
//       </button>
//     </div>
//   );
// };

// export default PurchasePage;
