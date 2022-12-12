import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { store } from "../store";

function ProductDetails() {
  // const params = useParams();
  const { productId } = useParams();
  // console.log(params);

  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    setProductInfo(store.find((product) => product.id === parseInt(productId)));
    // console.log(
    //   store,
    //   store.find((product) => {
    //     console.log(product.id, productId);
    //     return product.id === parseInt(productId);
    //   })
    // );
  }, [productId]);

  //!Why not do the one liner below?
  // const productInfo = store.find((product) => product.id == productId);

  return (
    <div>
      <h3>{productInfo?.title}</h3>
      <img style={{ maxWidth: "100%" }} src={productInfo?.imageUrl} alt="" />
      <h4>{productInfo?.price}</h4>
      <h4>{productInfo?.size}</h4>
    </div>
  );
}

export default ProductDetails;
