import { createColor, getAllColors } from "../../../service/apiColors/index";
const handleCreateColor = async (req, res) => {
  let { color, hex } = req.body;
  let result = await createColor(color, hex);
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

const handleGetAllColors = async (req, res) => {
  let result = await getAllColors();
  if (result.errCode === 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};
module.exports = {
  handleCreateColor,
  handleGetAllColors,
};
