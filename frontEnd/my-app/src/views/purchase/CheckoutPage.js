// // src/CheckoutPage.js
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./CheckoutPage.scss";

// const CheckoutPage = () => {
//   const location = useLocation();
//   const product = location.state?.product; // Lấy sản phẩm từ state

//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleConfirmOrder = () => {
//     if (!paymentMethod) {
//       alert("Vui lòng chọn phương thức thanh toán.");
//       return;
//     }
//     alert(
//       `Đơn hàng đã được xác nhận cho sản phẩm: ${product.name} với phương thức thanh toán: ${paymentMethod}`,
//     );
//   };

//   return (
//     <div className="checkout-container">
//       <h1 className="checkout-title">Thanh Toán</h1>
//       {product ? (
//         <div className="checkout-card">
//           <h2>{product.name}</h2>
//           <p>Giá: ${product.price}</p>
//           <div className="payment-options">
//             <h3>Chọn Phương Thức Thanh Toán:</h3>
//             <label>
//               <input
//                 type="radio"
//                 value="Thanh toán khi nhận hàng"
//                 checked={paymentMethod === "Thanh toán khi nhận hàng"}
//                 onChange={() => setPaymentMethod("Thanh toán khi nhận hàng")}
//               />
//               Thanh toán khi nhận hàng
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="Chuyển khoản"
//                 checked={paymentMethod === "Chuyển khoản"}
//                 onChange={() => setPaymentMethod("Chuyển khoản")}
//               />
//               Chuyển khoản
//             </label>
//           </div>
//           <button className="confirm-button" onClick={handleConfirmOrder}>
//             Xác Nhận Đặt Hàng
//           </button>
//         </div>
//       ) : (
//         <p>Không tìm thấy sản phẩm.</p>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;
