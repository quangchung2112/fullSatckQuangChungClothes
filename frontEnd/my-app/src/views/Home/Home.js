import { Container } from "react-bootstrap";
import "./Home.scss";
import Navigation from "./Navbar";
import SliceHome from "./Slice/index";
import Popularproducts from "../Popularproducts";
import background from "../../assets/images/background.webp";
import OutstandingCollection from "./outstanding_collection";
const Home = () => {
  // const dispatch = useDispatch();
  // const countAllProductInSh=useSelector(state=>state.infoInShoppingCart.count)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let result = await getALLCountInShoppingCart();
  //       dispatch(countInShoppingCart({ count: result.data.data }));
  //     } catch (err) {
  //       console.log("Lỗi ở fe lấy tất cả số lượng trong giỏ hàng", err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Container>
        {/* thanh điều hướng */}
        <Navigation />
        {/* thanh điều hướng */}

        {/* phần slice */}
        <div className="sliceHome">
          <SliceHome />
        </div>
        {/* phần slice */}
        {/* Sản phẩm ưa chuộng */}
        <Popularproducts />
        {/* Sản phẩm ưa chuộng */}

        {/* Bộ sưu tập nổi bật */}
        <OutstandingCollection />
        {/* Bộ sưu tập nổi bật */}

        {/* background */}
        <img
          style={{ width: "100%", objectFit: "contain " }}
          src={background}
          alt="background"
        />
        {/* background */}
      </Container>
    </>
  );
};
export default Home;
