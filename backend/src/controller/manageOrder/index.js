import {
  saveOrderedProduct,
  updateOrderedProduct,
  getAllOrder,
  deteleorderedProducts,
  updateinfoOrderedProduct,
} from "../../service/apiOrder/index";
const handleSaveOrderedProduct = async (req, res) => {
  let { data } = req.body;
  let result = await saveOrderedProduct(data);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleUpdateOrderedProduct = async (req, res) => {
  let data = req.body;
  let result = await updateOrderedProduct(data);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllOrder = async (req, res) => {
  let result = await getAllOrder();
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleDeteleorderedProducts = async (req, res) => {
  const id = req.body.id;
  // console.log("id cóa", id);
  let result = await deteleorderedProducts(id);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleUpdateinfoOrderedProduct = async (req, res) => {
  let data = req.body;
  console.log("Nhạn data bên mang", data);
  let result = await updateinfoOrderedProduct(data);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};
module.exports = {
  handleSaveOrderedProduct,
  handleUpdateOrderedProduct,
  handleGetAllOrder,
  handleDeteleorderedProducts,
  handleUpdateinfoOrderedProduct,
};
