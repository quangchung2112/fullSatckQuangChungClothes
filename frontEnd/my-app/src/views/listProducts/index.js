import "./index.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getAllProductByCategory,
  getAllNewProducts,
} from "../../service/API/index";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { formatPrice } from "../../shared";
import { saveInfoProduct } from "../../config/redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
const coverName = (name) => {
  if (!name) return "";
  let arrName = name.trim().split(" ");
  let result = arrName.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  });
  return result.join(" ");
};

const ListProducts = ({ type }) => {
  //Lấy chữ cuối lặp ra để lấy quần Jeans phân loại
  if (type) {
    var searchString = type.split(" ");
    searchString = searchString[searchString.length - 1];
  }
  //Lấy chữ cuối lặp ra để lấy quần Jeans phân loại

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productCategory, setProductCategory] = useState([]);
  const [searchParams] = useSearchParams();
  const [hoveredProductId, setHoveredProductId] = useState({});
  const productName = searchParams.get("productName");
  const infoProductName = coverName(productName);
  const limit = 5;
  let [offSet, setOffSet] = useState(0);
  const [loading, setLoading] = useState(true);
  const infoGender = searchParams.get("gender") || "";
  const [hasMore, setHasMore] = useState(true);
  const listAll = ["Áo Nam", "Áo Nữ", "Quần Nữ", "Quần Nam"];
  const coverInfoGender =
    infoGender.charAt(0).toUpperCase() + infoGender.slice(1).toLowerCase();
  const color = useSelector((state) => state.infoInShoppingCart.filter.color);
  const size = useSelector((state) => state.infoInShoppingCart.filter.size);

  dispatch(
    saveInfoProduct({ categoryName: infoProductName, gender: coverInfoGender })
  );

  const handleDetailProduct = (item, getALLColors) => {
    navigate({
      pathname: "/detail/product",
      search: `?productId=${item.id}&color=${hoveredProductId[item.id].name}`,
    });
  };

  // Xử lý lấy thêm sản phẩm
  const handleSeeMore = () => {
    setLoading(true);
    setOffSet((preCount) => preCount + 5);
    // console.log(offSet);
  };

  // Xử lý lấy thêm sản phẩm

  const fetchData = async () => {
    setLoading(true);
    try {
      let result = "";

      if (productName === "sản phẩm mới") {
        result = await getAllNewProducts(offSet, limit, true, color, size);
        console.log(result);
        result = result.data.data;
      } else {
        result = await getAllProductByCategory(
          infoProductName,
          coverInfoGender,
          limit,
          offSet,
          color,
          size
        );
        // console.log("nhận", result);
        result = result.data.data;
      }

      console.log(result);

      let infoFirstProduct = {};
      let listInfo =
        result &&
        result.length > 0 &&
        result?.map((item) => {
          return item.infoProduct[0];
        });

      //Lọc ra loại quần jean
      if (type) {
        // console.log("trong type", result.data.data);
        let nhan = [...result];
        let filterByType = nhan.filter((i) => {
          return i.name.toLowerCase().includes(searchString.toLowerCase());
        });
        result = filterByType;
        listInfo = filterByType.map((item) => {
          return item.infoProduct[0];
        });
      }

      //Lọc ra loại quần jean
      // console.log("list", listInfo);
      const filteredArr =
        listInfo &&
        listInfo.length > 0 &&
        listInfo.filter((item) => item !== undefined);

      // console.log("fik", filteredArr);

      filteredArr &&
        filteredArr.length > 0 &&
        filteredArr.forEach((info) => {
          // console.log(info);
          infoFirstProduct[info?.productId] = {
            color: info?.mainImage,
            name: info?.color,
          };
        });
      // console.log("list info", infoFirstProduct);
      // console.log("res dtaat", result.data.data);
      if (result.length < limit) {
        setHasMore(false);
      }
      setHoveredProductId((preHover) => {
        return {
          ...preHover,
          ...infoFirstProduct,
        };
      });
      setProductCategory((preProduct) => {
        return [...preProduct, ...result];
      });
    } catch (err) {
      console.log(
        "lỗi bên phía frontEnd lấy tất cả sản phẩm theo danh much",
        err
      );
      toast.error("Có lỗi");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("chuyển tên");ư
    offSet = 0;
    setOffSet(offSet);
    setHasMore(true);
    setHoveredProductId({});
    setProductCategory([]);
    fetchData();
  }, [infoProductName, color, size]);

  useEffect(() => {
    if (offSet > 0) {
      fetchData();
    }
  }, [offSet]);

  const handleMouseEnter = (color, item) => {
    let isExist = item.infoProduct.find((product) => {
      return product.mainImage === color;
    });
    if (isExist) {
      setHoveredProductId((prev) => ({
        ...prev,
        [item.id]: { color, name: isExist.color }, // Lưu thông tin sản phẩm theo id
      }));
    }
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div class="spinner-border" role="status"></div>{" "}
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="container">
          <>
            <div className="row my-5">
              {productCategory &&
                productCategory.length > 0 &&
                productCategory.map((item, index) => {
                  console.log("item nhan lai", item);
                  const mainImage =
                    item?.infoProduct &&
                    item?.infoProduct.length > 0 &&
                    item?.infoProduct[0].mainImage;
                  // const getAllColorProduct =
                  //   item?.infoProduct &&
                  //   item?.infoProduct.length > 0 &&
                  //   Array.from(
                  //     new Set(
                  //       item?.infoProduct.map(
                  //         (itemMainImage) => itemMainImage.mainImage
                  //       )
                  //     )
                  //   );
                  // console.log("getAllColorProduct", getAllColorProduct);
                  let getAllColorProduct =
                    item?.infoProduct &&
                    item?.infoProduct.length > 0 &&
                    Array.from(
                      new Set(
                        item?.infoProduct.map((itemMainImage) =>
                          JSON.stringify({
                            name: itemMainImage.color,
                            mainImage: itemMainImage.mainImage,
                          })
                        )
                      )
                    ).map(JSON.parse);

                  const uniqueProducts = {};
                  getAllColorProduct.length > 0 &&
                    getAllColorProduct.forEach((i) => {
                      if (!uniqueProducts[i.name]) {
                        uniqueProducts[i.name] = {
                          name: i.name,
                          mainImage: i.mainImage,
                        };
                      }
                    });

                  getAllColorProduct = Object.keys(uniqueProducts).map(
                    (name) => {
                      return uniqueProducts[name].mainImage;
                    }
                  );

                  return item?.infoProduct && item?.infoProduct.length > 0 ? (
                    <>
                      <div
                        className="col-3"
                        onClick={() =>
                          handleDetailProduct(item, getAllColorProduct)
                        }
                        key={item.id}
                      >
                        <div class="card" style={{ width: "18rem;" }}>
                          <>
                            <div>
                              {hoveredProductId[item.id] ? (
                                <img
                                  className="card-img-top"
                                  src={hoveredProductId[item.id]?.color} // Hình ảnh mặc định
                                  alt="Hình ảnh sản phẩm"
                                />
                              ) : (
                                <img
                                  className="card-img-top"
                                  src={mainImage} // Hình ảnh mặc định
                                  alt="Hình ảnh sản phẩm"
                                />
                              )}
                            </div>

                            <div className="card-body">
                              <p className="card-title">{item?.name}</p>
                              <strong className="card-text">
                                {formatPrice(item?.price)}
                              </strong>
                              <div className="d-flex card-color">
                                {getAllColorProduct.map((color) => {
                                  // console.log("map", color);
                                  return (
                                    <>
                                      <div
                                        className={`item-color ${hoveredProductId[item.id]?.color === color ? "active" : ""}`}
                                      >
                                        <img
                                          src={color}
                                          alt="anh"
                                          className={``}
                                          onMouseEnter={() =>
                                            handleMouseEnter(color, item)
                                          }
                                        />
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  );
                })}
            </div>
            {hasMore && (
              <div className="text-center" onClick={handleSeeMore}>
                <button
                  style={{
                    backgroundColor: "white",
                    padding: "10px 38px",
                    borderRadius: "14px",
                  }}
                >
                  Xem thêm
                </button>
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default ListProducts;
