// src/ProductFilter.js
import React, { useState } from "react";
import ProductFilter from "../ProductFilter";
import Navigation from "../Home/Navbar";
import { useLocation, useParams } from "react-router-dom";
import ListProducts from "../listProducts";

const PageMen = () => {
  return (
    <>
      <Navigation />
      <div className="container" style={{ marginTop: "51px" }}>
        {/* <h1>Tên sản phẩm: {productName || "Không có thông tin sản phẩm."}</h1> */}
        <div className="row">
          <div className="col-2">
            <ProductFilter />
          </div>
          <div className="col-10">
            <ListProducts />
          </div>
        </div>
      </div>
    </>
  );
};
export default PageMen;
