import { where } from "sequelize";
import db from "../../models";
const createSize = async (name) => {
  try {
    let result = await db.Size.findOne({
      where: {
        name: name,
      },
    });

    if (result) {
      return {
        errCode: 0,
        errMess: "Size đã có.Vui lòng thêm size khác",
      };
    } else {
      await db.Size.create({
        name: name,
      });
      return {
        errCode: 0,
        errMess: "Tạo Size thành công.",
      };
    }
  } catch (err) {
    console.log("Lỗi tạo size bên backend", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const getAllSizes = async () => {
  try {
    let result = await db.Size.findAll();
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi phía bên server khi lấy tất cả các size", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};
module.exports = {
  createSize,
  getAllSizes,
};
