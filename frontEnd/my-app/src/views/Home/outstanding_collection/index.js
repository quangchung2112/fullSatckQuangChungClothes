import aogiunhat from "../../../assets/images/aogiunhiet.webp";
import yodyjeans from "../../../assets/images/yodyJeansmain.webp";
import aokhoacgio from "../../../assets/images/aokhoacgio.webp";
import docongso from "../../../assets/images/docongso.webp";

import "./index.scss";
import { Link } from "react-router-dom";
const OutstandingCollection = () => {
  return (
    <>
      <div className="container ">
        <h2 className="text-center my-4">Bộ sưu tập nổi bật</h2>
        <div className="row outstanding " style={{ display: "flex" }}>
          <div className="col-3 collection">
            <Link to="/collection?productName=áo giữ nhiệt">
              <div className="item-collection">
                <img src={aogiunhat} alt="anh" />
                <h5 style={{ marginTop: "30px" }}>Áo giữ nhiệt XTRA-HEAT™</h5>
                <p>
                  Công nghệ khóa ấm, hạn chế thoát nhiệt tự động, hạn chế tĩnh
                  điện mùa đông.
                </p>
                <button
                  style={{
                    background: "#f2f5f8",
                    padding: "4px 18px",
                    borderRadius: "10px",
                  }}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </Link>
          </div>

          <div className="col-3 collection">
            <Link to="/page/collection_jeans?productName=quần jeans">
              <div className="item-collection">
                <img src={yodyjeans} alt="anh" />
                <h5 style={{ marginTop: "30px" }}>YODY Jeans</h5>
                <p>
                  Công nghệ mới đột phá, tôn dáng với chất liệu mềm mại, thoáng
                  khí, siêu co giãn.
                </p>
                <button
                  style={{
                    background: "#f2f5f8",
                    padding: "4px 18px",
                    borderRadius: "10px",
                  }}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </Link>
          </div>

          <div className="col-3 collection">
            <Link>
              <div className="item-collection">
                <img src={aokhoacgio} alt="anh" />
                <h5 style={{ marginTop: "30px" }}>Áo khoác gió</h5>
                <p>
                  Thoải mái tận hưởng mọi chuyến đi không lo thời tiết khắc
                  nghiệt.
                </p>
                <button
                  style={{
                    background: "#f2f5f8",
                    padding: "4px 18px",
                    borderRadius: "10px",
                  }}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </Link>
          </div>

          <div className="col-3 collection">
            <Link>
              <div className="item-collection">
                <img src={docongso} alt="anh" />
                <h5 style={{ marginTop: "30px" }}>Đồ Công sở - Smart.Cool </h5>
                <p>
                  Thiết kế tinh tế, tôn dáng, co giãn linh hoạt, mang lại sự
                  thoải mái cho mọi hoạt động.
                </p>
                <button
                  style={{
                    background: "#f2f5f8",
                    padding: "4px 18px",
                    borderRadius: "10px",
                  }}
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutstandingCollection;
