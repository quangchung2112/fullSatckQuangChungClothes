import { where } from "sequelize";
import db from "../../models";
const createCategory = async (name) => {
  try {
    let result = await db.Category.findOne({
      where: {
        name: name,
      },
    });
    if (result) {
      return {
        errCode: 0,
        errMess: "Danh mục đã có.",
      };
    } else {
      await db.Category.create({
        name: name,
      });
      return {
        errCode: 0,
        errMess: "Tạo thành công",
      };
    }
  } catch (err) {
    console.log("Lỗi bên backend", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui Lòng Thử lại sau",
    };
  }
};

const getAllCategory = async () => {
  try {
    let result = await db.Category.findAll();
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi bên phía backend lấy category", err);
    return {
      errCode: 1,
      errMess: "Vui lòng thử lại sau",
    };
  }
};

const deleteCategory = async (id) => {
  try {
    let result = await db.Category.findOne({
      where: {
        id: id,
      },
    });
    await result.destroy();
    return {
      errCode: 0,
      errMess: "Xóa thành công",
    };
  } catch (err) {
    console.log("Lỗi xóa danh mục sản phẩm", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const updateCategory = async (id, name) => {
  console.log("---------------------------------", "id", id, "name", name);
  try {
    let result = await db.Category.findOne({
      where: {
        id: id,
      },
    });
    result.name = name;
    await result.save();
    return {
      errCode: 0,
      errMess: "Cập nhật thành công",
    };
  } catch (err) {
    console.log("Lỗi cập nhật danh mục sản phẩm", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};
module.exports = {
  createCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
};
