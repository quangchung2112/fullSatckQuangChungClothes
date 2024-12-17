import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Login.scss";
import { loginUser } from "../../service/API";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../config/redux/slice/userSlice";
import { useSelector } from "react-redux";
import { LoginAccess } from "../../service/API";
import { useLocation } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await LoginAccess(value.email, value.password);
      console.log("nhận lại giá trị", result);
      if (result.data.errCode === 0) {
        dispatch(login({ user: value }));
        navigate("/product/manage_products");
      } else {
        toast.error("Tài khoản hoặc mật khẩu không đúng");
      }
    } catch (err) {
      console.log("Có lỗi bên Fe khi đăng nhập", err);
    }
  };

  // console.log("value", value);
  useEffect(() => {}, []);
  return (
    <>
      <Container style={{ height: "100vh", color: "#f2f4f7" }}>
        <Row className="justify-content-center align-items-center h-100">
          <Col xs={12} md={6}>
            <div>
              <h2 style={{ color: "#1e6dff" }}>Quang Chung Clothes</h2>
              {/* <h4 style={{ color: "black" }}>
                Giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
                bạn
              </h4> */}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Form className="form-login">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setValue({ ...value, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  type="password"
                  placeholder="Mật khẩu"
                  onChange={(e) =>
                    setValue({ ...value, password: e.target.value })
                  }
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                onClick={(e) => handleLogin(e)}
              >
                Đăng nhập
              </Button>
              <hr style={{ color: "green" }}></hr>
              <div className="d-flex justify-content-center">
                {/* <Button
                  //   onClick={handleRegister}
                  variant="primary"
                  style={{ width: "50%", backgroundColor: "#42b72a" }}
                >
                  Tạo tài khoản mới
                </Button> */}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
