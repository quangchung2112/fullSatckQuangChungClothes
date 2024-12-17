//https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
import axios from "axios";
import { constants } from "os";
require("dotenv").config();
const crypto = require("crypto");

const accessKey = "F8BBA842ECF85";
const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
const partnerCode = "MOMO";
const redirectUrl = "http://localhost:3000/shoppingCart";
const ipnUrl = "https://c2a4-42-118-202-98.ngrok-free.app/ipn";
const requestType = "payWithMethod";
const paymentCode = process.env.PAYMENT_CODE;
const orderGroupId = "";
const autoCapture = true;
const lang = "vi";
const extraData = "";

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

const sendToClients = (data) => {
  console.log("nhận dữ liệu guwe về client", data);
  wss.clients.forEach((client) => {
    console.log("Có kết nối từ clinet ko", client);
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

const paymentMoMo = async (req, res) => {
  const orderInfo = req.body.orderInfo;
  const orderId = req.body.orderId;
  const amount = req.body.amount;
  const requestId = orderId;

  const timeStamp = Date.now().toString();

  var rawSignature =
    "accessKey=" +
    accessKey +
    "&amount=" +
    amount +
    "&extraData=" +
    extraData +
    "&ipnUrl=" +
    ipnUrl +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&partnerCode=" +
    partnerCode +
    "&redirectUrl=" +
    redirectUrl +
    "&requestId=" +
    requestId +
    "&requestType=" +
    requestType;

  var signature = crypto
    .createHmac("sha256", secretKey)
    .update(rawSignature)
    .digest("hex");

  const amountValue = Number(amount);
  const requestBody = {
    partnerCode: partnerCode,
    partnerName: "Test",
    storeId: "MomoTestStore",
    requestId: requestId,
    amount: amountValue,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    lang: "vi",
    signature: signature,
    extraData,
    requestType,
  };

  try {
    let result = await axios.post(
      "https://test-payment.momo.vn/v2/gateway/api/create",
      requestBody
    );
    // console.log("Thanh toán", result.data);
    return res.status(200).json(result.data);
  } catch (err) {
    console.log("Có lỗi khi gọi thanh toán bằng momo", err.response.data);
    return res.status(500).json("Có lỗi.Vui lòng thử lại sau");
  }
};

const updateOrderStatus = async (req, res) => {
  console.log("vào đây", req.body);
  wss.on("connection", (ws) => {
    console.log("Client connected");
    // Gọi sendToClients sau khi có client kết nối
    sendToClients(req.body);
    ws.on("message", (message) => {
      console.log(`Received: ${message}`);
    });
  });

  res.status(200).json("ok");
};
module.exports = {
  paymentMoMo,
  updateOrderStatus,
};
