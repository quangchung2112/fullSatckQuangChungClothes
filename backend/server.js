import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import initRouter from "./src/initRouter";
import connectDB from "./src/config/connectDB";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(bodyParser.json({ limit: "10mb" })); // Giới hạn kích thước yêu cầu là 10 MB
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Chỉ cho phép origin này
    methods: ["GET", "POST", "PUT", "DELETE"], // Các phương thức được phép
    allowedHeaders: ["Content-Type", "Authorization"], // Các header được phép
    credentials: true, // Cho phép gửi cookie
  })
);

connectDB();

initRouter(app);

app.use((err, req, res, next) => {
  console.error("Error caught in Express: ", err.message);
  res.status(500).json({ message: "Đã có lỗi xảy ra. Vui lòng thử lại sau." });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
