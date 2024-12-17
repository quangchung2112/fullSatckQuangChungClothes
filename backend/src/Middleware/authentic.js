// import { where } from "sequelize";

// import { veryToken } from "../config/json/configJSON";
// import db from "../models";
// import { emit } from "nodemon";
// import { raw } from "body-parser";
// import { checkPassword } from "../service/api/Users/index";

// export const authenticate = (req, res, next) => {
//   let authHeader = req.headers["authorization"];
//   if (authHeader) {
//     let token = authHeader.split(" ")[1];
//     try {
//       let decode = veryToken(token);
//       req.decode = decode;
//       next();
//     } catch (err) {
//       if (err.name === "TokenExpiredError") {
//         return res
//           .status(401)
//           .json("Token đã hết hạn. Vui lòng đăng nhập lại.");
//       }
//       return res.status(401).json("Token không hợp lệ.Vui lòng thử lại");
//     }
//   } else {
//     console.log("không có token");
//     res.status(401).json("Không có token.Vui lòng đăng nhập.");
//   }
// };

// export const checkAuthoziration = async (req, res, next) => {
//   let dataDecode = req.decode;
//   let { email, password } = dataDecode.data;
//   try {
//     const user = await db.User.findOne({
//       where: {
//         email: email,
//       },
//     });
//     if (user) {
//       let checkPass = await checkPassword(password, user.password);
//       if (checkPass) {
//         const urlRole = await db.Role.findOne({
//           where: {
//             id: user.roleId,
//           },
//           include: [
//             {
//               model: db.Url,
//               as: "role_urls",
//             },
//           ],
//           nest: true,
//         });
//         req.urlRole = urlRole;

//         next();
//       } else {
//         res.status(401).json("Tài khoản hoặc mật khẩu không đúng");
//       }
//     } else {
//       res.status(404).json("Không tìm thấy người dùng");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json("Đã xảy ra lỗi trên server.Xin thử lại sau.");
//   }
// };

import db from "../models";
import { verifyToken } from "../config/json/configJSON";
import { where } from "sequelize";
import { raw } from "body-parser";
const authenticate = async (req, res) => {
  const pathName = req.body.pathName;
  // console.log("Đường dẫn", pathName);
  // const token = req.headers["authorization"].split(" ")[1];
  const token = req.cookies.token; // Lấy token từ cookie
  console.log("nhận lại", token);
  if (!token) {
    res.status(401).json("Không có quyền truy cập");
  } else {
    try {
      let decode = await verifyToken(token);
      console.log("decode", decode);
      req.user = decode.data;

      let user = await db.accountManagement.findOne({
        where: {
          email: req.user?.email,
          password: req.user?.password,
          roleId: req.user?.roleId,
        },
        include: [
          {
            model: db.role,
            as: "role",
            include: {
              model: db.role_permissions,
              as: "permissions",
            },
          },
        ],
        nest: true,
      });
      // console.log("a", user?.role?.permissions);
      let accessed = user?.role?.permissions.some((i) => i.url === pathName);
      console.log("truy cập", accessed);
      res.status(200).json(accessed);
    } catch (err) {
      console.log("Có lỗi khi xác thực token bên BE", err);
      res.status(403).json("Token không hợp lệ");
    }
  }
};

module.exports = {
  authenticate,
};
