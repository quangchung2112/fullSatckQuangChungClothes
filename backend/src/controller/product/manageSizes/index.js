import { createSize, getAllSizes } from "../../../service/apiSize/index";

const handeCreateSize = async (req, res) => {
  let { name } = req.body;

  let result = await createSize(name);

  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllSizes = async (req, res) => {
  let result = await getAllSizes();
  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

module.exports = {
  handeCreateSize,
  handleGetAllSizes,
};
