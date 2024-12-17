// import { Button, Container, Row } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import "./createUsers.scss";
// import { createNewUser } from "../../service/API";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import _ from "lodash";

// const CreateUsers = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPass, setconfirmPass] = useState("");
//   const [isVaild, setIsValid] = useState(true);
//   const [isEmpty, setIsEmpty] = useState({
//     name: "",
//     isPass: true,
//   });
//   const [errEmail, setErrEmail] = useState("");
//   const [errPass, setErrPass] = useState("");

//   //Kiếm tra email có hợp lệ ko
//   const handleValideEmail = (email) => {
//     const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//     return isValidEmail.test(String(email).toLowerCase());
//   };
//   //Kiểm tra password có hợp lệ ko
//   const handleValidePass = (password) => {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumbers = /\d/.test(password);
//     const hasSpecialChars = /[!@#$%^&*]/.test(password);
//     return (
//       password.length >= minLength &&
//       hasUpperCase &&
//       hasLowerCase &&
//       hasNumbers &&
//       hasSpecialChars
//     );
//   };
//   //Kiểm tra tất cả các ô input có trống không
//   const passAll = (data) => {
//     let isPass = true;
//     let name = "";
//     let result = data;
//     for (const [key, value] of Object.entries(result)) {
//       if (_.isEmpty(value)) {
//         isPass = false;
//         name = key;
//         break;
//       }
//     }
//     return {
//       name,
//       isPass,
//     };
//   };
//   //So sánh nhập lại mật khẩu có khớp ko
//   const comparsePass = (value, name) => {
//     if (name === "password") {
//       if (value === confirmPass) {
//         setIsValid(true);
//       } else {
//         setIsValid(false);
//       }
//     } else {
//       if (value === password) {
//         setIsValid(true);
//       } else {
//         setIsValid(false);
//       }
//     }
//   };

//   //hàm xử lý tạo user
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let data = {
//       name,
//       email,
//       password,
//       confirmPass,
//     };
//     console.log("Dữ liệu", data);
//     let result = passAll(data);

//     if (result && result.isPass === true) {
//       setIsEmpty({ ...isEmpty, name: "", isEmpty: true });
//       let isVaildEmail = handleValideEmail(email);
//       let isVaildPass = handleValidePass(password);

//       if (!isVaildEmail) {
//         setErrEmail("Nhập email không đúng định dạng.");
//         setIsEmpty({
//           name: "email",
//           isPass: false,
//         });
//       } else {
//         if (!isVaildPass) {
//           setErrPass(
//             "Mật khẩu phải từ 8 kí tự trở lên bao gồm chữ viết hoa,chữ thường,số và kí tự đặc biệt"
//           );
//           setIsEmpty({
//             name: "password",
//             isPass: false,
//           });
//         }
//       }

//       if (isVaildEmail && isVaildPass && isVaild) {
//         setIsEmpty({
//           name: "",
//           isPass: true,
//         });
//         try {
//           let info = await createNewUser(data);
//           if (+info?.data?.errCode === 0) {
//             toast.success("Tạo User thành công.");
//             setName("");
//             setEmail("");
//             setPassword("");
//             setconfirmPass("");
//           } else {
//             toast.error(result.errMess);
//           }
//         } catch (err) {
//           console.log("Lỗi tạo user", err);
//           toast.error(err.response.data.errMess);
//         }
//       }
//     } else {
//       setIsEmpty({ ...isEmpty, name: result.name, isPass: false });
//     }
//   };

//   return (
//     <>
//       <Container style={{ height: "100vh" }}>
//         <Row className="h-100">
//           <div className="d-flex justify-content-center align-items-center my-5 ">
//             <Form
//               onSubmit={(e) => handleSubmit(e)}
//               className="w-50 form-register"
//             >
//               <Form.Group className="mb-3">
//                 <Form.Label>Tên người dùng</Form.Label>
//                 <Form.Control
//                   value={name}
//                   type="text"
//                   onChange={(e) => setName(e.target.value)}
//                   isInvalid={isEmpty.name === "name" ? true : false}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   value={email}
//                   type="text"
//                   onChange={(e) => setEmail(e.target.value)}
//                   isInvalid={isEmpty.name === "email" ? true : false}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errEmail}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Mật khẩu</Form.Label>
//                 <Form.Control
//                   value={password}
//                   type="password"
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                     comparsePass(e.target.value, "password");
//                   }}
//                   isInvalid={isEmpty.name === "password" ? true : false}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errPass}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label>Nhập lại mật khẩu</Form.Label>
//                 <Form.Control
//                   value={confirmPass}
//                   type="password"
//                   isValid={isVaild ? true : false}
//                   isInvalid={!isVaild ? true : false}
//                   onChange={(e) => {
//                     setconfirmPass(e.target.value);
//                     comparsePass(e.target.value, "confirmPass");
//                   }}
//                 />
//               </Form.Group>
//               <div className="d-flex justify-content-center ">
//                 <Button type="submit" className="w-50">
//                   Tạo mới
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default CreateUsers;
