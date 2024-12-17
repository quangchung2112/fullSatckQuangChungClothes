import {
  createProduct,
  getAllProducts,
  getProductByCategoryGender,
  getAllProductsByGender,
  getProductById,
  getAllProductsById,
  updateproductVariants,
  getAllNewProducts,
  deleteProduct,
} from "../../service/apiProduct/index";
const CircularJSON = require("circular-json");
const handleCreateProduct = async (req, res) => {
  let data = req.body;
  let mainImage = req.files["mainImage"][0];
  let addImages = req.files["images"];
  // console.log("mainImage", mainImage);
  // console.log(
  //   "------------------------------------------------------------------"
  // );

  let result = await createProduct(data, mainImage, addImages);
  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllProducts = async (req, res) => {
  let result = await getAllProducts();
  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetProductCategoryGender = async (req, res) => {
  let { nameCategory, gender, limit, offSet, color, size } = req.body;

  let result = await getProductByCategoryGender(
    nameCategory,
    gender,
    limit,
    offSet,
    color,
    size
  );
  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetALLProductByGender = async (req, res) => {
  let gender = req.body.gender;
  let limit = req.body.limit || 6;
  let offset = req.body.offSet || 0;
  let nameCategory = req.body.nameCategory;
  console.log("limit", limit);
  console.log("offser", offset);
  let result = await getAllProductsByGender(
    nameCategory,
    gender,
    limit,
    offset
  );
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

//lấy thông tin sản phẩm theo id
const handleGetProducstById = async (req, res) => {
  let { productId } = req.body;
  let result = await getProductById(productId);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllProducstById = async (req, res) => {
  let { productId } = req.body;
  let result = await getAllProductsById(productId);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleUpdateproductVariants = async (req, res) => {
  console.log("vào cập nhâth");
  let data = req.body;
  console.log("Thông tin data gửi lên", data);
  let result = await updateproductVariants(data);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllNewProducts = async (req, res) => {
  let { offset, limit, chia, color, size } = req.body;
  // console.log("----------------------------------");
  // console.log(offset, limit);
  // console.log("----------------------------------");

  let result = await getAllNewProducts(offset, limit, chia, color, size);
  // CircularJSON.stringify(result)
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleDeleteProduct = async (req, res) => {
  let { id, productId } = req.body;
  let result = await deleteProduct(id, productId);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};
module.exports = {
  handleCreateProduct,
  handleGetAllProducts,
  handleGetProductCategoryGender,
  handleGetALLProductByGender,
  handleGetProducstById,
  handleGetAllProducstById,
  handleUpdateproductVariants,
  handleGetAllNewProducts,
  handleDeleteProduct,
};
