import { useEffect, useState, useRef } from "react";
import "./manageProducts.scss";
import axios from "axios";
import NavQuanLy from "../navquanli";
import DataTable from "react-data-table-component";
import {
  getAllSizes,
  getAllColors,
  getAllCategory,
  createProduct,
  getAllProducts,
  getAllGender,
  updateproductVariants,
  deleteProduct,
} from "../../service/API";
import { toast } from "react-toastify";
import { formatPrice } from "../../shared";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import { node } from "./../../../node_modules/stylis/src/Tokenizer";
const ManageProducts = () => {
  const [listSizes, setListSizes] = useState([]);
  const [listColors, setListColors] = useState([]);
  const [listCategorys, setListCategorys] = useState([]);
  const [listImages, setListImages] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [loading, setLoading] = useState(true);
  const [listGenders, setListGenders] = useState([]);
  const [gender, setGender] = useState("");
  const [groupedProducts, setGroupedProducts] = useState({});
  const [isbestselling, setIsBestSelling] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newMainImage, setNewMainImage] = useState("");
  const [newListImages, setNewListImages] = useState("");
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(1);
  const [newDataTable, setNewDataTable] = useState("");
  let itemsPerpage = 10;
  let totalPages = 0;
  const [currentItems, setCurrentItems] = useState("");

  let idProductVariant = useRef(0);

  let groupProducts = (products) => {
    return products.reduce((acc, product, index) => {
      // console.log("product", product);
      if (!acc[product.id]) {
        acc[product.id] = {
          productId: product.id,
          items: [],
        };
      }
      acc[product.id].items.push(product);
      return acc;
    }, {});
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      let sizes = await getAllSizes();
      let colors = await getAllColors();
      let categories = await getAllCategory();
      let allProducts = await getAllProducts();
      let allGenders = await getAllGender();

      setListCategorys(categories.data.data);
      setListSizes(sizes.data.data);
      setListColors(colors.data.data);
      setListProducts(allProducts.data.data);
      setListGenders(allGenders.data.data);
    } catch (err) {
      setLoading(false);
      console.log("lỗi", err.response.data.errMess);
      const errorMessage =
        err.response && err.response.data
          ? err.response.data.errMess
          : "Đã xảy ra lỗi không xác định";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeInput = (e) => {
    const files = Array.from(e.target.files);
    let result = files.map((item) => {
      return URL.createObjectURL(item);
    });
    setListImages(result);
    setNewListImages(files);
  };

  const handleChangeMainInput = (e) => {
    const file = e.target.files[0];
    setMainImage(URL.createObjectURL(file));
    setNewMainImage(file);
  };
  const handleCreatProduct = async (e) => {
    // e.preventDefault();
    setIsUpdate(false);
    if (
      name &&
      price &&
      des &&
      category &&
      size &&
      color &&
      stockQuantity &&
      gender &&
      newListImages.length
    ) {
      handleClose();
      function capitalizeWords(str) {
        return str
          .toLowerCase() // Chuyển toàn bộ chuỗi về chữ thường
          .split(" ") // Tách chuỗi thành mảng các từ
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Chuyển chữ cái đầu mỗi từ thành chữ hoa
          .join(" "); // Gộp các từ lại thành chuỗi
      }
      let namConver = capitalizeWords(name);
      let colorConver = capitalizeWords(color);
      const formData = new FormData();
      formData.append("name", namConver.trim());
      formData.append("price", price.trim());
      formData.append("des", des.trim());
      formData.append("categoryId", category.trim());
      formData.append("sizeId", size.trim());
      formData.append("color", colorConver.trim());
      formData.append("isbestselling", isbestselling);
      formData.append("isFeatured", isFeatured);
      formData.append("isNew", isNew);
      formData.append("genderId", gender.trim());
      formData.append("stock_quantity", stockQuantity.trim());
      formData.append("mainImage", newMainImage);

      for (let i = 0; i < newListImages.length; i++) {
        formData.append("images", newListImages[i]);
      }
      try {
        setLoading(true);
        let result = await createProduct(formData);
        let allProducts = await getAllProducts();
        setListProducts(allProducts.data.data);
        // console.log("Tạo thành công sản phẩm", result);
        toast.success(result?.data?.errMess);
      } catch (err) {
        setLoading(false);
        console.log("Lỗi bên frontEnd tạo sản phẩm", err);
        toast.error(err?.response?.data?.errMess);
      } finally {
        setLoading(false);
      }

      // console.log("Gửi đi", formData);
    } else {
      toast.warning("vui lòng điền đầy đủ thông tin.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (listProducts && listProducts.length > 0) {
      // console.log("có vào");
      let grouped = groupProducts(listProducts);
      // console.log("grouded", Object.values(grouped));
      setGroupedProducts(Object.values(grouped));
    }
  }, [listProducts]);

  const handleUpdateProduct = (product) => {
    console.log("updtae", product);
    // idProductVariant.current = product.infoProduct.id;
    // setNewMainImage("");
    // setNewListImages("");
    // setIsUpdate(true);
    // setName(product.name);
    // setPrice(product.price);
    // setGender(product.infoProduct.infogender.id);
    // setCategory(product.infoCategory.id);
    // setStockQuantity(product.infoProduct.stock_quantity);
    // setSize(product.infoProduct.infoSize.id);
    // setIsBestSelling(product.isbestselling === 1 ? true : false);
    // setIsFeatured(product.isFeatured === 1 ? true : false);
    // setIsNew(product.isNew === 1 ? true : false);
    // setColor(product.infoProduct.color);
    // setDes(product.des);
    // setMainImage(product.infoProduct.mainImage);
    // setListImages(JSON.parse(product.infoProduct.images));

    idProductVariant.current = product?.id;
    setNewMainImage("");
    setNewListImages("");
    setIsUpdate(true);
    setName(product.name);
    setPrice(product.price);
    setGender(product.infoProduct.infoProduct.infogender.id);
    setCategory(product.infoProduct.infoCategory.id);
    setStockQuantity(product.stock_quantity);
    setSize(product.infoProduct.infoProduct.infoSize.id);
    setIsBestSelling(product.infoProduct.isbestselling === 1 ? true : false);
    setIsFeatured(product.infoProduct.isFeatured === 1 ? true : false);
    setIsNew(product.infoProduct.isNew === 1 ? true : false);
    setColor(product.infoProduct.infoProduct.color);
    setDes(product.infoProduct.des);
    setMainImage(product.mainImage);
    setListImages(JSON.parse(product.images));
    handleShow();
  };

  const handleUpdate = async (e) => {
    handleClose();
    e.preventDefault();
    setLoading(true);
    let urlLinkMainImage = "";
    let urlLinkListImages = [];
    if (newMainImage) {
      const formData = new FormData();
      formData.append("file", newMainImage);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append("folder", "Images_Product");
      try {
        const uploadResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        urlLinkMainImage = uploadResponse.data.url;
      } catch (error) {
        console.error("Lỗi tải lên:", error.response.data);
      }
    } else {
      console.log("ảnh ko đổi");
    }

    if (newListImages && newListImages.length > 0) {
      const uploadPromises = newListImages.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
          "upload_preset",
          process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
        );
        formData.append("folder", "Images_Product");
        try {
          const uploadResponse = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
            formData
          );
          return uploadResponse.data.url;
        } catch (error) {
          console.error("Lỗi tải lên:", error.response.data);
        }
      });

      const results = await Promise.all(uploadPromises);
      urlLinkListImages = results.filter((url) => url !== null);
    } else {
      console.log("Không thay đổi các ảnh con");
    }

    // let data = console.log("tất cả thay đổi một ảnh", mainImage);
    // console.log("tất cả thay đổi nhiều ảnh", listImages);
    let data = {
      id: idProductVariant.current,
      stock_quantity: stockQuantity,
      mainImage: urlLinkMainImage || mainImage,
      images: urlLinkListImages.length > 0 ? urlLinkListImages : listImages,
      color: color,
    };
    // console.log("data", data);
    try {
      setLoading(true);

      await updateproductVariants(data);
      let allProducts = await getAllProducts();
      setListProducts(allProducts.data.data);
      toast.success("Cập nhật sản phẩm thành công.");
    } catch (err) {
      setLoading(false);
      console.log("Có lỗi khi cập nhật sản phẩm bên fe", err);
      toast.error("Cập nhật bị lỗi.Vui lòng thử lại sau");
    } finally {
      setLoading(false);
    }
    // console.log("Dữ liệu cập nhật", data);
    // console.log("id nhận ddx", idProductVariant.current);
  };

  const handleDelete = async (product) => {
    let confirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm ",
      product.name
    );
    if (confirmed) {
      try {
        await deleteProduct(product.infoProduct.id, product.id);
        toast.success("Xóa thành công");
        let allProducts = await getAllProducts();
        setListProducts(allProducts.data.data);
      } catch (err) {
        console.log("Có lỗi bên fe khi xóa sản phẩm", err);
        toast.error("Có lỗi.Vui lòng thử lại sau.");
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setIsUpdate(false);
    setName("");
    setPrice("");
    setGender("");
    setCategory("");
    setStockQuantity("");
    setSize("");
    setIsBestSelling(false);
    setIsFeatured(false);
    setIsNew(false);
    setColor("");
    setDes("");
    setMainImage("");
    setListImages("");
  };
  const handleShow = () => {
    setShow(true);
  };

  const columns = [
    { name: "ProductId", selector: (row) => row.productId, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    {
      name: "Images",
      cell: (row) => (
        <img src={row.mainImage} alt={row.name} style={{ height: "140px" }} />
      ),
    },
    { name: "Giới tính", selector: (row) => row.gender, sortable: true },
    { name: "Size", selector: (row) => row.size, sortable: true },
    { name: "Color", selector: (row) => row.color, sortable: true },
    { name: "Price", selector: (row) => row.price, sortable: true },
    {
      name: "Số Lượng trong kho",
      selector: (row) => row.stock_quantity,
      sortable: true,
    },
    {
      name: "Số Lượng bán ra",
      selector: (row) => row.sold_quantity,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex">
          <button
            // style={{
            //   border: "none",
            //   backgroundColor: "white",
            //   minWidth: "100px",
            // }}
            onClick={() => handleUpdateProduct(row)}
          >
            Update
          </button>
          <button onClick={() => handleDelete(row)}>Delete</button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (Object.keys(groupedProducts).length > 0) {
      console.log("group", groupedProducts);
      const data = groupedProducts.flatMap((products) =>
        products.items.map((product, index) => ({
          productId: index === 0 ? products.productId : "",
          id: product.infoProduct.id,
          name: product.name,
          mainImage: product.infoProduct.mainImage,
          gender: product.infoProduct.infogender.name,
          size: product.infoProduct.infoSize.name,
          color: product.infoProduct.color,
          price: product.price,
          stock_quantity: product.infoProduct.stock_quantity,
          sold_quantity: product.infoProduct.sold_quantity,
          images: product.infoProduct.images,
          infoProduct: product,
        }))
      );
      console.log("groupda", data);
      setNewDataTable(data);
    }
  }, [groupedProducts]);
  return (
    <>
      <NavQuanLy />
      <div className="mx-4 my-4 ">
        {/* modal thêm sản phẩm */}

        <Button variant="primary" onClick={handleShow}>
          Thêm sản phẩm
        </Button>

        <Modal show={show} onHide={handleClose} className="customer_modal">
          <Modal.Header closeButton>
            <Modal.Title>Thêm mới sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label for="name" className="my-2">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isUpdate}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div class="form-group">
                    <label for="price" className="my-2">
                      Price
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      disabled={isUpdate}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <select
                    class="form-select my-4"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    disabled={isUpdate}
                  >
                    <option selected>Chọn giới tính</option>
                    {listGenders &&
                      listGenders.length > 0 &&
                      listGenders.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="col-6">
                  <select
                    class="form-select my-4"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    disabled={isUpdate}
                  >
                    <option selected>Chọn danh mục</option>
                    {listCategorys &&
                      listCategorys.length > 0 &&
                      listCategorys.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="col-6">
                  <div class="form-group">
                    <label for="stockquantity" className="my-2">
                      StockQuantity
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="stockquantity"
                      value={stockQuantity}
                      onChange={(e) => setStockQuantity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <select
                    class="form-select my-4 form-size"
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                    disabled={isUpdate}
                  >
                    <option selected>Chọn size</option>
                    {listSizes &&
                      listSizes.length > 0 &&
                      listSizes.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="col-6 d-flex align-items-end">
                  <div class="form-group">
                    <label for="category" className="my-2">
                      Sản phẩm bán chạy nhất
                    </label>
                    <select
                      className="mx-4"
                      onChange={(e) => setIsBestSelling(e.target.value)}
                      value={isbestselling}
                      disabled={isUpdate}
                    >
                      <option value={false}>Không</option>
                      <option value={true}>Có</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="category" className="my-2">
                      Sản phẩm nổi bật
                    </label>
                    <select
                      className="mx-4"
                      onChange={(e) => setIsFeatured(e.target.value)}
                      value={isFeatured}
                      disabled={isUpdate}
                    >
                      <option value={false}>Không</option>
                      <option value={true}>Có</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="category" className="my-2">
                      Sản phẩm mới về
                    </label>
                    <select
                      className="mx-4"
                      onChange={(e) => setIsNew(e.target.value)}
                      value={isNew}
                      disabled={isUpdate}
                    >
                      <option value={false}>Không</option>
                      <option value={true}>Có</option>
                    </select>
                  </div>
                </div>

                <div className="col-6 d-flex align-items-center">
                  <div className="form-group ">
                    <label for="mausac">Màu sắc: </label>
                    <input
                      type="text"
                      id="mausac"
                      style={{
                        padding: "4px",
                        border: "1px solid gray",
                        borderRadius: "4px",
                      }}
                      onChange={(e) => setColor(e.target.value)}
                      value={color}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div class="form-group">
                    <label for="des" className="my-2">
                      Des
                    </label>
                    <textarea
                      style={{ width: "100%", height: "80px" }}
                      onChange={(e) => setDes(e.target.value)}
                      value={des}
                      disabled={isUpdate}
                    />
                  </div>
                </div>

                <div className="col-12 my-4">
                  <label for="mainImage">Chọn ảnh chính sản phẩm</label>

                  <input
                    id="mainImage"
                    type="file"
                    accept="image/*"
                    className="form-control d-none"
                    onChange={(e) => handleChangeMainInput(e)}
                  />
                </div>

                <div className="col-12 my-4">
                  {/* {console.log("main", mainImage)} */}
                  {mainImage && (
                    <img
                      src={mainImage}
                      alt="ảnh"
                      className="img-thumbnail"
                      style={{ maxHeight: "200px", width: "auto" }}
                    />
                  )}
                </div>

                <div className="col-12 my-4">
                  <label for="images">Chọn ảnh sản phẩm</label>
                  <input
                    id="images"
                    name="images"
                    multiple
                    type="file"
                    accept="image/*"
                    className="form-control d-none"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>

                <div className="col-12 my-4">
                  {/* {console.log("tất cả ảnh", listImages)} */}
                  {listImages && listImages.length > 0 && <h4>Ảnh đã chọn</h4>}
                  <div className="row">
                    {listImages &&
                      listImages.length > 0 &&
                      listImages.map((image, index) => {
                        return (
                          <div className="col-md-3">
                            <img
                              src={image}
                              alt={`selected-image-${index}`}
                              className="img-thumbnail"
                              style={{ maxHeight: "200px", width: "auto" }}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="d-flex flex-row">
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            {isUpdate ? (
              <button
                className="btn btn-primary my-3"
                disabled={loading}
                onClick={handleUpdate}
              >
                Cập nhật thông tin
              </button>
            ) : (
              <button
                onClick={handleCreatProduct}
                className="btn btn-primary my-3"
                disabled={loading}
              >
                Tạo sản phẩm
              </button>
            )}
          </Modal.Footer>
        </Modal>

        {/* modal thêm sản phẩm */}

        {loading ? (
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="spinner-border" role="status"></div>
            <div>Loading...</div>
          </div>
        ) : Object.keys(groupedProducts).length > 0 ? (
          <DataTable
            title="Product List"
            columns={columns}
            data={newDataTable}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
            highlightOnHover
            pointerOnHover
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ManageProducts;
