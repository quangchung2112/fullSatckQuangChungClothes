import ProductFilter from "../ProductFilter";
import ListProducts from "./../listProducts/index";
const CollectionAoGiuNhiet = () => {
  return (
    <>
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

export default CollectionAoGiuNhiet;
