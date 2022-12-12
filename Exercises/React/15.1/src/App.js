import React from "react";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import { urls } from "./constants";
import Error from "./Components/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path={urls.HOMEPAGE_PAGE} element={<Homepage />} />
        <Route exact path={urls.PRODUCTS_PAGE} element={<Products />} />
        <Route path={"/products/:productId"} element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
