import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/userSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { createTransform } from "redux-persist";
import infoProducts from "./slice/productSlice";
const authTransform = createTransform(
  // Tùy chỉnh dữ liệu trước khi lưu
  (inboundState) => {
    // console.log("lưu", inboundState);
    return {
      isAuthenticated: inboundState.isAuthenticated, // Chỉ lưu thuộc tính isAuthenticated
      name: inboundState?.user?.name || "",
      id: inboundState?.user?.id || "",
    };
  },
  // Tùy chỉnh dữ liệu khi khôi phục
  (outboundState) => {
    // console.log("có vào ko", outboundState);
    return {
      isAuthenticated: outboundState.isAuthenticated,
      user: {
        name: outboundState?.name || "",

        id: outboundState?.id || "",
      },

      // Khôi phục user và token thành null (hoặc không khôi phục)
    };
  },
  { whitelist: ["auth"] } // Chỉ áp dụng cho authSlice
);
//cấu hình redux persist
const persistConfig = {
  key: "root",
  storage,
  // transforms: [authTransform],
  // whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  infoInShoppingCart: infoProducts,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
