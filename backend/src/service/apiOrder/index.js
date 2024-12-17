import { where } from "sequelize";
import db, { Sequelize } from "../../models";
const saveOrderedProduct = async (data) => {
  try {
    //Tạo đơn hàng
    let resultOrder = await db.order.create({
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      customerEmail: data.customerEmail,
      customerAddress: data.customerAddress,
      totalAmount: data.totalAmount,
      orderId: data.orderId,
      paymentStatus: data.paymentStatus,
      paymentMethod: data.paymentMethod,
      orderStatus: data.orderStatus,
    });
    // Tạo danh sách các sản phẩm trong đơn hàng
    let result = data.item.map((item) => {
      return {
        orderId: resultOrder.id,
        productId: item.item.id,
        name: item.item.infoProduct.name,
        quantity: item.quantity,
        price: item.item.infoProduct.price,
      };
    });

    // Lưu danh sách sản phẩm vào bảng orderItem
    await db.orderItem.bulkCreate(result);

    //giảm số lượng khi mua hàng trong bảng
    const productsToUpdate = data.item.map((item) => ({
      productId: item.item.id,
      total: item.quantity,
    }));

    const transaction = await db.sequelize.transaction();
    try {
      const promises = productsToUpdate.map(({ productId, total }) => {
        return db.ProductVariant.update(
          {
            stock_quantity: Sequelize.literal(`stock_quantity - ${total}`),
            sold_quantity: Sequelize.literal(`sold_quantity + ${total}`),
          },
          {
            where: {
              id: productId,
            },
            transaction,
          }
        );
      });
      await Promise.all(promises);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }

    return {
      errCode: 0,
      errMess: "Thành công",
    };
  } catch (err) {
    console.log("Lỗi bên Be thêm sản phẩm và bảng order", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const updateOrderedProduct = async (data) => {
  try {
    let result = await db.order.findOne({
      where: {
        orderId: data.orderId,
      },
    });
    result.paymentStatus = data.paymentStatus;
    await result.save();
    return {
      errCode: 0,
      errMess: "Cập nhật thông tin đơn hàng thành công.",
    };
  } catch (err) {
    console.log("Có lỗi bên cập nhật đơn hàng", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const getAllOrder = async () => {
  try {
    let result = await db.order.findAll({
      order: [["createdAt", "DESC"]],
    });

    const formattedDateTime = (date) =>
      new Date(date).toLocaleString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

    //nhóm theo ngày,tháng,năm

    const groupedDate = result.reduce((acc, item) => {
      let formatDate = formattedDateTime(item.createdAt).split(" ")[1];
      if (!acc[formatDate]) {
        acc[formatDate] = [];
      }
      acc[formatDate].push(item);
      return acc;
    }, {});

    return {
      errCode: 0,
      errMess: "Lấy thông tin tất cả các đơn hàng thành công",
      data: groupedDate,
    };
  } catch (err) {
    console.log("Có lỗi khi lấy thông tin tất cả đơn hàng", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const deteleorderedProducts = async (id) => {
  try {
    let result = await db.order.findOne({
      where: {
        id: id,
      },
    });
    let resultOrderItem = await db.orderItem.findAll({
      where: {
        orderId: id,
      },
    });
    resultOrderItem.map(async (item) => {
      return await item.destroy();
    });
    Promise.all(resultOrderItem);
    await result.destroy();
    return {
      errCode: 0,
      errMess: "Xóa thành công",
    };
  } catch (err) {
    console.log("Lỗi khi xóa đơn hàng bên be", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui lòng thử lại sau.",
    };
  }
};

const updateinfoOrderedProduct = async (data) => {
  console.log("nhạn da", data);
  try {
    let result = await db.order.findOne({
      where: {
        id: data.customerAddress.id,
      },
    });
    result.customerPhone = data.customerPhone.value;
    result.customerAddress = data.customerAddress.value;
    result.orderStatus = data.orderStatus.value;
    await result.save();
    return {
      errCode: 0,
      errMess: "Cập nhật thành công",
    };
  } catch (err) {
    console.log("Cập nhật đơn hàng lỗi bên be", err);
    return {
      errCode: 1,
      errMess: "Có lỗi.Vui Lòng thử lại sau.",
    };
  }
};
module.exports = {
  saveOrderedProduct,
  updateOrderedProduct,
  getAllOrder,
  deteleorderedProducts,
  updateinfoOrderedProduct,
};
