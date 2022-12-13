import express from "express";
import "./src/db/mongoose.js";
import Product from "./src/models/product.model.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening to PORT" + PORT);
});

app.delete("/products/:id", (req, res) => {
  const _id = req.params.id;
  Product.deleteOne({ _id: _id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete("/products", (req, res) => {
  Product.deleteMany({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.patch("/products/:id", async (req, res) => {
  const validKeys = ["name", "description", "price", "category", "isActive"];
  const requestKeys = Object.keys(req.body);
  console.log(requestKeys);

  const _id = req.params.id;
  try {
    requestKeys.forEach((key) => {
      if (!validKeys.includes(key)) {
        throw new Error("Invalid key: " + key);
      }
    });
    console.log("after validate keys");
    const newUpdatedProduct = await Product.findByIdAndUpdate(_id, {
      ...req.body,
      // {new: true, runValidators: true}
    });
    // await newUpdatedProduct.save();
    res.status(200).send(newUpdatedProduct);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
