import { where } from "sequelize";
import db from "../../models/index";
import { raw } from "body-parser";
const addProductToShoppingCart = async (productId, currentQuantity) => {
  try {
    const [cartItem, created] = await db.shoppingcart.findOrCreate({
      where: {
        productvariantsId: productId,
      },
      defaults: {
        productvariantsId: productId,
        quantity: currentQuantity,
      },
    });
    console.log("nhận kq", cartItem);
    if (created) {
      console.log("bản ghi đã được tạo", cartItem);
      return {
        errCode: 0,
        errMess: "Sản phẩm đã được thêm thành công",
        data: cartItem,
      };
    } else {
      cartItem.quantity = cartItem.quantity + currentQuantity;
      await cartItem.save();
      console.log("bản ghi đã tồn tại và được cập nhật");
      return {
        errCode: 0,
        errMess: "Sản phẩm đã có.Cập nhật số lương",
        data: cartItem,
      };
    }
  } catch (err) {
    console.log("lỗi thêm sản phẩm vào giỏ hàng", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau",
    };
  }
};

const getALLCountInShoppingCart = async () => {
  {
    try {
      let result = await db.shoppingcart.findAll({
        raw: true,
      });

      let count = result.reduce((accumulator, currentValue, index) => {
        return currentValue.quantity + accumulator;
      }, 0);

      return {
        errCode: 0,
        errMess: "Lấy số lượng thành công",
        data: count,
      };
    } catch (err) {
      console.log("Lỗi lấy tất số lượng bên be", err);
      return {
        errCode: 1,
        errMess: "Có lỗi.Vui lòng thử lại sau.",
      };
    }
  }
};

const getAllProductInShoppingCart = async () => {
  try {
    let result = await db.shoppingcart.findAll({
      include: {
        model: db.ProductVariant,
        as: "infoInShoppingCart",
        include: [
          {
            model: db.product,
            as: "infoProduct",
          },
          {
            model: db.Color,
            as: "infoColor",
          },
          {
            model: db.size,
            as: "infoSize",
          },
        ],
      },
      nest: true,
      raw: true,
    });

    return {
      errCode: 0,
      errMess: "Lấy dữ liệu thành công",
      data: result,
    };
  } catch (err) {
    console.log("Lỗi lấy tất cả giá trị", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const updateCountProductInShoppingCart = async (vale, productvariantsId) => {
  try {
    let result = await db.shoppingcart.findOne({
      where: {
        productvariantsId: productvariantsId,
      },
    });
    if (vale === "decrease") {
      result.quantity = result.quantity - 1;
    } else {
      result.quantity = result.quantity + 1;
    }
    await result.save();
    return {
      errCode: 0,
      errMess: "Update dữ liệu thành công",
    };
  } catch (err) {
    console.log("Lỗi bên phía BE cập nhật số lượng sản phẩm trong ", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const changeCountEachProductInShoppingCart = async (
  productId,
  currentQuantity
) => {
  try {
    let result = await db.shoppingcart.findOne({
      where: {
        productvariantsId: productId,
      },
    });

    result.quantity = currentQuantity;
    await result.save();
    return {
      errCode: 0,
      errMess: "Cập nhật số lượng của sản phẩm thành công.",
    };
  } catch (err) {
    console.log("Lỗi ở phía BE khi thay đổi số lượng của 1 sản phẩm", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau",
    };
  }
};

const deleteProductInShoppingCart = async (productId) => {
  try {
    await db.shoppingcart.destroy({
      where: {
        productvariantsId: productId,
      },
    });
    return {
      errCode: 0,
      errMess: "Xóa sản phẩm thành công.",
    };
  } catch (err) {
    console.log("Lỗi phía be xóa sản phẩm trong giỏ hàng", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau",
    };
  }
};
module.exports = {
  addProductToShoppingCart,
  getALLCountInShoppingCart,
  getAllProductInShoppingCart,
  updateCountProductInShoppingCart,
  changeCountEachProductInShoppingCart,
  deleteProductInShoppingCart,
};
