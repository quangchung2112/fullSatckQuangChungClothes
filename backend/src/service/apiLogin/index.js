import { where } from "sequelize";
import { createToken } from "../../config/json/configJSON";
import db from "../../models";
import { emit } from "nodemon";

const logInAccessRoute = async ({ email, password }) => {
  try {
    let result = await db.accountManagement.findOne({
      where: {
        email,
        password,
      },
    });

    if (result) {
      let token = await createToken({
        email: result.email,
        password: result.password,
        roleId: result.roleId,
      });
      // console.log("--------------------------------------------");
      // console.log("Token là", token);
      // console.log("--------------------------------------------");

      return {
        errCode: 0,
        errMess: "Đăng nhập thành công",
        data: result,
        token: token,
      };
    } else {
      return {
        errCode: 1,
        errMess: "Email hoặc mật khẩu không đúng.Vui lòng kiểm tra lại.",
      };
    }
  } catch (err) {
    console.log("có lỗi khi đăng nhập bên be", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

module.exports = {
  logInAccessRoute,
};
