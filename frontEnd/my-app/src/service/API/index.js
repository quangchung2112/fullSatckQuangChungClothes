import axios from "axios";
import axiosInstance from "../../config/axios";
import { data } from "framer-motion/client";

// export const createNewUser = (data) => {
//   return axiosInstance.post("/api/createUsers", {
//     data,
//   });
// };

// export const getAllUsers = (currentUrl) => {
//   return axiosInstance.get("/api/allUsers", {});
// };

// export const deleteUser = (user) => {
//   return axiosInstance.delete(`/api/delete/${user.id}`, {
//     data: { user },
//   });
// };

// export const loginUser = (user) => {
//   return axiosInstance.post("/api/login", {
//     user,
//   });
// };

// export const protectedUrl = () => {
//   return axiosInstance.get("/api/protectUrl");
// };

// //tạo mới khóa học

// export const createCourse = (data) => {
//   return axiosInstance.post("/api/createCourse", { data });
// };

// //lấy tất cả khóa học
// export const getAllCourses = () => {
//   return axiosInstance.get("/api/fetchAllCourse");
// };

// //add thêm sản phẩm vào giỏ hàng
// export const addCart = (data) => {
//   return axiosInstance.post("/api/addCart", {
//     data,
//   });
// };

// //Lấy số lượng trong giỏ hàng

// export const countInCart = (userId) => {
//   return axiosInstance.post("/api/countInCart", {
//     userId,
//   });
// };

// //Cập nhatah thông tin trong giỏ hàng
// export const updateShoppingCart = (idShoppingCart, count) => {
//   return axiosInstance.post("/api/updateShoppingCart", {
//     data: {
//       idShoppingCart,
//       count,
//     },
//   });
// };

// //thêm sản phẩm vào đơn hành

// export const addItemOrder = (userId, courseId, count) => {
//   return axiosInstance.post("/api/addItemOrder", {
//     userId,
//     courseId,
//     count,
//   });
// };

export const createColor = (color, hex) => {
  return axiosInstance.post("/product/manage_colors", {
    color,
    hex,
  });
};

export const getAllColors = () => {
  return axiosInstance.get("/product/get-all-colors");
};

export const createSize = (name) => {
  return axiosInstance.post("/product/create_size", {
    name: name,
  });
};

export const getAllSizes = () => {
  return axiosInstance.get("/product/get-all-sizes");
};

export const createCategory = (name) => {
  return axiosInstance.post("/product/create_category", {
    name: name,
  });
};
export const getAllCategory = () => {
  return axiosInstance.get("/product/get_all_categorys");
};

export const createProduct = (formData) => {
  return axiosInstance.post("/product/create_product", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Đảm bảo Content-Type là multipart/form-data
    },
  });
};

export const getAllProducts = () => {
  return axiosInstance.get("/product/get_all_products");
};

export const getAllGender = () => {
  return axiosInstance.get("/get_all_product");
};

export const getAllProductByCategory = (
  nameCategory,
  gender,
  limit,
  offSet,
  color,
  size
) => {
  return axiosInstance.post("/get_products_category_gender", {
    nameCategory,
    gender,
    limit,
    offSet,
    color,
    size,
  });
};

//api thêm sản phẩm vào giỏ hàng
export const addProductToShoppingCart = (currentQuantity, productId) => {
  return axiosInstance.post("/add_product_shoppingcart", {
    productId: productId,
    currentQuantity: currentQuantity,
  });
};

//api lấy số lượng tất cả sản phẩm trong giỏ hàng
export const getALLCountInShoppingCart = () => {
  return axiosInstance.get("/get_all_count_inshoppingcart");
};

//lấy tất cả sản phẩm trong giỏ hàng
export const getAllProductInShoppingCart = () => {
  return axiosInstance.get("/get_all_product_inShoppingCart");
};

//cập nhập lại số lượng sản phẩm trong giỏ hàng
export const updateProductInShoppingCart = (value, productId) => {
  return axiosInstance.post("/update_count_product_inShoppingCart", {
    value: value,
    productId: productId,
  });
};

//thay đổi số lượng của một sản phẩm trog giỏ hàng

export const changeCountEachProductInShoppingCart = (
  currentQuantity,
  productId
) => {
  return axiosInstance.post("/change_count_each_product_shoppingCart", {
    currentQuantity: currentQuantity,
    productId: productId,
  });
};

//xóa sản phẩm trong giỏ hàng khi giá trị vẻ 1
export const deleteProductInShoppingCart = (productId) => {
  return axiosInstance.post("/delete_product_inShoppingCart", {
    productId: productId,
  });
};

//lấy tất cả sản phẩm theo gender
export const getAllProductsByGender = (nameCategory, gender, limit, offSet) => {
  return axiosInstance.post("/get_all_products_by_gender", {
    nameCategory,
    gender: gender,
    limit,
    offSet,
  });
};

//lấy thông tin sản phẩm theo id
export const getProductsById = (productId) => {
  return axiosInstance.post("/get_products_byId", {
    productId: productId,
  });
};

//lưu thông tin sản phẩm đã đặt vào trong giỏ hàng
export const saveOrderedProduct = (data) => {
  return axiosInstance.post("/save_ordered_product", {
    data,
  });
};

//lấy thông tin sản phẩm theo id
export const getAllProductsById = (productId) => {
  return axiosInstance.post("/get_all_products_byId", {
    productId: productId,
  });
};

//thanh toán bằng momo
export const payWithMoMo = (data) => {
  return axiosInstance.post("/api/create-payment-momo", data);
};

//cập nhật đơn hàng
export const updateOrderedProduct = (data) => {
  return axiosInstance.post("/update_ordered_product", data);
};

//login để vào route riêng tư
export const LoginAccess = (email, password) => {
  return axiosInstance.post("/login", {
    email,
    password,
  });
};

//kiểm tra quyền hạn
export const checkPermissions = (pathName) => {
  return axiosInstance.post("/check_permissions", {
    pathName,
  });
};

//cập nhật thông tin sản phẩm
export const updateproductVariants = (data) => {
  return axiosInstance.post("/update_productVariants", data);
};

//lấy tất cả đơn hàng
export const getAllOrder = () => {
  return axiosInstance.get("/getAllOrders");
};

//xóa đơn hàng
export const deteleorderedProducts = (id) => {
  return axiosInstance.post("/deteleorderedProducts", {
    id: id,
  });
};

//cập nhật thông tin đơn hàng đã đặt
export const updateinfoOrderedProduct = (data) => {
  return axiosInstance.post("/updateinfoOrderedProduct", data);
};

//lấy sản phẩm mới nhất
export const getAllNewProducts = (offset, limit, chia, color, size) => {
  return axiosInstance.post("/get_all_newProducts", {
    offset: offset,
    limit: limit,
    chia: chia,
    color: color,
    size: size,
  });
};

//xóa danh mục sản phẩm

export const deleteCategory = (id) => {
  return axiosInstance.post("/delete_category", { id });
};

//cập nhật danh mục sản phẩm
export const updateCategory = (id, name) => {
  return axiosInstance.post("/update_category", { id: id, name: name });
};

//xóa sản phẩm
export const deleteProduct = (id, productId) => {
  return axiosInstance.post("/delete_product", {
    id: id,
    productId: productId,
  });
};
