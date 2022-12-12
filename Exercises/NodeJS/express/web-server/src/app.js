const path = require("path");
const express = require("express");

// console.log(__dirname);
// console.log(patch.join(__dirname, "../public"));

const app = express();
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.send("<h1>Weather<hi/>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "yael",
      age: 38,
    },
    { name: "yitz", age: 33 },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h2>About<h2/>");
});
app.get("/weather", (req, res) => {
  res.send({ forecast: "It is rainy", location: "Tel-aviv, Israel" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
