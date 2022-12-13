import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/products", (err, client) => {
  if (err) {
    console.log("err", err);
  }
  const { host, port, name } = client;
  console.log({ host, port, name });
});
