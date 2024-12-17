import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store, persistor } from "./config/redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import ManageProducts from "./views/manageProduct/manageProducts";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />

          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
