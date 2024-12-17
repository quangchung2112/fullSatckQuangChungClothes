import { veryToken } from "../config/json/configJSON";
import db from "../models";
import { checkPassword } from "../service/api/Users/index";
const protectUrl = async (req, res) => {
  console.log("Có gọi ko");
  let authHeader = req.headers["authorization"];
  if (authHeader) {
    let token = authHeader.split(" ")[1];
    try {
      let dataDecode = veryToken(token);
      let { email, password } = dataDecode.data;
      try {
        const user = await db.User.findOne({
          where: {
            email: email,
          },
        });
        console.log(user);
        if (user) {
          let checkPass = await checkPassword(password, user.password);
          if (checkPass) {
            const urlRole = await db.Role.findOne({
              where: {
                id: user.roleId,
              },
              attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
              },
              include: [
                {
                  model: db.Url,
                  as: "role_urls",
                },
              ],
              nest: true,
            });
            res.status(200).json(urlRole);
          } else {
            res.status(401).json("Tài khoản hoặc mật khẩu không đúng");
          }
        } else {
          res.status(404).json("Không tìm thấy người dùng");
        }
      } catch (err) {
        console.log(err);
        res.status(500).json("Đã xảy ra lỗi trên server.Xin thử lại sau.");
      }
    } catch (err) {
      res.status(401).json("Token hết hạn.Vui lòng đăng nhập lại");
    }
  } else {
    // console.log("không có token");
    res.status(401).json("Không có token truyền lên");
  }
};
export default protectUrl;
