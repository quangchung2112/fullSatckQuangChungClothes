import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

// export const createToken = ({ email, password }) => {
//   return jwt.sign(
//     {
//       exp: Math.floor(Date.now() / 1000) + 60 * 60,
//       data: {
//         email,
//         password,
//       },
//     },
//     process.env.JWT_SECRET
//   );
// };

// export const veryToken = (token) => {
//   try {
//     let decode = jwt.verify(token, process.env.JWT_SECRET);
//     return decode;
//   } catch (err) {
//     throw err; // Ném lỗi ra ngoài
//   }
// };

// export const refreshToken = ({ email, password }) => {
//   return jwt.sign(
//     {
//       exp: Math.floor(Date.now() / 1000) + 60 * 60,
//       data: {
//         email,
//         password,
//       },
//     },
//     process.env.REFRESH_SECRET
//   );
// };

export const createToken = ({ email, password, roleId }) => {
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        email,
        password,
        roleId,
      },
    },
    process.env.SECRET
  );
};

export const verifyToken = (token) => {
  try {
    var decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (err) {
    console.log("có lỗi bên xác thực token", err);
    throw err;
  }
};
