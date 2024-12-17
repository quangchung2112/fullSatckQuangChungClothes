import ListProducts from "../listProducts";
import NavQuanLy from "../navquanli";
import ProductFilter from "../ProductFilter";

const CollectionNewProducts = () => {
  return (
    <>
      <NavQuanLy />
      <div className="container">
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

export default CollectionNewProducts;
