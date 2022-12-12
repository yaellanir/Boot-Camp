import { store } from "../store";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { urls } from "../constants";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(store);
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <Link key={product.id} to={`${urls.PRODUCTS_PAGE}/${product.id}`}>
            <div>{product.title}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
