import {
  createCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
} from "../../../service/apiCategory/index";
const handleCreateCategory = async (req, res) => {
  let { name } = req.body;

  let result = await createCategory(name);

  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllCategory = async (req, res) => {
  let result = await getAllCategory();
  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleDeleteCategory = async (req, res) => {
  let id = req.body.id;
  console.log("id", id);
  let result = await deleteCategory(id);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleUpdateCategory = async (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  // console.log("id", id);
  let result = await updateCategory(id, name);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};
module.exports = {
  handleCreateCategory,
  handleGetAllCategory,
  handleDeleteCategory,
  handleUpdateCategory,
};
