import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { toast } from "react-toastify";
import { createCourse } from "../../service/API/index";
const CreateCourse = () => {
  const [preview, setPreview] = useState(null); // Thêm state cho preview
  const [dataCourse, setDataCourse] = useState({
    name: "",
    des: "",
    image: "",
    imageType: "",
    price: "",
  });

  const handleChangeImage = (e) => {
    if (e?.target?.files[0]) {
      const file = e.target.files[0];
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validImageTypes.includes(file.type)) {
        toast.error("Vui lòng chọn một file hình ảnh hợp lệ (JPEG, PNG, GIF)");
        setPreview(null);
        setDataCourse({ ...dataCourse, image: "", imageType: "" });
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
          const base64String = reader.result.split(",")[1];

          setDataCourse((preData) => ({
            ...preData,
            image: base64String,
            imageType: file.type,
          }));
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleChangeInput = (e, name) => {
    const value = e.target.value;
    setDataCourse((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      dataCourse.name &&
      dataCourse.des &&
      dataCourse.image &&
      dataCourse.imageType &&
      dataCourse.price
    ) {
      try {
        const priceFloat = parseFloat(dataCourse.price);
        dataCourse.price = priceFloat;
        let result = await createCourse(dataCourse);

        toast.success(result?.data?.errMess);
        setDataCourse({
          name: "",
          des: "",
          image: "",
          imageType: "",
          price: "",
        });
        setPreview("");
      } catch (err) {
        console.log("Lỗi", err.status);
        toast.error(err?.response?.data?.errMess);
      }
    } else {
      toast.warning("Bạn cần điền đầy đủ hết thông tin khi gửi");
    }
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Tên Khóa Học</Form.Label>
                <Form.Control
                  type="text"
                  value={dataCourse.name}
                  onChange={(e) => handleChangeInput(e, "name")}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="des">
                <Form.Label>Mô tả khóa học</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={dataCourse.des}
                  onChange={(e) => handleChangeInput(e, "des")}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="fileImage">
                <Form.Label>Chọn ảnh</Form.Label>
                <Form.Control
                  type="file"
                  className="d-none"
                  accept="image/*"
                  onChange={handleChangeImage}
                />
                {preview && <Image src={preview} fluid />}
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Giá </Form.Label>
                <Form.Control
                  type="text"
                  value={dataCourse.price}
                  onChange={(e) => handleChangeInput(e, "price")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateCourse;
