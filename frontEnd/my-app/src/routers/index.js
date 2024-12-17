import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login/Login";
import Home from "../views/Home/Home";
import PageMen from "../views/Men/pageMen";
import DetailProduct from "../views/detailProduct";
import ManageProducts from "./../views/manageProduct/manageProducts";
import ManageColor from "../views/manageProduct/Color/color";
import ManageSize from "../views/manageProduct/Size/size";
import ManageCategories from "../views/manageProduct/Category/category";
import ShoppingCart from "../views/ShoppingCart/shoppingCart";
import Order from "../views/Order";
import CollectionAoGiuNhiet from "../views/collectionaogiunhiet";
import CollectionJeans from "../views/collectionJeans";
import PrivateRouter from "../views/privateRoute";
import ManageOrder from "../views/manageOrder";
import CollectionNewProducts from "../views/collectionNewProducts";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCart />,
  },
  {
    path: "/product",
    element: <PageMen />,
  },
  {
    path: "/detail/product",
    element: <DetailProduct />,
  },

  {
    path: "/product/manage_colors",
    element: (
      <PrivateRouter>
        <ManageColor />
      </PrivateRouter>
    ),
  },
  {
    path: "/product/manage_products",
    element: (
      <PrivateRouter>
        <ManageProducts />
      </PrivateRouter>
    ),
  },
  {
    path: "/product/manage_sizes",
    element: (
      <PrivateRouter>
        <ManageSize />
      </PrivateRouter>
    ),
  },
  {
    path: "/product/manage_categories",
    element: (
      <PrivateRouter>
        <ManageCategories />
      </PrivateRouter>
    ),
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/collection",
    element: <CollectionAoGiuNhiet />,
  },
  {
    path: "/page/collection_jeans",
    element: <CollectionJeans />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/orders/mangae_orders",
    element: (
      <PrivateRouter>
        <ManageOrder />
      </PrivateRouter>
    ),
  },
  {
    path: "/collection/newProduct",
    element: <CollectionNewProducts />,
  },
  {
    path: "*",
    element: <p>404 Not Found</p>,
  },
]); //added a path for our route

export default router;
