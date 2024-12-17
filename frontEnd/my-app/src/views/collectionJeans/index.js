import Navigation from "../Home/Navbar";
import YodyJeans from "../../assets/images/yodyJeans.webp";
import "./index.scss";
import text from "../../assets/images/text.webp";
import text1 from "../../assets/images/text2.webp";
import text2 from "../../assets/images/text3.webp";
import text3 from "../../assets/images/text4.webp";
import ListProducts from "../listProducts";
const CollectionJeans = () => {
  return (
    <>
      <Navigation />
      <div className="container collection-jeans" style={{ marginTop: "76px" }}>
        <div className="row">
          <div className="background">
            <img src={YodyJeans} alt="anh" />
          </div>

          <div className="text">
            <img src={text} alt="anh" />
          </div>

          <div className="video">
            <video autoPlay loop muted>
              <source src="https://m.yodycdn.com/products/media/video/website/jeans-nhuom-den-des-1800x833.mp4" />
            </video>
          </div>

          <div className="text1">
            <img src={text1} alt="anh" />
          </div>

          <div className="text1">
            <img src={text2} alt="anh" />
          </div>

          <div className="text1">
            <img src={text3} alt="anh" />
          </div>

          <div>
            <ListProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionJeans;
