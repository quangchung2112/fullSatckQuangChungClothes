import db from "../../models";
const getAllGender = async () => {
  try {
    let result = await db.gender.findAll();
    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công.",
      data: result,
    };
  } catch (err) {
    console.log("lỗi lấy tất cả gender", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

module.exports = {
  getAllGender,
};
