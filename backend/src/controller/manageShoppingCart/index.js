import {
  addProductToShoppingCart,
  getALLCountInShoppingCart,
  getAllProductInShoppingCart,
  updateCountProductInShoppingCart,
  changeCountEachProductInShoppingCart,
  deleteProductInShoppingCart,
} from "../../service/apiShoppingCart";
const handleAddProductToShoppingCart = async (req, res) => {
  let { productId, currentQuantity } = req.body;
  console.log("số lượng gửi lên", currentQuantity);
  console.log("mã sản phẩm", productId);
  let result = await addProductToShoppingCart(productId, currentQuantity);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllCountInShoppingCart = async (req, res) => {
  let result = await getALLCountInShoppingCart();
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllProductInShoppingCart = async (req, res) => {
  let result = await getAllProductInShoppingCart();
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleUpdateCountProductInShoppingCart = async (req, res) => {
  let { value, productId } = req.body;
  let result = await updateCountProductInShoppingCart(value, productId);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleChangeCountEachProductInShoppingCart = async (req, res) => {
  let { productId, currentQuantity } = req.body;
  let result = await changeCountEachProductInShoppingCart(
    productId,
    currentQuantity
  );
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleDeleteProductInShoppingCart = async (req, res) => {
  let { productId } = req.body;
  console.log("------------------------------");
  console.log("nhận sản phẩm xóa", productId);
  console.log("------------------------------");
  let result = await deleteProductInShoppingCart(productId);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};
module.exports = {
  handleAddProductToShoppingCart,
  handleGetAllCountInShoppingCart,
  handleGetAllProductInShoppingCart,
  handleUpdateCountProductInShoppingCart,
  handleChangeCountEachProductInShoppingCart,
  handleDeleteProductInShoppingCart,
};
