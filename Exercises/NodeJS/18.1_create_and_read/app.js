import express from "express";
import "./src/db/mongoose.js";
import Product from "./src/models/product.model.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening to PORT" + PORT);
});

// api route for creating a new product
app.post("/products", (req, res) => {
  const product = new Product(req.body);
  // console.log(Product);
  product
    .save()
    .then(() => res.send(product))
    .catch((err) => {
      res.status(400).send(err);
    });
});
//  check these functions below
app.get("/products", (req, res) => {
  console.log(req.query);
  const productsToFind = req.query.active ? { isActive: true } : {};
  Product.find(productsToFind)
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/products/:id", (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/filter/products/", (req, res) => {
  console.log(req.body);
  const { min, max } = req.body;
  Product.find({ price: { $gt: min, $lt: max } })
    .then((products) => {
      res.send(products).status(200);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
