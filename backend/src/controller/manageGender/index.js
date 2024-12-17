import { getAllGender } from "../../service/apiGender/index";

const handleGetAllGenders = async (req, res) => {
  let result = await getAllGender();
  if (result.errCode == 0) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

module.exports = {
  handleGetAllGenders,
};
