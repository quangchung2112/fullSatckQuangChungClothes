import { where } from "sequelize";
import db from "../../models/index";

const createColor = async (color, hex) => {
  try {
    let result = await db.Color.findOne({
      where: {
        name: color,
        hex: hex,
      },
    });
    if (!result) {
      db.Color.create({
        name: color,
        hex: hex,
      });
      return {
        errCode: 0,
        errMess: "Tạo thành công.",
      };
    } else {
      return {
        errCode: 0,
        errMess: "Màu này có rồi",
      };
    }
  } catch (err) {
    console.log("Lỗi back end", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const getAllColors = async () => {
  try {
    let result = await db.Color.findAll();
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công.",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi bên backend phần lấy tất cả các màu", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};
module.exports = {
  createColor,
  getAllColors,
};
