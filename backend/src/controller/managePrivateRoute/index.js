import { logInAccessRoute } from "../../service/apiLogin/index";
import { bodyParser } from "body-parser";

const handleLoginAccessRoute = async (req, res) => {
  let { email, password } = req.body;
  let result = await logInAccessRoute({ email, password });

  if (result.errCode == 0) {
    // console.log("kq", result.token);
    res.cookie("token", result.token, {
      httpOnly: true, // Không thể truy cập từ JavaScript
      // maxAge: 60000, // 1 phút (60000 ms)
      sameSite: "Strict", // Bảo vệ chống lại CSRF
    });
    res.status(200).json(result);
  } else if (result.errCode == 1) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

module.exports = {
  handleLoginAccessRoute,
};
