import express from "express";
const router = express.Router();
import manageColors from "../controller/product/manageColors";
import manageSize from "../controller/product/manageSizes";
import manageCategory from "../controller/product/manageCategory";
import manageGender from "../controller/manageGender/index";
import { storage } from "../config/Cloundinary/storage";
import manageShoppingCart from "../controller/manageShoppingCart";
import manageOrder from "../controller/manageOrder";
import managePayMoMo from "../controller/managePayMoMo/index";
import manageAccessRoute from "../controller/managePrivateRoute";
import manageCheckPermissions from "../Middleware/authentic";
const multer = require("multer");
const upload = multer({ storage: storage });

import manageProducts from "../controller/product/index";
function initRouter(app) {
  router.get("/", (req, res) => res.send("trang home"));

  //tạo màu cho sản phẩm
  router.post("/product/manage_colors", manageColors.handleCreateColor);

  //lấy tất cả các màu
  router.get("/product/get-all-colors", manageColors.handleGetAllColors);

  //tạo size
  router.post("/product/create_size", manageSize.handeCreateSize);

  //lấy tất cả các size\
  router.get("/product/get-all-sizes", manageSize.handleGetAllSizes);

  router.post(
    "/product/create_category",

    manageCategory.handleCreateCategory
  );

  router.get("/product/get_all_categorys", manageCategory.handleGetAllCategory);

  router.post(
    "/product/create_product",
    upload.fields([{ name: "mainImage" }, { name: "images" }]),
    manageProducts.handleCreateProduct
  );

  //lấy thông tin của sản phẩm
  router.get("/product/get_all_products", manageProducts.handleGetAllProducts);

  //lấy tất cả thông tin gender
  router.get("/get_all_product", manageGender.handleGetAllGenders);

  //lấy dữ liệu sản phẩm theo danh mục
  router.post(
    "/get_products_category_gender",
    manageProducts.handleGetProductCategoryGender
  );

  //thêm sản phẩm vào giỏ hàng
  router.post(
    "/add_product_shoppingcart",
    manageShoppingCart.handleAddProductToShoppingCart
  );

  //lấy tất cả số lượng trong giỏ hàng
  router.get(
    "/get_all_count_inshoppingcart",
    manageShoppingCart.handleGetAllCountInShoppingCart
  );
  //lấy tất cả sản phẩm trong giỏ hàng
  router.get(
    "/get_all_product_inShoppingCart",
    manageShoppingCart.handleGetAllProductInShoppingCart
  );

  //cập nhật số lượng trong sản phẩm
  router.post(
    "/update_count_product_inShoppingCart",
    manageShoppingCart.handleUpdateCountProductInShoppingCart
  );

  //thay đổi số lượng một sản phẩm trong giỏ hàng
  router.post(
    "/change_count_each_product_shoppingCart",
    manageShoppingCart.handleChangeCountEachProductInShoppingCart
  );

  //xóa sản phẩm trong giở hàng khi người dùng về không
  router.post(
    "/delete_product_inShoppingCart",
    manageShoppingCart.handleDeleteProductInShoppingCart
  );

  //lấy tất cả sản phẩm

  router.post(
    "/get_all_products_by_gender",
    manageProducts.handleGetALLProductByGender
  );

  //lấy thông tin tất của sản phẩm theo id của bản thuộc tính sản phẩm
  router.post("/get_products_byId", manageProducts.handleGetProducstById);

  //thêm sản phẩm đã đặt vào giỏ hàng
  router.post("/save_ordered_product", manageOrder.handleSaveOrderedProduct);

  //lấy thông tin sản phẩm theo id từ bảng product

  router.post(
    "/get_all_products_byId",
    manageProducts.handleGetAllProducstById
  );

  //tạo api thanh toán cho momo
  router.post("/api/create-payment-momo", managePayMoMo.paymentMoMo);

  //cập nhật lại thông tin đơn hàng;
  router.post("/ipn", managePayMoMo.updateOrderStatus);

  //cập nhật thông tin đơn hàng;
  router.post(
    "/update_ordered_product",
    manageOrder.handleUpdateOrderedProduct
  );

  //đăng nhập để truy cập trang riêng tư
  router.post("/login", manageAccessRoute.handleLoginAccessRoute);

  //cập nhật thông tin của sản phẩm
  router.post(
    "/update_productVariants",
    manageProducts.handleUpdateproductVariants
  );

  //check xem đủ quyền để vào trang web ko
  router.post("/check_permissions", manageCheckPermissions.authenticate);

  //lấy thông tin tất cả đơn hàng
  router.get("/getAllOrders", manageOrder.handleGetAllOrder);

  //xóa sản phẩm trong đơn hàng

  router.post(
    "/deteleorderedProducts",
    manageOrder.handleDeteleorderedProducts
  );

  router.post(
    "/updateinfoOrderedProduct",
    manageOrder.handleUpdateinfoOrderedProduct
  );

  //lấy tất cả sản phẩm mới
  router.post("/get_all_newProducts", manageProducts.handleGetAllNewProducts);

  //xóa danh mục
  router.post("/delete_category", manageCategory.handleDeleteCategory);

  //cập nhật danh mục sản phẩm
  router.post("/update_category", manageCategory.handleUpdateCategory);

  //xóa sản phẩm
  router.post("/delete_product", manageProducts.handleDeleteProduct);

  return app.use("/", router);
}

export default initRouter;
