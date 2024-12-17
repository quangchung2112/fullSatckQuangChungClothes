import { useEffect, useState } from "react";
import "./index.scss";
import { getAllProducts } from "../../service/API";
import { formatPrice } from "./../../shared/index";
import { Link, useNavigate } from "react-router-dom";
import { getAllNewProducts } from "../../service/API";

const Popularproducts = () => {
  const [listNewProduct, setListNewProduct] = useState("");
  const [mouseEnterColor, setMouseEnterColor] = useState({});
  const [allColorOfEachProduct, setAllColorOfEachProduct] = useState();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(4);

  const navigate = useNavigate();

  const handleMouseEnter = (id, color) => {
    mouseEnterColor[id] = {
      ...color,
    };
    setMouseEnterColor({ ...mouseEnterColor });
  };

  const handleDetailProduct = async (item) => {
    let name = mouseEnterColor[item].nameColor;
    navigate({
      pathname: "/detail/product",
      search: `?productId=${item}&color=${name}`,
    });
  };

  const fetchData = async () => {
    // let result = await getAllProducts(offset, limit);
    let result = await getAllNewProducts(offset, limit, true);
    let isNewProduct = result.data.data.filter((item) => {
      return item.isNew === 1;
    });

    console.log("kq nhận lại", isNewProduct);

    let groupProduct =
      isNewProduct &&
      isNewProduct.reduce((accc, item, index) => {
        if (!accc[item.id]) {
          accc[item.id] = [];
        }
        accc[item.id].push(item);
        return accc;
      }, {});

    // let allColorOfEachProduct =
    //   isNewProduct &&
    //   isNewProduct.reduce((acc, i) => {
    //     if (!acc[i.id]) {
    //       acc[i.id] = [];
    //     }
    //     acc[i.id].push({
    //       nameColor: i.infoProduct.color,
    //       color: i.infoProduct.mainImage,
    //     });
    //     return acc;
    //   }, {});

    let allColorOfEachProduct =
      result &&
      result.data.data.reduce((acc, i) => {
        if (!acc[i.id]) {
          acc[i.id] = [];
        }
        result.data.data.forEach((i1) => {
          if (i.id === i1.id) {
            i1.infoProduct.forEach((item) => {
              if (item.productId) {
                acc[i.id].push({
                  nameColor: item.color,
                  color: item.mainImage,
                });
              }
            });
          }
        });

        return acc;
      }, {});

    // console.log("nhóm màu biến tấu", allColorOfEachProduct1);
    console.log("nhóm màu", allColorOfEachProduct);

    const allColors = {};

    if (allColorOfEachProduct) {
      Object.keys(allColorOfEachProduct).forEach((i) => {
        allColors[i] = Array.from(
          new Set(allColorOfEachProduct[i].map(JSON.stringify))
        ).map(JSON.parse);
      });
    }

    const firstOfEachProduct = {};
    if (allColors) {
      Object.keys(allColors).forEach((i) => {
        firstOfEachProduct[i] = allColors[i][0];
      });
    }

    // console.log("first", firstOfEachProduct);
    setMouseEnterColor(firstOfEachProduct);
    setAllColorOfEachProduct(allColors);
    setListNewProduct(groupProduct);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="my-5 popularContainer">
        <h4 className="text-center" style={{ fontWeight: "600" }}>
          Sản phẩm ưa chuộng
        </h4>
        <div className="choosebtn text-center" style={{ margin: "26px" }}>
          <button
            style={{
              padding: "10px",
              fontWeight: "600",
              fontSize: "20px",
            }}
            className={"active"}
          >
            Hàng mới về
          </button>
        </div>
        <div
          className={`d-flex flex-wrap  ${listNewProduct && Object.keys(listNewProduct).length > 2 ? "justify-content-around" : ""}`}
          // style={{ margin: "0" }}
        >
          {listNewProduct &&
            Object.keys(listNewProduct).length > 0 &&
            Object.keys(listNewProduct).map((item) => {
              return (
                <div
                  class="card "
                  style={{ width: "18rem", marginBottom: "40px" }}
                  onClick={() => handleDetailProduct(item)}
                >
                  {mouseEnterColor[item] ? (
                    <img
                      src={mouseEnterColor[item].color}
                      class="card-img-top"
                      alt={item.name}
                    />
                  ) : (
                    <img
                      src={listNewProduct[item][0].infoProduct.mainImage}
                      class="card-img-top"
                      alt={item.name}
                    />
                  )}

                  <div class="card-body">
                    <p class="card-title">{listNewProduct[item][0].name}</p>
                    <p>
                      <strong>
                        {formatPrice(listNewProduct[item][0].price)}
                      </strong>
                    </p>
                    <div className="color">
                      {allColorOfEachProduct[item].map((i) => {
                        return (
                          <span
                            style={{
                              height: "20px",
                              width: "20px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              display: "inline-block",
                              marginRight: "6px",
                            }}
                            className={
                              mouseEnterColor[item].color === i.color &&
                              "active"
                            }
                          >
                            <img
                              onMouseEnter={() => handleMouseEnter(item, i)}
                              style={{ scale: "20" }}
                              src={i.color}
                              alt="mau"
                            />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Link
          to={`/collection/newProduct?productName=sản phẩm mới`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="d-flex justify-content-center">
            <button
              style={{
                color: "#424242",
                width: "380px",
                height: "48px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              Xem thêm
            </button>
          </div>{" "}
        </Link>
      </div>
    </>
  );
};

export default Popularproducts;
