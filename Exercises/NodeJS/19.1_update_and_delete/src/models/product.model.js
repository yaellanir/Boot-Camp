import mongoose from "mongoose";
import productSchema from "./product.schema.js";
// import validator from 'validator';

const Product = mongoose.model("products", productSchema);


export default Product;
